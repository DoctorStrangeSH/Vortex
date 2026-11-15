// Firestore readBy tracks readers, not device delivery acknowledgements.
export function getMessageReadStatus(message, participants = [], senderUid) {
    const recipients = [...new Set(participants.filter(uid => uid && uid !== senderUid))];
    const readers = new Set(message?.readBy || []);
    const readCount = recipients.filter(uid => readers.has(uid)).length;
    const recipientCount = recipients.length;
    return {
        readCount,
        recipientCount,
        state: recipientCount > 0 && readCount === recipientCount ? 'read' : readCount > 0 ? 'partially_read' : 'sent'
    };
}

// A visible status for touch screens; readBy cannot prove device delivery.
export function getMessageReadPresentation(message, participants, senderUid) {
    const { state, readCount, recipientCount } = getMessageReadStatus(message, participants, senderUid);
    return {
        state,
        symbol: state === 'sent' ? '✓' : '✓✓',
        progress: recipientCount > 1 && state === 'partially_read' ? `${readCount}/${recipientCount}` : '',
        title: state === 'read' ? 'Прочитано всеми участниками' :
            state === 'partially_read' ? `Прочитали ${readCount} из ${recipientCount}` :
            'Отправлено · прочтение не подтверждено'
    };
}
