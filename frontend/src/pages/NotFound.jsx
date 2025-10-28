import React from "react";

// Định nghĩa component NotFound
const NotFound = () => {
	return (
		// Container chính: Căn giữa nội dung theo cả chiều ngang và chiều dọc, chiều cao tối thiểu bằng màn hình
		<div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
			{/* Hình ảnh minh họa lỗi 404 */}
			<img
				src="404_NotFound.png"
				alt="not found"
				// Class Tailwind: đảm bảo kích thước phù hợp, có margin dưới
				className="max-w-full mb-6 w-96"
			/>

			{/* Thông báo lỗi */}
			<p className="text-xl font-semibold">
				Bạn đang đi vào vùng cấm địa 🚫
			</p>

			{/* Nút quay về trang chủ (sử dụng thẻ <a> truyền thống) */}
			<a href="/" className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark">
				quay về trang chủ
			</a>
		</div>
	);
};

// Export component NotFound
export default NotFound;