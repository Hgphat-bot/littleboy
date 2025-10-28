import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

// Định nghĩa component Footer
const Footer = () => {
	// Lấy đối tượng vị trí hiện tại từ react-router-dom
	const location = useLocation();
	// Mảng định nghĩa các route (đường dẫn) của các chương
	const routes = ['/chap1', '/chap2', '/chap3', '/chap4', '/chap5', '/chap6', '/chap7'];
	// Lấy đường dẫn hiện tại, loại bỏ dấu '/' ở cuối (nếu có), và chuyển về chữ thường để so sánh
	const pathname = location.pathname.replace(/\/$/, '').toLowerCase();
	// Tìm chỉ mục (index) của đường dẫn hiện tại trong mảng routes
	const idx = routes.indexOf(pathname);

	// Tính toán đường dẫn chương trước (Prev): nếu không phải chương đầu tiên (idx > 0)
	const prev = idx > 0 ? routes[idx - 1] : null;
	// Tính toán đường dẫn chương tiếp theo (Next): nếu đường dẫn hợp lệ và không phải chương cuối cùng
	const next = idx >= 0 && idx < routes.length - 1 ? routes[idx + 1] : null;

	// State để kiểm soát việc hiển thị/ẩn Footer (mặc định là hiển thị)
	const [visible, setVisible] = useState(true);
	// Ref để lưu trữ vị trí cuộn Y cuối cùng để so sánh (không gây re-render)
	const lastScrollY = useRef(0);
	// Ref để lưu trữ vị trí chạm Y ban đầu khi vuốt trên thiết bị di động
	const touchStartY = useRef(null);

	// State để kiểm soát trạng thái đóng/mở của menu danh sách chương
	const [menuOpen, setMenuOpen] = useState(false);
	// Ref để tham chiếu đến element của menu, dùng để xử lý đóng menu khi click bên ngoài
	const menuRef = useRef(null);

	// **********************************************
	// ********** useEffect: Xử lý Cuộn & Vuốt **********
	// **********************************************
	useEffect(() => {
		// Ngưỡng cuộn (số pixel) để kích hoạt ẩn/hiện Footer
		const SCROLL_THRESHOLD = 50;

		// Hàm xử lý sự kiện cuộn (Scroll)
		function onScroll() {
			const currentY = window.scrollY;
			// Nếu cuộn xuống một khoảng lớn hơn ngưỡng, ẩn Footer
			if (currentY - lastScrollY.current > SCROLL_THRESHOLD) {
				setVisible(false);
			}
			// Nếu cuộn lên một khoảng lớn hơn ngưỡng, hiện Footer
			else if (lastScrollY.current - currentY > SCROLL_THRESHOLD) {
				setVisible(true);
			}
			// Cập nhật vị trí cuộn cuối cùng
			lastScrollY.current = currentY;
		}

		// Hàm xử lý sự kiện chạm bắt đầu (TouchStart) trên thiết bị di động
		function onTouchStart(e) {
			// Lưu trữ vị trí Y khi bắt đầu chạm
			if (e.touches && e.touches.length) touchStartY.current = e.touches[0].clientY;
		}

		// Hàm xử lý sự kiện chạm kết thúc (TouchEnd) trên thiết bị di động
		function onTouchEnd(e) {
			// Bỏ qua nếu không có vị trí chạm bắt đầu
			if (touchStartY.current == null) return;
			// Lấy vị trí Y khi chạm kết thúc
			const endY = (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY) || null;
			// Bỏ qua nếu không lấy được vị trí chạm kết thúc
			if (endY == null) return;
			// Tính toán độ chênh lệch (delta) Y
			const delta = endY - touchStartY.current;
			// Ngưỡng vuốt (số pixel) để kích hoạt ẩn/hiện Footer
			const SWIPE_THRESHOLD = 70;
			// Nếu vuốt xuống (delta dương), hiện Footer
			if (delta > SWIPE_THRESHOLD) setVisible(true);
			// Nếu vuốt lên (delta âm), ẩn Footer
			else if (delta < -SWIPE_THRESHOLD) setVisible(false);
			// Đặt lại vị trí chạm ban đầu
			touchStartY.current = null;
		}

		// Đăng ký các sự kiện lắng nghe (passive: true để tối ưu hiệu năng cuộn)
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('touchstart', onTouchStart, { passive: true });
		window.addEventListener('touchend', onTouchEnd, { passive: true });

		// Hàm dọn dẹp (cleanup) khi component unmounts (hủy) hoặc dependencies thay đổi
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
		};
	}, []); // Mảng dependencies rỗng, chỉ chạy một lần sau khi mount

	// **********************************************
	// ********** useEffect: Xử lý Đóng Menu **********
	// **********************************************
	useEffect(() => {
		// Hàm xử lý sự kiện click chuột bên ngoài menu
		function handleClickOutside(e) {
			// Nếu menu đang mở VÀ click không nằm trong menuRef, thì đóng menu
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setMenuOpen(false);
			}
		}
		// Hàm xử lý sự kiện nhấn phím (ví dụ: Esc để đóng menu)
		function handleKey(e) {
			if (e.key === 'Escape') setMenuOpen(false);
		}

		// Nếu menu đang mở, thêm các sự kiện lắng nghe
		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleKey);
		}

		// Hàm dọn dẹp: Loại bỏ các sự kiện lắng nghe khi menu đóng hoặc component unmounts
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKey);
		};
	}, [menuOpen]); // Chạy lại mỗi khi trạng thái 'menuOpen' thay đổi

	// Tính toán chuỗi class CSS cho hiệu ứng ẩn/hiện (sử dụng Tailwind CSS)
	const translateClass = visible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0';

	// **********************************************
	// ********** Render Footer **********
	// **********************************************
	return (
		// Footer chính: cố định ở dưới, căn giữa, áp dụng hiệu ứng chuyển đổi
		<footer className={`fixed bottom-4 inset-x-0 flex justify-center transition-transform duration-300 ease-in-out ${translateClass}`} style={{ zIndex: 9999 }}>
			{/* Container chứa các nút điều hướng */}
			<div className="relative bg-gray-900/95 text-white backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center gap-4 ring-1 ring-white/5">
				{/* Logic hiển thị nút 'Chương trước' */}
				{prev ? (
					// Nếu có chương trước, hiển thị Link
					<Link to={prev} className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700 transition-colors">
						&larr; Prev
					</Link>
				) : (
					// Nếu không có, hiển thị Button bị vô hiệu hóa
					<button className="px-4 py-2 bg-gray-800 rounded-full text-gray-500" disabled>
						&larr; Prev
					</button>
				)}

				{/* Khối chứa Menu danh sách chương */}
				<div className="relative" ref={menuRef}>
					{/* Nút mở/đóng Menu */}
					<button
						onClick={() => setMenuOpen(s => !s)}
						className="text-sm text-white/90 px-3 py-1 rounded-full hover:bg-gray-800/70 focus:outline-none transition-colors"
						aria-expanded={menuOpen}
						aria-haspopup="menu"
					>
						{/* Hiển thị tên chương hiện tại hoặc 'Trang chủ' */}
						{idx >= 0 ? `Chương ${idx + 1} ▾` : 'Trang chủ ▾'}
					</button>

					{/* Nội dung Menu (Chỉ hiển thị khi menuOpen là true) */}
					{menuOpen && (
						// Dropdown Menu: vị trí trên cùng, căn giữa theo chiều ngang
						<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-52 bg-gray-800 text-white rounded-lg shadow-lg ring-1 ring-white/10 p-2">
							{/* Lặp qua mảng routes để tạo các Link */}
							{routes.map((r, i) => (
								<Link
									key={r}
									to={r}
									onClick={() => setMenuOpen(false)} // Đóng menu khi click vào một chương
									className={`block px-3 py-2 rounded transition-colors hover:bg-gray-700/60 ${i === idx ? 'font-semibold text-indigo-300' : 'text-gray-200'}`} // Đánh dấu chương hiện tại
								>
									Chương {i + 1}
								</Link>
							))}
						</div>
					)}
				</div>

				{/* Logic hiển thị nút 'Chương tiếp theo' */}
				{next ? (
					// Nếu có chương tiếp theo, hiển thị Link
					<Link to={next} className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors">
						Next &rarr;
					</Link>
				) : (
					// Nếu không có, hiển thị Button bị vô hiệu hóa
					<button className="px-4 py-2 bg-gray-800 rounded-full text-gray-500" disabled>
						Next &rarr;
					</button>
				)}
			</div>
		</footer>
	);
};

// Export component Footer để có thể sử dụng ở nơi khác
export default Footer;