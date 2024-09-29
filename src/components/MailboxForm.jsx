import React, { useState } from 'react';

const MailboxForm = ({ addBox }) => {
    const [boxholder, setBoxholder] = useState('')
    const [boxSize, setBoxSize] = useState('Small')

    const handleSubmit = (event) => {
        event.preventDefault()
        addBox({ boxholder, boxSize})
        setBoxholder('')
        setBoxSize('Small')

    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={boxholder}
            onChange={(e) => setBoxholder(e.target.value)}
            placeholder= 'Name of Boxholder'
            required
            />
            <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
                <option value='Small'>Small</option>
                <option value='Medium'>Medium</option>
                <option value='Large'>Large</option>
            </select>
            <button type='submit'>Create Mailbox</button>
        </form>
    )
};

export default MailboxForm;