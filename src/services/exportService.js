class ExportService {
    async exportChat(messages, chatName) {
        let content = '';
        
        // Формат TXT
        content += `💬 Чат: ${chatName}\n`;
        content += `📅 Экспортирован: ${new Date().toLocaleString()}\n`;
        content += '='.repeat(40) + '\n\n';
        
        messages.forEach(msg => {
            const time = msg.createdAt?.toDate?.()?.toLocaleString() || '';
            const sender = msg.senderName || 'Пользователь';
            const text = msg.text || (msg.type === 'image' ? '[Фото]' : msg.type === 'voice' ? '[Голосовое]' : '[Файл]');
            content += `[${time}] ${sender}: ${text}\n`;
        });
        
        // Скачиваем
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vortex-export-${chatName}-${Date.now()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    async exportAllChats(chats, messagesMap) {
        let content = '🌪️ VORTEX — ПОЛНЫЙ ЭКСПОРТ\n\n';
        
        for (const chat of chats) {
            const msgs = messagesMap[chat.id] || [];
            content += `\n${'='.repeat(50)}\n`;
            content += `💬 ${chat.name || 'Чат'}\n`;
            content += `${'='.repeat(50)}\n\n`;
            
            msgs.forEach(msg => {
                const time = msg.createdAt?.toDate?.()?.toLocaleString() || '';
                content += `[${time}] ${msg.senderName}: ${msg.text || '[Медиа]'}\n`;
            });
        }
        
        const blob = new Blob([content], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `vortex-full-export-${Date.now()}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

export const exportService = new ExportService();