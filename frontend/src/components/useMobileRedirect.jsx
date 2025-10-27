import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useMobileRedirect = () => {
	// Lấy đường dẫn hiện tại
	const location = useLocation();

	useEffect(() => {
		// Logic kiểm tra thiết bị di động (ví dụ: màn hình dưới 768px)
		const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
		if (isMobile) {
			console.log("Phát hiện thiết bị di động. Thực hiện chuyển hướng...");
			// window.location.href = '/m' + location.pathname; 
		}
	}, [location.pathname]); // Chạy lại khi đường dẫn thay đổi
};

export default useMobileRedirect;