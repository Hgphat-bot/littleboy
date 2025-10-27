// NotFound.jsx

// Import React (mặc dù không bắt buộc với React 17+, nhưng là thói quen tốt)
import React from "react";

// Định nghĩa component NotFound
const NotFound = () => {
	return (
		// Container chính: Căn giữa nội dung theo cả chiều dọc và ngang, chiều cao tối thiểu màn hình, background sáng
		<div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
			
			{/* Hình ảnh minh họa lỗi 404 */}
			<img
				src="404_NotFound.png" // Đường dẫn ảnh (giả định nằm trong thư mục public)
				alt="Không tìm thấy trang" // Văn bản thay thế
				className="max-w-full mb-6 w-96" // Giới hạn kích thước ảnh, có margin dưới
			/>

			{/* Thông báo lỗi thân thiện */}
			<p className="text-xl font-semibold">
				Bạn đang đi vào vùng cấm địa 🚫
			</p>

			{/* Nút quay về Trang chủ */}
			<a 
				href="/" // Quay về gốc của ứng dụng
				// Styling: Nút nổi bật, bo tròn, có hiệu ứng hover (giả định bg-primary và bg-primary-dark đã được định nghĩa trong cấu hình Tailwind của bạn)
				className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark"
			>
				quay về trang chủ
			</a>
		</div>
	);
};

// Export component
export default NotFound;