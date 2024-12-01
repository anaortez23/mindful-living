import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-500">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Hamburger Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Navigation Links */}
                <ul
                    className={`${isOpen ? 'block' : 'hidden'
                        } md:flex justify-center space-x-8 text-white font-semibold w-full`}
                >
                    <li>
                        <Link
                            to="/"
                            className="block md:inline-block hover:text-gray-200 transition-colors p-2 text-center"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditation"
                            className="block md:inline-block hover:text-gray-200 transition-colors p-2 text-center"
                        >
                            Meditation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/fitness"
                            className="block md:inline-block hover:text-gray-200 transition-colors p-2 text-center"
                        >
                            Fitness
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
