import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border-b">
            <button
                className="w-full text-left text-lg font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            {isOpen && <div className="p-4">{content}</div>}
        </div>
    );
}

export default Accordion;
