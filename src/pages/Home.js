import React from 'react';
import Carousel from '../components/Carousel';
import DailyTip from '../components/DailyTip';

function Home() {
    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Mindful Living</h2>
            <Carousel />
            <DailyTip />
        </div>
    );
}

export default Home;