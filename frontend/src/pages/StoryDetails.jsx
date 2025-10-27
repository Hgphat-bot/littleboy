// StoryDetails.jsx

// Import React
import React from 'react';
// Import Link từ react-router-dom để điều hướng
import { Link } from 'react-router-dom';
// Import ảnh bìa truyện
import bia_xichquy from '/images/xichquy/cover.jpg';

// Định nghĩa component StoryDetails
const StoryDetails = () => {
	return (
		// Container chính: Màu chữ trắng, padding trên (tránh header), padding xung quanh, chiều cao tối thiểu màn hình, nền đen
		<div className="text-white pt-[80px] p-4 md:p-10 min-h-screen bg-black">
			{/* Container giới hạn chiều rộng nội dung (max-w-4xl) và căn giữa */}
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-6 text-red-500">Xích Quỷ: Cái Thế Thần Long</h1>
				
				{/* Bố cục chính: Flex ngang trên desktop (md:flex-row), dọc trên mobile (flex-col) */}
				<div className="flex flex-col md:flex-row gap-8">
					
					{/* --- Cột Trái: Ảnh bìa và nút Bắt đầu Đọc --- */}
					<div className="w-full md:w-1/3 flex flex-col items-center">
						{/* Ảnh bìa truyện */}
						<img 
							src={bia_xichquy} 
							alt="Bìa truyện Xích Quỷ" 
							className="w-full h-auto rounded-lg shadow-2xl max-w-xs md:max-w-none" 
						/>
						{/* Nút Bắt đầu Đọc */}
						<Link to="/Chap1" className="w-full mt-6">
							<button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-200">
								BẮT ĐẦU ĐỌC CHƯƠNG 1
							</button>
						</Link>
					</div>

					{/* --- Cột Phải: Tóm tắt và Danh sách Chương --- */}
					<div className="w-full md:w-2/3 space-y-4">
						{/* Tiêu đề Tóm tắt */}
						<h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Tóm tắt</h2>
						<p className="text-gray-300 leading-relaxed">
							Truyện tranh Xích Quỷ: Cái Thế Thần Long được cập nhật nhanh và đầy đủ nhất tại LittleBoy. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ LittleBoy ra các chương mới nhất của truyện Xích Quỷ: Cái Thế Thần Long.
						</p>
						
						{/* Thông tin Chi tiết */}
						<div className="pt-4 space-y-2">
							<p><strong>Tác giả:</strong> Littleboy</p>
							<p><strong>Thể loại:</strong> Tiên Hiệp, Huyền Huyễn</p>
							<p><strong>Trạng thái:</strong> Đang cập nhật</p>
							<p><strong>Đánh giá:</strong> ⭐️⭐️⭐️⭐️ (4.5/5)</p>
						</div>
						
						{/* Danh sách Chương */}
						<h2 className="text-xl font-semibold border-b border-gray-700 pt-4 pb-2">Các Chương</h2>
						<ul className="text-gray-400 space-y-1">
							{/* Dùng Link để điều hướng đến từng chương */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap1">Chương 1: Long Thần Tái Thế</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap2">Chương 2: Đại Long Trở Mình</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap3">Chương 3: Giao Long Hảo Chân Long</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap4">Chương 4: Thanh Sơn Lọc Hải</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap5">Chương 5: Cửu Vĩ Hồ</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap6">Chương 6: Tiều Phu Đốn Yêu</Link></li>
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap7">Chương 7: Lạc Long Vương</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export component
export default StoryDetails;