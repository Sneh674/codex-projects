import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4 shadow-md">
                <ul className="flex space-x-6 justify-center text-white">
                    <li>
                        <Link 
                            to="/" 
                            className="hover:text-cyan-400 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="hover:text-cyan-400 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className="hover:text-cyan-400 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
