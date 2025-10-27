// ScrollToTop.jsx

// Import hook useEffect từ React
import { useEffect } from 'react';
// Import hook useLocation từ react-router-dom để theo dõi thay đổi URL
import { useLocation } from 'react-router-dom';

// Định nghĩa component ScrollToTop
const ScrollToTop = () => {
	// Sử dụng hook useLocation để lấy đối tượng location
	const location = useLocation();
	// Destructuring để lấy thuộc tính pathname (đường dẫn hiện tại) từ location
	const { pathname } = location;

	// Hook useEffect sẽ chạy sau mỗi lần component được render
	useEffect(() => {
		// Dùng Tab để thụt lề
		// Cuộn cửa sổ trình duyệt về vị trí (0, 0) - tức là lên đầu trang
		window.scrollTo(0, 0);
	}, [pathname]); // Mảng dependency: Hook sẽ chạy lại mỗi khi 'pathname' thay đổi

	// Component này không hiển thị gì trên giao diện, chỉ có tác dụng phụ (side effect)
	return null;
};

// Export component
export default ScrollToTop;