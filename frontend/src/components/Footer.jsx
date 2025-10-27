// Footer.jsx

// Import các hook cần thiết từ react-router-dom để quản lý điều hướng
import { Link, useLocation } from 'react-router-dom';
// Import các hook cần thiết từ React
import { useState, useEffect, useRef } from 'react';

// Định nghĩa component Footer
const Footer = () => {
	// Sử dụng hook useLocation để lấy thông tin về URL hiện tại
	const location = useLocation();
	
	// Mảng định nghĩa các route (chương) có sẵn
	const routes = ['/chap1', '/chap2', '/chap3', '/chap4', '/chap5', '/chap6', '/chap7'];
	
	// Lấy đường dẫn hiện tại, loại bỏ dấu gạch chéo cuối cùng (nếu có) và chuyển thành chữ thường để so sánh
	const pathname = location.pathname.replace(/\/$/, '').toLowerCase();
	
	// Tìm chỉ mục (index) của đường dẫn hiện tại trong mảng routes
	const idx = routes.indexOf(pathname);

	// Tính toán đường dẫn chương trước đó
	const prev = idx > 0 ? routes[idx - 1] : null;
	// Tính toán đường dẫn chương tiếp theo
	const next = idx >= 0 && idx < routes.length - 1 ? routes[idx + 1] : null;

	// State để kiểm soát việc hiển thị (visible) hay ẩn (hidden) của footer
	const [visible, setVisible] = useState(true);
	// Ref để lưu trữ vị trí cuộn Y cuối cùng
	const lastScrollY = useRef(0);
	// Ref để lưu trữ vị trí chạm Y ban đầu (dùng cho thiết bị di động)
	const touchStartY = useRef(null);

	// State để kiểm soát trạng thái mở/đóng của menu thả xuống
	const [menuOpen, setMenuOpen] = useState(false);
	// Ref cho phần tử menu (để kiểm tra click bên ngoài)
	const menuRef = useRef(null);

	// --- LOGIC ẨN/HIỆN FOOTER KHI CUỘN (SCROLL) ---
	useEffect(() => {
		// Ngưỡng cuộn để kích hoạt việc ẩn/hiện footer
		const SCROLL_THRESHOLD = 50;

		// Hàm xử lý sự kiện cuộn (scroll)
		function onScroll() {
			// Lấy vị trí cuộn Y hiện tại
			const currentY = window.scrollY;
			
			// Nếu cuộn xuống một khoảng lớn hơn ngưỡng, ẩn footer
			if (currentY - lastScrollY.current > SCROLL_THRESHOLD) {
				setVisible(false);
			// Nếu cuộn lên một khoảng lớn hơn ngưỡng, hiện footer
			} else if (lastScrollY.current - currentY > SCROLL_THRESHOLD) {
				setVisible(true);
			}
			
			// Cập nhật vị trí cuộn Y cuối cùng
			lastScrollY.current = currentY;
		}

		// Hàm xử lý sự kiện chạm bắt đầu (onTouchStart)
		function onTouchStart(e) {
			// Lưu vị trí Y của lần chạm đầu tiên
			if (e.touches && e.touches.length) touchStartY.current = e.touches[0].clientY;
		}

		// Hàm xử lý sự kiện chạm kết thúc (onTouchEnd)
		function onTouchEnd(e) {
			// Thoát nếu không có vị trí chạm ban đầu
			if (touchStartY.current == null) return;
			
			// Lấy vị trí Y kết thúc của lần chạm
			const endY = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY) || null;
			// Thoát nếu không lấy được vị trí Y kết thúc
			if (endY == null) return;
			
			// Tính toán độ lệch (delta) giữa vị trí kết thúc và bắt đầu
			const delta = endY - touchStartY.current;
			
			// Ngưỡng vuốt để kích hoạt ẩn/hiện
			const SWIPE_THRESHOLD = 70;
			
			// Nếu vuốt xuống (delta > SWIPE_THRESHOLD), hiện footer
			if (delta > SWIPE_THRESHOLD) setVisible(true);
			// Nếu vuốt lên (delta < -SWIPE_THRESHOLD), ẩn footer
			else if (delta < -SWIPE_THRESHOLD) setVisible(false);
			
			// Reset vị trí chạm ban đầu
			touchStartY.current = null;
		}

		// Đăng ký các sự kiện cho window
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('touchstart', onTouchStart, { passive: true });
		window.addEventListener('touchend', onTouchEnd, { passive: true });

		// Hàm dọn dẹp (cleanup) - loại bỏ các lắng nghe sự kiện khi component unmount
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
		};
	}, []); // Mảng dependency rỗng, chỉ chạy một lần khi component mount

	// --- LOGIC ĐÓNG MENU KHI CLICK BÊN NGOÀI HOẶC NHẤN ESC ---
	useEffect(() => {
		// Hàm xử lý click bên ngoài menu
		function handleClickOutside(e) {
			// Nếu menu đang mở VÀ click không nằm trong phạm vi menuRef
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false); // Đóng menu
			}
		}
		
		// Hàm xử lý nhấn phím (key press)
		function handleKey(e) {
			// Nếu nhấn phím 'Escape', đóng menu
			if (e.key === 'Escape') setMenuOpen(false);
		}
		
		// Chỉ đăng ký sự kiện khi menu đang mở
		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleKey);
		}
		
		// Hàm dọn dẹp - loại bỏ các lắng nghe sự kiện
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKey);
		};
	}, [menuOpen]); // Chạy lại khi trạng thái menuOpen thay đổi

	// Class Tailwind CSS để tạo hiệu ứng chuyển động ẩn/hiện
	const translateClass = visible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0';

	// Trả về JSX (cấu trúc hiển thị của component)
	return (
		// Footer cố định ở cuối trang, áp dụng hiệu ứng chuyển đổi dựa trên translateClass
		<footer className={`fixed bottom-4 inset-x-0 flex justify-center transition-transform duration-300 ease-in-out ${translateClass}`} style={{ zIndex: 9999 }}>
			{/* Container chính của footer: nền mờ, bo tròn, có bóng và viền */}
			<div className="relative bg-gray-900/90 text-white backdrop-blur-sm rounded-full px-4 py-2 shadow-xl flex items-center gap-4 ring-1 ring-white/20">
				
				{/* --- NÚT 'PREV' (TRƯỚC) --- */}
				{prev ? (
					// Nếu có chương trước, hiển thị Link có thể click
					<Link to={prev} className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full hover:bg-gray-600 transition-colors">
						&larr; Prev
					</Link>
				) : (
					// Nếu không có chương trước, hiển thị Button bị disable
					<button className="px-4 py-2 bg-gray-700 rounded-full text-gray-400" disabled>
						&larr; Prev
					</button>
				)}

				{/* --- NÚT CHỌN CHƯƠNG/MENU THẢ XUỐNG --- */}
				<div className="relative" ref={menuRef}>
					<button
						// Sự kiện onClick: chuyển đổi trạng thái mở/đóng của menu
						onClick={() => setMenuOpen(s => !s)}
						className="text-sm text-white/90 px-3 py-1 rounded-full hover:bg-gray-800/70 focus:outline-none transition-colors"
						aria-expanded={menuOpen}
						aria-haspopup="menu"
					>
						{/* Hiển thị tên chương hiện tại hoặc 'Trang chủ' nếu không phải chương */}
						{idx >= 0 ? `Chương ${idx + 1} ▾` : 'Trang chủ ▾'}
					</button>

					{/* Hiển thị Menu thả xuống nếu menuOpen là true */}
					{menuOpen && (
						// Menu: cố định phía trên nút (bottom-full), căn giữa
						<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-52 bg-gray-800 text-white rounded-lg shadow-lg ring-1 ring-white/10 p-2">
							{/* Lặp qua mảng routes để tạo các Link cho từng chương */}
							{routes.map((r, i) => (
								<Link
									key={r}
									to={r}
									// Đóng menu khi click vào một Link
									onClick={() => setMenuOpen(false)}
									// Đánh dấu chương hiện tại bằng font-semibold và màu khác
									className={`block px-3 py-2 rounded transition-colors hover:bg-gray-700/60 ${i === idx ? 'font-semibold text-indigo-300' : 'text-gray-200'}`}
								>
									Chương {i + 1}
								</Link>
							))}
						</div>
					)}
				</div>

				{/* --- NÚT 'NEXT' (TIẾP THEO) --- */}
				{next ? (
					// Nếu có chương tiếp theo, hiển thị Link có thể click (với màu xanh nổi bật)
					<Link to={next} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors">
						Next &rarr;
					</Link>
				) : (
					// Nếu không có chương tiếp theo, hiển thị Button bị disable
					<button className="px-4 py-2 bg-gray-800 rounded-full text-gray-500" disabled>
						Next &rarr;
					</button>
				)}
			</div>
		</footer>
	);
};

// Export component để có thể sử dụng ở nơi khác
export default Footer;