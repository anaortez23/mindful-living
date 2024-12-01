import React, { useEffect, useState } from 'react';

function DailyTip() {
    const [tip, setTip] = useState('');

    useEffect(() => {
        const tips = [
            'Take a deep breath and smile.',
            'Be mindful of your thoughts.',
            'Spend a moment appreciating your surroundings.',
        ];
        setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    return <p className="text-center bg-gray-100 p-4">{tip}</p>;
}

export default DailyTip;
