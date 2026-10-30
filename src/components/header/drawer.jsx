import { X, ChevronDown, Send, PhoneCall } from "lucide-react";

import Icons from "../icons/Icons";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
    return (
        <>
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
                    isOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
            />

            <div
                className={`fixed top-0 left-0 h-full w-75 sm:w-[320px] bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col justify-between border-r border-[#d4a359]/30 shadow-2xl ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className='overflow-y-auto flex-1 p-5 space-y-4 custom-scrollbar'>
                    <div className='flex items-center justify-between pb-4 border-b border-gray-800'>
                        <Link to='/' className=''>
                            <img
                                src='/header/museum-logo.png'
                                className='h-16 w-16 object-cover'
                            />
                        </Link>
                        <button
                            onClick={onClose}
                            className='p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition'
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className='py-2'>
                        <button className='flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium'>
                            <span>🇬🇧 English</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>

                    <nav className='flex flex-col space-y-1 text-sm font-medium'>
                        <a
                            href='#home'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            Home
                        </a>
                        <a
                            href='#about'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            About Us
                        </a>
                        <a
                            href='#museum'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            About the museum
                        </a>
                        <a
                            href='#employees'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            Employees
                        </a>
                        <a
                            href='#collection'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            Museum Collection
                        </a>
                        <a
                            href='#gallery'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            Gallery
                        </a>

                        <div className='py-2.5 px-3 flex items-center justify-between text-gray-200 cursor-pointer border-b border-gray-800/40'>
                            <span>News</span>
                            <ChevronDown size={16} />
                        </div>

                        <a
                            href='#announcements'
                            className='py-2.5 px-3 rounded hover:bg-gray-800/60 transition text-gray-200 hover:text-white border-b border-gray-800/40'
                        >
                            Announcements
                        </a>
                    </nav>

                    <div className='pt-3'>
                        <a
                            href='#tickets'
                            className='flex items-center justify-between w-full px-4 py-2.5 bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold text-sm rounded-lg shadow-md transition-all duration-200'
                        >
                            <span>Buy tickets</span>
                            <span className='text-xs bg-amber-700/50 px-2 py-0.5 rounded'>
                                🎫
                            </span>
                        </a>
                    </div>
                </div>

                <div className='p-4 border-t border-gray-800 bg-[#141414]'>
                    <div className='flex items-center justify-center gap-4'>
                        <a
                            href='https://t.me'
                            target='_blank'
                            rel='noreferrer'
                            className='w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white hover:opacity-90 transition'
                        >
                            <Send size={18} />
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noreferrer'
                            className='w-10 h-10 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white hover:opacity-90 transition'
                        >
                            {Icons.instagram}
                        </a>
                        <a
                            href='https://wa.me'
                            target='_blank'
                            rel='noreferrer'
                            className='w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:opacity-90 transition'
                        >
                            <PhoneCall size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Drawer;
