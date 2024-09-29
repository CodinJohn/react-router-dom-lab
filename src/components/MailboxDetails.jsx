// src/components/MailboxDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams(); // Access the URL parameter
    const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

    if (!selectedBox) {
        return <h2>Mailbox Not Found!</h2>;
    }

    return (
        <div>
            <h2>Mailbox Details</h2>
            <p>Box Number: {selectedBox._id}</p>
            <p>Name of Boxholder: {selectedBox.boxholder}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </div>
    );
};

export default MailboxDetails;
