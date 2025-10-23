import { Link } from "react-router-dom";

const BIA_TRUYEN_PATH = '/images/xichquy/cover.jpg'; 

const HomePage = () => {
    return (
        <div className="text-white min-h-screen pt-[80px]"> 
            <div className="w-full px-4 py-8">
                
                <div className="flex flex-wrap justify-start gap-3 mb-8">
                    <div className="px-4 py-1.5 rounded-full bg-red-600 font-bold cursor-pointer">Truyện Mới</div>
                    <div className="px-4 py-1.5 rounded-full bg-gray-800/50 hover:bg-red-600 cursor-pointer text-gray-300">Imouto</div>
                </div>

                <div className="grid grid-cols-12"> 
                    
                    <div className="col-span-full lg:col-span-8 bg-black pr-10 min-h-[calc(100vh-80px)]"> 
                        <h2 className="text-xl font-bold mb-4">Mới Cập Nhật</h2>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            <div className="relative rounded-lg overflow-hidden group">
                                <Link to="/StoryDetails">
                                    {/* Sửa src thành đường dẫn tuyệt đối đã định nghĩa ở trên */}
                                    <img 
                                        src={BIA_TRUYEN_PATH} 
                                        alt="Bìa truyện Xích Quỷ" 
                                        className="w-50 h-70 object-cover transition duration-300 group-hover:scale-105 cursor-pointer" 
                                    />
                                </Link>
                                <div className="absolute bottom-0 left-0 p-3 w-full bg-black/70 text-sm font-semibold">
                                    Xích Quỷ: Cái Thế Thần Long
                                    <div className="text-xs text-gray-400">Đã hoàn thành</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block col-span-full lg:col-span-4 space-y-8 bg-[#0A1128] pl-10 min-h-[calc(100vh-80px)]">
                        
                        <div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
                            <div className="flex justify-between border-b border-gray-700 pb-3 mb-4">
                                <h3 className="text-base font-bold text-red-500">Top Truyện Tuần</h3>
                                <h3 className="text-base font-bold text-gray-400">Top Tháng</h3>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center text-sm">
                                    <span className="w-4 font-bold text-red-500 mr-2">1</span>
                                    <div>
                                        <p>Xích Quỷ: Cái Thế Thần Long</p>
                                        <p className="text-xs text-gray-500">Lượt xem: 1000001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-5 shadow-2xl">
                            <div className="flex justify-between border-b border-gray-700 pb-3 mb-4">
                                <h3 className="text-lg font-bold mb-4">TRUYỆN ĐỀ CỬ</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-sm">
                                    <span className="w-4 font-bold text-red-500 mr-2">1</span>
                                    <div>
                                        <p><Link to="/StoryDetails">Xích Quỷ: Cái Thế Thần Long</Link></p>
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

export default HomePage;
