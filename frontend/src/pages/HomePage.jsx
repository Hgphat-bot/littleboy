// HomePage.jsx

// Import Link từ react-router-dom để điều hướng
import { Link } from "react-router-dom";
// Import component WinterTheme để áp dụng hiệu ứng tuyết rơi
import WinterTheme from "../components/WinterTheme";

// Định nghĩa hằng số cho đường dẫn bìa truyện
const BIA_TRUYEN_PATH = '/images/xichquy/cover.jpg'; 

// Định nghĩa component HomePage
const HomePage = () => {
	return (
		// Container chính: Chiều cao tối thiểu màn hình, có padding trên để tránh Header cố định, relative cho WinterTheme
		<div className="text-white min-h-screen pt-[80px] relative"> 
			
			{/* Component hiệu ứng tuyết rơi (WinterTheme) */}
			<WinterTheme />
			
			{/* Nội dung trang chủ */}
			<div className="w-full px-4 py-8">
				
				{/* --- KHU VỰC TAGS/FILTERS --- */}
				<div className="flex flex-wrap justify-start gap-3 mb-8">
					{/* Tag đang hoạt động/nổi bật */}
					<div className="px-4 py-1.5 rounded-full bg-red-600 font-bold cursor-pointer">Truyện Mới</div>
					{/* Tag phụ */}
					<div className="px-4 py-1.5 rounded-full bg-gray-800/50 hover:bg-red-600 cursor-pointer text-gray-300">Imouto</div>
				</div>

				{/* --- KHU VỰC BỐ CỤC CHÍNH (GRID) --- */}
				<div className="grid grid-cols-12"> 
					
					{/* Cột chính (Nội dung mới): Chiếm hết 12 cột trên mobile, 8 cột trên màn hình lớn */}
					<div className="col-span-full lg:col-span-8 bg-black pr-10 min-h-[calc(100vh-80px)]"> 
						<h2 className="text-xl font-bold mb-4">Mới Cập Nhật</h2>
						
						{/* Grid hiển thị danh sách truyện: 2 cột trên mobile, 3 cột trên md và lg */}
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
							
							{/* Thẻ Truyện Mẫu */}
							<div className="relative rounded-lg overflow-hidden group">
								<Link to="/StoryDetails">
									{/* Hình ảnh bìa truyện */}
									<img
										src={BIA_TRUYEN_PATH} 
										alt="Bìa truyện Xích Quỷ" 
										// Hiệu ứng hover phóng to (scale-105)
										className="w-50 h-70 object-cover transition duration-300 group-hover:scale-105 cursor-pointer" 
									/>
								</Link>
								{/* Overlay thông tin truyện */}
								<div className="absolute bottom-0 left-0 p-3 w-full bg-black/70 text-sm font-semibold">
									Xích Quỷ: Cái Thế Thần Long
									<div className="text-xs text-gray-400">Đã hoàn thành</div>
								</div>
							</div>
							{/* ... (Các thẻ truyện khác sẽ được thêm vào đây) ... */}
						</div>
					</div>

					{/* Cột bên phải (Sidebar): Ẩn trên mobile, hiển thị 4 cột trên màn hình lớn */}
					<div className="hidden lg:block col-span-full lg:col-span-4 space-y-8 bg-[#0A1128] pl-10 min-h-[calc(100vh-80px)]">
						
						{/* KHỐI 1: Top Truyện Tuần/Tháng */}
						<div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
							<div className="flex justify-between border-b border-gray-700 pb-3 mb-4">
								<h3 className="text-base font-bold text-red-500">Top Truyện Tuần</h3>
								<h3 className="text-base font-bold text-gray-400">Top Tháng</h3>
							</div>
							
							{/* Mục Top 1 Mẫu */}
							<div className="space-y-3">
								<div className="flex items-center text-sm">
									<span className="w-4 font-bold text-red-500 mr-2">1</span>
									<div>
										<p>Xích Quỷ: Cái Thế Thần Long</p>
										<p className="text-xs text-gray-500">Lượt xem: 1000001</p>
									</div>
								</div>
							</div>
							{/* ... (Các mục top khác) ... */}
						</div>

						{/* KHỐI 2: Truyện Đề Cử */}
						<div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
							<div className="flex justify-between border-b border-gray-700 pb-3 mb-4">
								<h3 className="text-lg font-bold mb-4">TRUYỆN ĐỀ CỬ</h3>
							</div>
							<div className="space-y-3">
								{/* Mục Đề Cử Mẫu */}
								<div className="flex items-center text-sm">
									<span className="w-4 font-bold text-red-500 mr-2">1</span>
									<div>
										<p><Link to="/StoryDetails" className="hover:text-red-400">Xích Quỷ: Cái Thế Thần Long</Link></p>
									</div>
								</div>
							</div>
							{/* ... (Các mục đề cử khác) ... */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export component
export default HomePage;