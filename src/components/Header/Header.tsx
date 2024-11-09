// src/components/Header.tsx
import { useState } from 'react';
import Logo from '../../ui/Logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Software Service', path: '/software' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="py-[20px] md:py-[35px] flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 border-b-[1px] border-[#FFFFFF1A]">
            <div className="flex gap-4 items-center">
                <Logo />
                <h1 className="text-white">Smart Lights</h1>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" /> // Close icon when open
                ) : (
                    <Bars3Icon className="h-6 w-6" /> // Hamburger icon when closed
                )}
            </button>

            {/* Navigation Links */}
            <nav
                className={`flex-col md:flex-row items-center gap-8 md:flex ${isMenuOpen ? 'flex' : 'hidden'
                    } absolute md:static top-[80px] left-0 right-0 bg-black md:bg-transparent z-10 md:z-auto transition-all duration-300`}
            >
                <ul className="flex flex-col md:flex-row gap-6 items-center">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.path}
                                className="text-white hover:text-gray-300"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="px-7 py-3 text-white font-[425] bg-gradient-to-r from-[#3661FF] to-[#0085FF] rounded-[2px]">
                    Login
                </button>
            </nav>
        </header>
    );
};

export default Header;
