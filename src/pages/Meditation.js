import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';

function Meditation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const meditationTips = [
        {
            title: 'Morning Meditation',
            content: (
                <div>
                    <p>Focus on your breathing for 10 minutes.</p>
                    <div className="mt-4">
                        <button
                            onClick={() =>
                                handleOpenModal(
                                    'Morning Meditation',
                                    'Morning meditation sets a positive tone for the day. Practice deep breathing and visualize your goals.'
                                )
                            }
                            className="bg-teal-500 text-white px-4 py-2 rounded-full shadow hover:bg-teal-400 transition-colors"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            ),
        },
        {
            title: 'Evening Reflection',
            content: (
                <div>
                    <p>Think of three things you’re grateful for.</p>
                    <div className="mt-4">
                        <button
                            onClick={() =>
                                handleOpenModal(
                                    'Evening Reflection',
                                    'Evening meditation helps unwind and reflect. Practice gratitude and let go of negative thoughts.'
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
            <h2 className="text-3xl font-bold mb-6 text-teal-600 text-center">Meditation Practices</h2>
            {meditationTips.map((tip, index) => (
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

export default Meditation;
