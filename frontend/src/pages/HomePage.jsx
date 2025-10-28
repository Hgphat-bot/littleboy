import { Link } from "react-router-dom";
import Snowfall from "../components/Snowfall";
import Snowman from "../components/Snowman";

// Định nghĩa đường dẫn (path) tuyệt đối đến ảnh bìa truyện
const BIA_TRUYEN_PATH = '/images/xichquy/cover.jpg';

// Định nghĩa component HomePage
const HomePage = () => {
	return (
		// Container chính của trang: màu chữ trắng, chiều cao tối thiểu bằng màn hình, padding top để tránh Header cố định
		<div className="text-white min-h-screen pt-[80px]"> 
			{/* Hiệu ứng tuyết rơi */}
			<Snowfall />
			{/* Người tuyết ở góc dưới bên phải */}
			<Snowman />
			<div className="w-full px-4 py-8">
				
				{/* Phần Bộ lọc/Phân loại (Tags) */}
				<div className="flex flex-wrap justify-start gap-3 mb-8">
					{/* Tag đang được chọn/nổi bật */}
					<div className="px-4 py-1.5 rounded-full bg-red-600 font-bold cursor-pointer">Truyện Mới</div>
					{/* Tag khác */}
					<div className="px-4 py-1.5 rounded-full bg-gray-800/50 hover:bg-red-600 cursor-pointer text-gray-300">Imouto</div>
				</div>

				{/* Bố cục Lưới 12 Cột (Grid Layout) */}
				<div className="grid grid-cols-12"> 
					
					{/* Cột Nội dung Chính: chiếm toàn bộ chiều rộng trên mobile, chiếm 8/12 (lg:col-span-8) trên màn hình lớn */}
					<div className="col-span-full lg:col-span-8 bg-black pr-10 min-h-[calc(100vh-80px)]"> 
						<h2 className="text-xl font-bold mb-4">Mới Cập Nhật</h2>
						
						{/* Lưới hiển thị các thẻ truyện: 2 cột trên mobile, 3 cột trên md và lg */}
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
							{/* Khối Thẻ Truyện (Story Card) */}
							<div className="relative rounded-lg overflow-hidden group">
								{/* Link điều hướng đến trang chi tiết truyện */}
								<Link to="/StoryDetails">
									{/* Hình ảnh bìa truyện */}
									<img 
										src={BIA_TRUYEN_PATH} 
										alt="Bìa truyện Xích Quỷ" 
										// Các class Tailwind để điều khiển kích thước, căn chỉnh và hiệu ứng hover
										className="w-50 h-70 object-cover transition duration-300 group-hover:scale-105 cursor-pointer" 
									/>
								</Link>
								{/* Overlay chứa tiêu đề và chương mới nhất */}
								<div className="absolute bottom-0 left-0 p-3 w-full bg-black/70 text-sm font-semibold">
									Xích Quỷ: Cái Thế Thần Long
									<div className="text-xs text-gray-400">Đã hoàn thành</div>
								</div>
							</div>
							{/* Thẻ truyện khác sẽ được lặp tại đây */}
						</div>
					</div>

					{/* Cột Sidebar: Ẩn trên mobile (hidden), hiển thị trên màn hình lớn (lg:block) và chiếm 4/12 (lg:col-span-4) */}
					<div className="hidden lg:block col-span-full lg:col-span-4 space-y-8 bg-[#0A1128] pl-10 min-h-[calc(100vh-80px)]">
						
						{/* Khối Top Truyện Tuần/Tháng */}
						<div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
							{/* Thanh Tab/Tiêu đề */}
							<div className="flex justify-between border-b border-gray-700 pb-3 mb-4">
								<h3 className="text-base font-bold text-red-500">Top Truyện Tuần</h3>
								<h3 className="text-base font-bold text-gray-400">Top Tháng</h3>
							</div>
							
							{/* Danh sách các mục Top */}
							<div className="space-y-3">
								{/* Mục Top 1 */}
								<div className="flex items-center text-sm">
									<span className="w-4 font-bold text-red-500 mr-2">1</span>
									<div>
										<p>Xích Quỷ: Cái Thế Thần Long</p>
										<p className="text-xs text-gray-500">Lượt xem: 1000001</p>
									</div>
								</div>
								{/* Các mục top khác sẽ được lặp tại đây */}
							</div>
						</div>

						<div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
                            {/* Tiêu đề và Đường gạch ngang (border-b) */}
                            <div className="border-b border-gray-700 pb-3 mb-4"> 
                                <h3 className="text-lg font-bold">TRUYỆN ĐỀ CỬ</h3>
                            </div>
                            
                            {/* Nội dung Truyện Đề Cử */}
                            <div className="space-y-3">
                                <div className="flex items-center text-sm">
                                    <span className="w-4 font-bold text-red-500 mr-2">1</span>
                                    <div>
                                        <p>
                                            <Link to="/StoryDetails" className="hover:text-red-500 transition duration-150">
                                                Xích Quỷ: Cái Thế Thần Long
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

// Export component HomePage
export default HomePage;