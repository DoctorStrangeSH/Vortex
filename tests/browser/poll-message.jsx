import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { PollMessage } from '../../src/components/Chat/PollMessage.jsx';

function Fixture() {
    const [selected, setSelected] = useState('Blue');
    const [events, setEvents] = useState([]);
    const poll = {
        question: 'Какой цвет выбрать?',
        options: ['Red', 'Blue'],
        totalVotes: 3,
        votes: { Red: ['user-b'], Blue: ['user-c', 'user-d'], 'user-a': selected }
    };
    const onVote = option => {
        setSelected(option);
        setEvents(current => [...current, option]);
    };
    return h('section', null, [
        h('output', { 'data-testid': 'vote-events' }, JSON.stringify(events)),
        h(PollMessage, { poll, userId: 'user-a', onVote })
    ]);
}

render(h(Fixture), document.getElementById('app'));
