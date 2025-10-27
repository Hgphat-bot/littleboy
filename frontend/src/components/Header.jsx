// Header.jsx

// Import các hook cần thiết từ React
import { useState, useEffect, useCallback } from 'react';
// Import Link từ react-router-dom để điều hướng
import { Link } from "react-router-dom";
// Import các tài nguyên hình ảnh (logo và icon tìm kiếm)
import logo from '../assets/logo.png';
import search_icon from '../assets/search-b.png'

// Định nghĩa component Header
const Header = () => {
	// State để lưu trữ vị trí cuộn Y cuối cùng (phục vụ cho logic ẩn/hiện)
	const [lastScrollY, setLastScrollY] = useState(0);
	
	// State để lưu trữ các class CSS Tailwind cho hiệu ứng ẩn/hiện header
	const [headerClasses, setHeaderClasses] = useState("translate-y-0 opacity-100"); 

	// State để kiểm soát trạng thái mở/đóng của menu di động
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Hàm xử lý sự kiện cuộn (scroll) - sử dụng useCallback để tối ưu hiệu suất
	const handleScroll = useCallback(() => {
		// Ngưỡng cuộn Y mà sau đó Header sẽ bắt đầu ẩn
		const SCROLL_THRESHOLD = 150;
		
		// 1. Cuộn xuống: Nếu cuộn xuống VÀ đã cuộn qua ngưỡng, ẩn Header
		if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
			// Ẩn: Di chuyển lên trên và giảm độ mờ (opacity)
			setHeaderClasses("-translate-y-[100px] opacity-0");
		} 
		// 2. Cuộn lên: Nếu cuộn lên (ngược lại với lastScrollY), hiện Header
		else if (window.scrollY < lastScrollY) {
			// Hiện: Trả về vị trí ban đầu và độ mờ 100%
			setHeaderClasses("translate-y-0 opacity-100");
		}
		
		// Cập nhật vị trí cuộn Y cuối cùng
		setLastScrollY(window.scrollY);
	}, [lastScrollY]); // Chạy lại khi lastScrollY thay đổi

	// Hook useEffect để đăng ký và hủy đăng ký sự kiện 'scroll'
	useEffect(() => {
		// Đăng ký lắng nghe sự kiện cuộn với tùy chọn passive: true (để cải thiện hiệu suất)
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		// Hàm dọn dẹp (cleanup) - loại bỏ lắng nghe sự kiện khi component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]); // Chạy lại khi handleScroll thay đổi

	// Trả về JSX (cấu trúc hiển thị)
	return (
		<header>
			{/* Container chính của Header: Cố định, căn giữa, có hiệu ứng chuyển đổi ẩn/hiện */}
			<div className={`flex items-center justify-between bg-[#034078] py-2 px-[7%] fixed top-5 inset-x-0 mx-auto max-w-[95%] z-50 shadow-2xl/40 rounded-xl transition-all duration-300 ease-in-out ${headerClasses}`} >
				
				{/* --- PHẦN LOGO VÀ TÊN THƯƠNG HIỆU --- */}
				<Link to="/" className='logo-section flex items-center no-underline'>
					{/* Hiển thị logo */}
					<img src={logo} alt="logo" className='logo h-12 w-auto'/>
					{/* Hiển thị tên thương hiệu (chỉ hiển thị trên màn hình lớn - md:block) */}
					<h1 className="text-3xl font-bold text-white md:block hidden ml-2">LITTLEBOY</h1> 
				</Link>

				{/* --- NÚT MENU (DÀNH CHO DI ĐỘNG) --- */}
				<button 
					className="md:hidden text-white p-2 focus:outline-none" 
					// Thay đổi trạng thái mở/đóng menu khi click
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{/* Icon đóng (X) nếu menu đang mở, Icon menu 3 gạch nếu menu đang đóng */}
					{isMenuOpen ? (
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
					) : (
						<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					)}
				</button>
				
				{/* --- DANH SÁCH MENU (DÀNH CHO DESKTOP) --- */}
				<ul className="hidden md:flex flex-1 list-none text-right text-white items-center justify-end"> 
					{/* Mục Home, sử dụng Link để điều hướng */}
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">
						<Link to="/" className="text-white no-underline">Home</Link>
					</li>
					{/* Các mục menu khác */}
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Products</li>
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">Features</li>
					<li className="my-2.5 mx-5 text-lg cursor-pointer hover:text-yellow-300 transition-colors">About</li>
				
					{/* Ô TÌM KIẾM (Search Box) */}
					<div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10 ml-5">
						{/* Input nhập liệu tìm kiếm */}
						<input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg max-w-[150px] w-full"/>
						{/* Icon tìm kiếm */}
						<img src={search_icon} alt='Search' className="w-5 cursor-pointer ml-2"/>
					</div>
				</ul>
			</div>
			
			{/* --- MENU DI ĐỘNG (MOBILE MENU) --- */}
			{isMenuOpen && (
				// Menu ẩn/hiện, nằm dưới Header chính, có nền và bóng
				<div className="md:hidden bg-[#034078] fixed top-24 inset-x-0 mx-auto max-w-[95%] z-40 rounded-xl shadow-2xl p-4 transition-all duration-300">
					<ul className="list-none text-white text-center"> 
						{/* Menu Home (Link) */}
						<Link to="/" className="text-white no-underline block" onClick={() => setIsMenuOpen(false)}>
							<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors">Home</li>
						</Link>
						{/* Các mục menu di động khác, đóng menu khi click */}
						<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Products</li>
						<li className="py-2 text-xl border-b border-blue-700 cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</li>
						<li className="py-2 text-xl cursor-pointer hover:bg-blue-800 transition-colors" onClick={() => setIsMenuOpen(false)}>About</li>
					</ul>

					{/* Ô TÌM KIẾM cho di động, nằm phía dưới danh sách menu */}
					<div className="search-box flex items-center bg-white py-2.5 px-5 rounded-full h-10 mt-4 mx-auto max-w-sm">
						<input type="text" placeholder='Search' className="p-1.5 bg-transparent border-none focus:outline-none text-black text-lg w-full"/>
						<img src={search_icon} alt='Search' className="w-5 cursor-pointer ml-2"/>
					</div>
				</div>
			)}
		</header>
	);
};

// Export component
export default Header;