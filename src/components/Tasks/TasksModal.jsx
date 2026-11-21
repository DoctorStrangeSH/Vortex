import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { Icon } from '../UI/Icon';
import { trapDialogTab } from '../../utils/dialogFocus.js';

const storageKey = uid => `vortex-tasks:${uid}`;
function readTasks(uid) {
    try {
        const parsed = JSON.parse(localStorage.getItem(storageKey(uid)) || '[]');
        return Array.isArray(parsed) ? parsed.filter(item => item && typeof item.id === 'string' && typeof item.title === 'string').slice(0, 500) : [];
    } catch { return []; }
}
const filters = [
    {id:'all',label:'Все'},
    {id:'active',label:'В работе'},
    {id:'done',label:'Готово'}
];
export function TasksModal({ user, onClose }) {
    const [tasks, setTasks] = useState(() => readTasks(user.uid));
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [filter, setFilter] = useState('all');
    const [error, setError] = useState('');
    const [storageError, setStorageError] = useState('');
    const dialogRef = useRef(null);
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;
    useEffect(() => {
        setTasks(readTasks(user.uid));
        setTitle('');
        setFilter('all');
    }, [user.uid]);
    useEffect(() => {
        try { localStorage.setItem(storageKey(user.uid), JSON.stringify(tasks)); setStorageError(''); }
        catch { setStorageError('Браузер не разрешил сохранить задачи. Изменения могут пропасть при перезагрузке.'); }
    }, [tasks, user.uid]);
    useEffect(() => {
        const previous = document.activeElement;
        dialogRef.current?.querySelector('button:not([disabled]), input:not([disabled])')?.focus();
        const onKey = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onCloseRef.current?.();
                return;
            }
            trapDialogTab(event, dialogRef.current);
        };
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            previous?.focus?.();
        };
    }, []);

    const addTask = event => {
        event.preventDefault();
        const normalized = title.trim();
        if (!normalized) { setError('Введите название задачи'); return; }
        if (normalized.length > 160) { setError('Название слишком длинное'); return; }
        const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        setTasks(current => [{id, title:normalized, done:false, createdAt:Date.now(), dueDate:dueDate || ''},...current].slice(0,500));
        setTitle('');
        setDueDate('');
        setError('');
        setFilter('all');
    };
    const toggleTask = id => setTasks(current => current.map(task => task.id === id ? {...task,done:!task.done} : task));
    const deleteTask = id => setTasks(current => current.filter(task => task.id !== id));
    const visible = useMemo(() => tasks.filter(task => filter === 'all' || (filter === 'done' ? task.done : !task.done)), [tasks,filter]);
    const done = tasks.filter(task => task.done).length;
    return <div class="vortex-dialog-overlay" style={s.overlay} onClick={onClose}>
        <section ref={dialogRef} class="vortex-dialog-surface vortex-tasks-dialog" role="dialog" aria-modal="true" aria-labelledby="vortex-tasks-title" tabIndex={-1} style={s.modal} onClick={event => event.stopPropagation()}>
            <header style={s.header}>
                <div><div style={s.eyebrow}>VORTEX / МОЙ ПЛАН</div><h2 id="vortex-tasks-title" style={s.title}>Задачи</h2><p style={s.description}>Маленькие шаги к большим результатам.</p></div>
                <button type="button" style={s.close} aria-label="Закрыть задачи" onClick={onClose}><Icon name="close"/></button>
            </header>
            <div class="vortex-tasks-content" style={s.content}>
                <div style={s.summary}>
                    <span style={s.summaryIcon}><Icon name="tasks" size={25}/></span>
                    <div><div style={s.summaryValue}>{done} <span style={s.summaryOf}>/ {tasks.length}</span></div><div style={s.summaryCaption}>задач выполнено</div></div>
                    <div style={s.progressTrack}><div style={{...s.progressFill,width:`${tasks.length ? done / tasks.length * 100 : 0}%`}}/></div>
                </div>
                <form onSubmit={addTask} style={s.form}>
                    <label for="vortex-new-task" style={s.label}>НОВАЯ ЗАДАЧА</label>
                    <div class="vortex-tasks-input-row" style={s.inputRow}>
                        <input id="vortex-new-task" value={title} maxLength={160} onInput={e => {setTitle(e.currentTarget.value);setError('');}} placeholder="Что нужно сделать?" style={s.input}/>
                        <button type="submit" aria-label="Добавить задачу" disabled={!title.trim()} class="vortex-primary-button vortex-tasks-add" style={s.add}><Icon name="plus" size={21}/><span>Добавить</span></button>
                    </div>
                    <div style={s.dateRow}><label for="vortex-task-date">Срок (необязательно)</label><input id="vortex-task-date" type="date" value={dueDate} onInput={e => setDueDate(e.currentTarget.value)} style={s.date}/></div>
                </form>
                {(error || storageError) && <p role="alert" style={s.error}>{error || storageError}</p>}
                <div style={s.tabs} role="group" aria-label="Показать задачи">
                    {filters.map(tab => <button key={tab.id} type="button" aria-pressed={filter===tab.id} onClick={() => setFilter(tab.id)} style={{...s.tab,...(filter===tab.id ? s.tabActive : {})}}>{tab.label}</button>)}
                </div>
                <div style={s.list} aria-live="polite">
                    {visible.length === 0 && <div style={s.empty}><span style={s.emptyIcon}><Icon name="tasks" size={26}/></span><strong>{tasks.length ? 'В этом разделе пока пусто' : 'Время начать'}</strong><span>{tasks.length ? 'Переключите фильтр, чтобы увидеть другие задачи.' : 'Создайте первую задачу — она появится здесь.'}</span></div>}
                    {visible.map(task => <div key={task.id} style={s.task}>
                        <button type="button" aria-label={task.done ? `Вернуть в работу: ${task.title}` : `Выполнить: ${task.title}`} aria-pressed={Boolean(task.done)} onClick={() => toggleTask(task.id)} style={{...s.checkbox,...(task.done ? s.checkboxDone : {})}}>{task.done && <Icon name="check" size={16}/>}</button>
                        <div style={s.taskText}><div style={{...s.taskTitle,...(task.done ? s.completed : {})}}>{task.title}</div>{task.dueDate && <div style={s.taskDate}>Срок: {task.dueDate.split('-').reverse().join('.')}</div>}</div>
                        <button type="button" aria-label={`Удалить задачу: ${task.title}`} title="Удалить" onClick={() => deleteTask(task.id)} style={s.delete}><Icon name="trash" size={18}/></button>
                    </div>)}
                </div>
                <p style={s.footnote}>Задачи хранятся в этом браузере отдельно для вашего аккаунта. Синхронизация между устройствами появится позже.</p>
            </div>
        </section>
    </div>;
}
const s={
    overlay:{position:'fixed',inset:0,zIndex:1000,background:'rgba(2,4,16,.72)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:16},
    modal:{background:'var(--bg-secondary)',border:'1px solid var(--border-default)',borderRadius:24,width:560,maxWidth:'100%',maxHeight:'calc(100vh - 32px)',overflowY:'auto',boxShadow:'0 30px 90px rgba(0,0,0,.45)'},
    header:{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:14,padding:'26px 28px 20px',borderBottom:'1px solid var(--border-subtle)'},
    eyebrow:{fontSize:10,letterSpacing:'.16em',fontWeight:850,color:'var(--text-tertiary)',marginBottom:8},
    title:{fontSize:24,fontWeight:800,margin:0,color:'var(--text-primary)'},
    description:{fontSize:13,color:'var(--text-secondary)',margin:'9px 0 0'},
    close:{width:36,height:36,border:'1px solid var(--border-subtle)',background:'var(--bg-tertiary)',color:'var(--text-secondary)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},
    content:{padding:'23px 26px 26px'},
    summary:{display:'flex',gap:14,alignItems:'center',padding:'18px',border:'1px solid var(--border-subtle)',borderRadius:18,background:'var(--bg-tertiary)',marginBottom:23,flexWrap:'wrap'},
    summaryIcon:{width:50,height:50,borderRadius:16,background:'var(--gradient-brand)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'},
    summaryValue:{fontSize:23,color:'var(--text-primary)',fontWeight:800},
    summaryOf:{fontSize:16,color:'var(--text-tertiary)'},
    summaryCaption:{fontSize:12,color:'var(--text-tertiary)'},
    progressTrack:{height:7,borderRadius:9,background:'var(--border-default)',overflow:'hidden',flex:'1 0 90px',marginLeft:'auto'},
    progressFill:{height:'100%',background:'var(--gradient-brand)',borderRadius:9,transition:'width 220ms ease'},
    form:{marginBottom:20},label:{fontSize:10,fontWeight:800,letterSpacing:'.13em',color:'var(--text-tertiary)',display:'block',marginBottom:10},
    inputRow:{display:'flex',gap:8,flexWrap:'wrap'},
    input:{flex:'1 1 190px',minWidth:0,padding:'13px 14px',background:'var(--bg-tertiary)',border:'1px solid var(--border-default)',borderRadius:12,color:'var(--text-primary)',fontSize:14,fontFamily:'inherit',outline:0},
    add:{display:'flex',gap:7,alignItems:'center',justifyContent:'center',padding:'12px 15px',border:0,borderRadius:12,background:'var(--gradient-brand)',color:'#fff',fontWeight:700,fontFamily:'inherit',cursor:'pointer'},
    dateRow:{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap',marginTop:12,fontSize:12,color:'var(--text-secondary)'},
    date:{background:'var(--bg-tertiary)',color:'var(--text-primary)',border:'1px solid var(--border-default)',borderRadius:10,padding:'7px 10px',fontFamily:'inherit'},
    tabs:{display:'flex',gap:7,marginBottom:14},
    tab:{border:'1px solid var(--border-subtle)',borderRadius:11,background:'transparent',color:'var(--text-secondary)',fontSize:12,fontWeight:650,padding:'9px 12px',cursor:'pointer'},
    tabActive:{background:'var(--bg-active)',borderColor:'var(--border-default)',color:'var(--text-primary)'},
    list:{maxHeight:'min(280px,35vh)',overflowY:'auto'},
    task:{display:'flex',alignItems:'center',gap:11,padding:'12px',border:'1px solid var(--border-subtle)',borderRadius:13,marginBottom:8},
    checkbox:{height:25,width:25,borderRadius:8,flexShrink:0,background:'transparent',border:'1.5px solid var(--text-tertiary)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',cursor:'pointer'},
    checkboxDone:{background:'var(--gradient-brand)',borderColor:'transparent'},
    taskText:{minWidth:0,flex:1},
    taskTitle:{fontSize:14,fontWeight:600,color:'var(--text-primary)',overflowWrap:'anywhere'},
    completed:{textDecoration:'line-through',color:'var(--text-tertiary)'},
    taskDate:{fontSize:11,color:'var(--text-tertiary)',marginTop:5},
    delete:{height:32,width:32,border:0,borderRadius:10,background:'transparent',color:'var(--text-tertiary)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},
    empty:{minHeight:156,display:'flex',flexDirection:'column',gap:9,alignItems:'center',justifyContent:'center',textAlign:'center',fontSize:13,color:'var(--text-tertiary)'},
    emptyIcon:{width:51,height:51,borderRadius:16,background:'var(--bg-tertiary)',color:'var(--text-secondary)',display:'flex',alignItems:'center',justifyContent:'center'},
    error:{color:'var(--vortex-danger)',background:'rgba(239,68,68,.1)',borderRadius:10,padding:11,fontSize:12},
    footnote:{fontSize:11,lineHeight:1.5,color:'var(--text-tertiary)',margin:'19px 0 0'}
};