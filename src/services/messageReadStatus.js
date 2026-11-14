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
