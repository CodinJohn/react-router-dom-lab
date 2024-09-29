import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            {mailboxes.map((mailbox) => (
                <Link key={mailbox._id} to ={`/mailboxes/${mailbox._id}`} className='mail-box'>
                    {mailbox._id}
                </Link>
            ))}
        </div>
    )
};

export default MailboxList;