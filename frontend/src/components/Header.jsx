import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.ico';
import search_icon from '../assets/search-b.png'

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerClasses, setHeaderClasses] = useState("translate-y-0 opacity-100"); 

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = useCallback(() => {
        const SCROLL_THRESHOLD = 150;
        if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
            setHeaderClasses("-translate-y-[100px] opacity-0");
        } 
        else if (window.scrollY < lastScrollY) {
            setHeaderClasses("translate-y-0 opacity-100");
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <header>
            <div className={`flex items-center justify-between bg-[#034078] py-2 px-[7%] fixed top-5 inset-x-0 mx-auto max-w-[95%] z-50 shadow-lg/35 rounded-xl ring-1 ring-[#EDE9DA] transition-all duration-300 ease-in-out shadow-2xl ${headerClasses}`} >
                
                <Link to="/" className='logo-section flex items-center no-underline'>
                    <img src={logo} alt="logo" className='logo h-12 w-auto'/>
                    <h1 className="text-3xl font-bold text-white md:block hidden ml-2">LITTLEBOY</h1> 
                </Link>

                <button 
                    className="md:hidden text-white p-2 focus:outline-none" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
                
                <ul className="hidden md:flex flex-1 list-none text-right text-white items-center justify-end"> 
                    <li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">
                        <Link to="/" className="text-white no-underline">Home</Link>
                    </li>
                    <li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Products</li>
                    <li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Features</li>
                    <li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">About</li>
                
                    <div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10 ml-5">
                        <input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg max-w-[150px] w-full"/>
                        <img src={search_icon} alt='Search' className="w-5 cursor-pointer ml-2"/>
                    </div>
                </ul>
            </div>
            
            {isMenuOpen && (
                <div className="md:hidden bg-[#034078] fixed top-24 inset-x-0 mx-auto max-w-[95%] z-40 rounded-xl shadow-2xl p-4 transition-all duration-300">
                    <ul className="list-none text-white text-center"> 
                        <Link to="/" className="text-white no-underline block" onClick={() => setIsMenuOpen(false)}>
                            <li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors">Home</li>
                        </Link>
                        <li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</li>
                        <li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</li>
                        <li className="py-2 text-xl cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</li>
                    </ul>

                    <div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10 mt-4 mx-auto max-w-sm">
                        <input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg w-full"/>
                        <img src={search_icon} alt='Search' className="w-5 cursor-pointer ml-2"/>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;