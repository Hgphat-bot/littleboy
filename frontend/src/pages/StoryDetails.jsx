import React from 'react';
import { Link } from 'react-router-dom';
import Snowfall from "../components/Snowfall";
import Snowman from "../components/Snowman";
// Import đường dẫn ảnh bìa truyện
import bia_xichquy from '/images/xichquy/cover.jpg';

// Định nghĩa component StoryDetails
const StoryDetails = () => {
	return (
		// Container chính: Đảm bảo chiều cao tối thiểu bằng màn hình, có padding trên để tránh Header cố định
		<div className="text-white pt-[80px] p-4 md:p-10 min-h-screen bg-black">
			{/* Hiệu ứng tuyết rơi */}
			<Snowfall />
			{/* Người tuyết ở góc dưới bên phải */}
			<Snowman />
			{/* Giới hạn chiều rộng nội dung và căn giữa */}
			<div className="max-w-4xl mx-auto">
				{/* Tiêu đề truyện */}
				<h1 className="text-3xl font-bold mb-6 text-red-500">Xích Quỷ: Cái Thế Thần Long</h1>
				
				{/* Bố cục hai cột: xếp dọc trên mobile (flex-col) và xếp ngang trên màn hình trung bình (md:flex-row) */}
				<div className="flex flex-col md:flex-row gap-8">
					
					{/* Cột Trái: Ảnh bìa và nút đọc */}
					<div className="w-full md:w-1/3 flex flex-col items-center">
						{/* Hiển thị ảnh bìa truyện */}
						<img 
							src={bia_xichquy} 
							alt="Bìa truyện Xích Quỷ" 
							// Class Tailwind: responsive image, bo tròn góc, shadow
							className="w-full h-auto rounded-lg shadow-2xl max-w-xs md:max-w-none" 
						/>
						{/* Nút BẮT ĐẦU ĐỌC: Link đến chương đầu tiên */}
						<Link to="/Chap1" className="w-full mt-6">
							<button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-200">
								BẮT ĐẦU ĐỌC CHƯƠNG 1
							</button>
						</Link>
					</div>

					{/* Cột Phải: Tóm tắt, Chi tiết và Danh sách chương */}
					<div className="w-full md:w-2/3 space-y-4">
						{/* Phần Tóm tắt */}
						<h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Tóm tắt</h2>
						<p className="text-gray-300 leading-relaxed">
							Truyện tranh Xích Quỷ: Cái Thế Thần Long được cập nhật nhanh và đầy đủ nhất tại LittleBoy. Bạn đọc đừng quên để lại bình luận và chia sẻ, ủng hộ LittleBoy ra các chương mới nhất của truyện Xích Quỷ: Cái Thế Thần Long.
						</p>
						
						{/* Phần Chi tiết/Thông tin */}
						<div className="pt-4 space-y-2">
							<p><strong>Tác giả:</strong> Littleboy</p>
							<p><strong>Thể loại:</strong> Tiên Hiệp, Huyền Huyễn</p>
							<p><strong>Trạng thái:</strong> Đang cập nhật</p>
							<p><strong>Đánh giá:</strong> ⭐️⭐️⭐️⭐️⭐️ (5/5)</p>
						</div>
						
						{/* Phần Danh sách Chương */}
						<h2 className="text-xl font-semibold border-b border-gray-700 pt-4 pb-2">Các Chương</h2>
						<ul className="text-gray-400 space-y-1">
							{/* Mục Chương 1 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap1">Chương 1: Long Thần Tái Thế</Link></li>
							{/* Mục Chương 2 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap2">Chương 2: Đại Long Trở Mình</Link></li>
							{/* Mục Chương 3 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap3">Chương 3: Giao Long Hảo Chân Long</Link></li>
							{/* Mục Chương 4 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap4">Chương 4: Thanh Sơn Lọc Hải</Link></li>
							{/* Mục Chương 5 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap5">Chương 5: Cửu Vĩ Hồ</Link></li>
							{/* Mục Chương 6 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap6">Chương 6: Tiều Phu Đốn Yêu</Link></li>
							{/* Mục Chương 7 */}
							<li className="hover:text-red-500 cursor-pointer"><Link to="/Chap7">Chương 7: Lạc Long Vương</Link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export component StoryDetails
export default StoryDetails;
