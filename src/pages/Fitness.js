import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';

function Fitness() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const workoutTips = [
        {
            title: 'Warm-Up',
            content: (
                <div>
                    <p>Stretch for 5-10 minutes before starting.</p>
                    <div className="mt-4">
                        <button
                            onClick={() =>
                                handleOpenModal(
                                    'Warm-Up',
                                    'Warming up prepares your muscles and reduces the risk of injury. Incorporate light cardio and dynamic stretches.'
                                )
                            }
                            className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:bg-teal-500 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: 'Strength Training',
            content: (
                <div>
                    <p>Focus on form and control.</p>
                    <div className="mt-4">
                        <button
                            onClick={() =>
                                handleOpenModal(
                                    'Strength Training',
                                    'Strength training builds muscle and boosts metabolism. Use controlled movements and proper technique to prevent injuries.'
                                )
                            }
                            className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:bg-teal-500 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: 'Cardio',
            content: (
                <div>
                    <p>Keep a steady pace for 20-30 minutes.</p>
                    <div className="mt-4">
                        <button
                            onClick={() =>
                                handleOpenModal(
                                    'Cardio',
                                    'Cardio improves cardiovascular health and endurance. Activities include running, cycling, or swimming.'
                                )
                            }
                            className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:bg-teal-500 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ),
        },
    ];

    const handleOpenModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-teal-600 text-center">Fitness Tips</h2>
            {workoutTips.map((tip, index) => (
                <Accordion key={index} title={tip.title} content={tip.content} />
            ))}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalContent.title}
                content={modalContent.content}
            />
        </div>
    );
}

export default Fitness;
