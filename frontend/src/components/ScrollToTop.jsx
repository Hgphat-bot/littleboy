import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Định nghĩa component ScrollToTop
// Component này không hiển thị gì cả (render null), mà chỉ thực hiện hành động phụ (side effect)
const ScrollToTop = () => {
	// Sử dụng hook useLocation từ react-router-dom
	// để lấy thông tin về vị trí URL hiện tại
	const { pathname } = useLocation();

	// **********************************************
	// ********** useEffect: Xử lý Cuộn **********
	// **********************************************
	useEffect(() => {
		// Thực hiện hành động cuộn cửa sổ trình duyệt lên vị trí (0, 0) - góc trên cùng bên trái.
		// Hàm này đảm bảo rằng mỗi khi người dùng chuyển trang, họ sẽ bắt đầu từ đầu trang.
		window.scrollTo(0, 0);
	}, [pathname]); // Dependency Array: Hàm useEffect sẽ chạy lại mỗi khi 'pathname' (đường dẫn URL) thay đổi.

	// Component này không cần hiển thị giao diện người dùng nào, nên nó trả về null.
	return null;
};

// Export component để có thể sử dụng trong component chính (ví dụ: App.js)
export default ScrollToTop;