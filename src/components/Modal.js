import React from "react";

function Modal({ isOpen, onClose, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <p className="mb-6">{content}</p>
                <button
                    onClick={onClose}
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
