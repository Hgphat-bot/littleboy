import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Lấy đối tượng location từ React Router
    const { pathname } = useLocation();

    useEffect(() => {
        // Cuộn lên đầu trang (vị trí X=0, Y=0) mỗi khi pathname thay đổi
        window.scrollTo(0, 0);
    }, [pathname]); // Theo dõi sự thay đổi của pathname

    // Component này không hiển thị gì cả, chỉ có tác dụng phụ (side effect)
    return null;
};

export default ScrollToTop;