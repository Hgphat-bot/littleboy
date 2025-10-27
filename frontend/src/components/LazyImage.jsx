// LazyImage.jsx

// Import hook useState từ React
import { useState } from 'react';

// Định nghĩa component LazyImage, nhận src, alt và className làm props
const LazyImage = ({ src, alt, className = '' }) => {
	// State để kiểm soát trạng thái đang tải (mặc định là true)
	const [isLoading, setIsLoading] = useState(true);
	// State để kiểm soát trạng thái lỗi tải ảnh (mặc định là false)
	const [isError, setIsError] = useState(false);

	// Hàm xử lý khi ảnh đã tải xong thành công
	const handleLoad = () => {
		// Dùng Tab để thụt lề
		setIsLoading(false); // Đặt trạng thái đang tải thành false
	};

	// Hàm xử lý khi ảnh tải bị lỗi
	const handleError = () => {
		// Dùng Tab để thụt lề
		setIsLoading(false); // Dừng trạng thái đang tải
		setIsError(true);	// Đặt trạng thái lỗi thành true
	};

	// Trả về JSX
	return (
		// Container bọc ngoài: relative để định vị tuyệt đối các overlay,
		// flex để căn giữa loader, áp dụng className tùy chỉnh
		<div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
			
			{/* 1. Icon Loader (Hiển thị khi đang tải) */}
			{isLoading && (
				// Overlay che phủ khi ảnh đang tải
				<div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
					{/* Tailwind Spinner: tạo hiệu ứng quay bằng CSS */}
					<div className="w-10 h-10 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
					{/* Dành cho trình đọc màn hình */}
					<span className="sr-only">Đang tải...</span>
				</div>
			)}

			{/* 2. Thông báo Lỗi (Chỉ hiển thị khi có lỗi VÀ đã tải xong/dừng tải) */}
			{isError && !isLoading && (
				// Overlay thông báo lỗi
				<div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-700 p-2 text-sm">
					⚠️ Lỗi tải ảnh
				</div>
			)}

			{/* 3. Thẻ Hình ảnh thực tế */}
			<img
				src={src} // Đường dẫn ảnh
				alt={alt} // Văn bản thay thế
				// Ẩn thẻ img bằng style nếu đang tải hoặc bị lỗi, ngược lại hiển thị (block)
				style={{ display: isLoading || isError ? 'none' : 'block' }}
				onLoad={handleLoad}   // Xử lý khi ảnh tải xong
				onError={handleError} // Xử lý khi ảnh bị lỗi
				// Đảm bảo ảnh chiếm hết không gian container và cắt/phủ (object-cover)
				className="w-full h-full object-cover" 
			/>
		</div>
	);
};

// Export component
export default LazyImage;