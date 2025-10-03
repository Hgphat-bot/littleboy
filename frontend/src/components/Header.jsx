import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import search_icon from '../assets/search-b.png'

const Header = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerClasses, setHeaderClasses] = useState("translate-y-0 opacity-100"); 

    const handleScroll = useCallback(() => {
        const SCROLL_THRESHOLD = 150;

        if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
            setHeaderClasses("-translate-y-[100px] opacity-0");
        } 
        else if (window.scrollY < lastScrollY) {
            setHeaderClasses("translate-y-0 opacity-100");
        }
        
        setLastScrollY(window.scrollY);
    }, [lastScrollY, setHeaderClasses]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={`flex items-center justify-between bg-[#034078] py-2 px-[7%] fixed top-5 inset-x-0 mx-auto max-w-[95%] z-50 shadow-lg/35 rounded-xl ring-1 ring-[#EDE9DA] transition-all duration-300 ease-in-out shadow-2xl ${headerClasses}`} >
            <Link to="/" className='logo-section flex items-center no-underline'>
                <img src={logo} alt="logo" className='logo h-12 w-auto'/>
                <h1 className="text-3xl font-bold text-white">LITTLEBOY</h1> 
            </Link>
            <ul className="flex-1 list-none text-right text-white"> 
                <li className="inline-block my-2.5 mx-5 text-lg cursor-pointer">Home</li>
                <li className="inline-block my-2.5 mx-5 text-lg cursor-pointer">Products</li>
                <li className="inline-block my-2.5 mx-5 text-lg cursor-pointer">Features</li>
                <li className="inline-block my-2.5 mx-5 text-lg cursor-pointer">About</li>
            </ul>

            <div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10">
                <input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg max-w-xs"/>
                <img src={search_icon} alt='' className="w-5 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Header;