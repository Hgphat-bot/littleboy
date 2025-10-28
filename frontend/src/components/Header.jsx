import { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
// Import các tài nguyên (logo, icon tìm kiếm)
import logo from '../assets/logo.ico';
import search_icon from '../assets/search-b.png'

// Định nghĩa component Header
const Header = () => {
	// State lưu trữ vị trí cuộn Y cuối cùng, dùng để so sánh hướng cuộn
	const [lastScrollY, setLastScrollY] = useState(0);
	// State lưu trữ chuỗi class CSS (Tailwind) để điều khiển hiệu ứng ẩn/hiện Header
	const [headerClasses, setHeaderClasses] = useState("translate-y-0 opacity-100"); 

	// State kiểm soát trạng thái đóng/mở của menu di động
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// **********************************************
	// ********** Hàm Xử lý Cuộn (handleScroll) **********
	// **********************************************
	// Sử dụng useCallback để ghi nhớ hàm, tránh tạo lại hàm trong mỗi lần render (tối ưu useEffect)
	const handleScroll = useCallback(() => {
		// Ngưỡng cuộn (số pixel) để bắt đầu ẩn Header
		const SCROLL_THRESHOLD = 150;
		
		// Logic Ẩn Header:
		// 1. Cuộn xuống (window.scrollY > lastScrollY)
		// VÀ
		// 2. Vị trí cuộn đã vượt qua ngưỡng ban đầu (window.scrollY > SCROLL_THRESHOLD)
		if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
			// Thiết lập class để ẩn Header (dịch chuyển lên 100px và ẩn đi)
			setHeaderClasses("-translate-y-[100px] opacity-0");
		} 
		// Logic Hiện Header:
		// Nếu cuộn lên (window.scrollY < lastScrollY)
		else if (window.scrollY < lastScrollY) {
			// Thiết lập class để hiện Header (trở về vị trí ban đầu và hiển thị đầy đủ)
			setHeaderClasses("translate-y-0 opacity-100");
		}
		// Cập nhật vị trí cuộn Y cuối cùng
		setLastScrollY(window.scrollY);
	}, [lastScrollY]); // Dependency: Chạy lại khi 'lastScrollY' thay đổi

	// **********************************************
	// ********** useEffect: Đăng ký Sự kiện Cuộn **********
	// **********************************************
	useEffect(() => {
		// Đăng ký sự kiện lắng nghe 'scroll' với hàm xử lý 'handleScroll'
		// passive: true để cải thiện hiệu năng cuộn
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Hàm dọn dẹp (cleanup) khi component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]); // Dependency: Chạy lại khi 'handleScroll' thay đổi

	// **********************************************
	// ********** Render Header **********
	// **********************************************
	return (
		<header>
			{/* Container chính của Header: Cố định, căn giữa, áp dụng hiệu ứng ẩn/hiện */}
			<div className={`flex items-center justify-between bg-[#034078] py-2 px-[7%] fixed top-5 inset-x-0 mx-auto max-w-[95%] z-50 shadow-lg/35 rounded-xl ring-1 ring-[#EDE9DA] transition-all duration-300 ease-in-out shadow-2xl ${headerClasses}`} >
				
				{/* Phần Logo và Tiêu đề */}
				<Link to="/" className='logo-section flex items-center no-underline'>
					{/* Logo */}
					<img src={logo} alt="logo" className='logo h-12 w-auto'/>
					{/* Tiêu đề (Chỉ hiển thị trên màn hình lớn hơn md) */}
					<h1 className="text-3xl font-bold text-white md:block hidden ml-2">LITTLEBOY</h1> 
				</Link>

				{/* Nút Menu Hamburger/Close (Chỉ hiển thị trên thiết bị di động) */}
				<button 
					className="md:hidden text-white p-2 focus:outline-none" 
					onClick={() => setIsMenuOpen(!isMenuOpen)} // Chuyển đổi trạng thái đóng/mở menu
				>
					{/* Biểu tượng Close (khi menu mở) hoặc Hamburger (khi menu đóng) */}
					{isMenuOpen ? (
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
					) : (
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					)}
				</button>
				
				{/* Menu Điều hướng chính (Chỉ hiển thị trên màn hình lớn hơn md) */}
				<ul className="hidden md:flex flex-1 list-none text-right text-white items-center justify-end"> 
					{/* Mục Home (sử dụng Link từ react-router-dom) */}
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">
						<Link to="/" className="text-white no-underline">Home</Link>
					</li>
					{/* Các mục khác */}
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Products</li>
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Features</li>
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">About</li>
				
					{/* Khung Tìm kiếm */}
					<div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10 ml-5">
						<input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg max-w-[150px] w-full"/>
						<img src={search_icon} alt='Search' className="w-5 cursor-pointer ml-2"/>
					</div>
				</ul>
			</div>
			
			{/* Menu Di động (Mobile Menu) - Chỉ hiển thị khi isMenuOpen là true */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#034078] fixed top-24 inset-x-0 mx-auto max-w-[95%] z-40 rounded-xl shadow-2xl p-4 transition-all duration-300">
					<ul className="list-none text-white text-center"> 
						{/* Các mục điều hướng trong Menu di động */}
						<Link to="/" className="text-white no-underline block" onClick={() => setIsMenuOpen(false)}>
							<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors">Home</li>
						</Link>
						<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</li>
						<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</li>
						<li className="py-2 text-xl cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</li>
					</ul>

					{/* Khung Tìm kiếm trong Menu di động */}
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