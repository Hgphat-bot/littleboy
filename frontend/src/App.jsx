import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// Import các components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import các trang (pages)
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import StoryDetails from "./pages/StoryDetails";
import Chap1 from "./pages/Chap1";
import Chap2 from "./pages/Chap2";
import Chap3 from "./pages/Chap3";
import Chap4 from "./pages/Chap4";
import Chap5 from "./pages/Chap5";
import Chap6 from "./pages/Chap6";
import Chap7 from "./pages/Chap7";

// **********************************************
// ********** Component FooterConditional **********
// **********************************************
// Component điều kiện hiển thị Footer (chỉ hiển thị trên các trang chương)
function FooterConditional() {
	// Lấy thông tin vị trí hiện tại
	const location = useLocation();
	// Lấy đường dẫn hiện tại, loại bỏ dấu '/' ở cuối (nếu có), và chuyển về chữ thường
	const path = location.pathname.replace(/\/$/, '').toLowerCase();
	
	// Kiểm tra nếu đường dẫn bắt đầu bằng '/chap' thì hiển thị Footer
	if (path.startsWith('/chap')) return <Footer />;
	
	// Ngược lại thì không hiển thị gì cả
	return null;
}

// **********************************************
// ********** Component App Chính **********
// **********************************************
function App() {
	return (
		<>
			{/* !!! LƯU Ý: useMobileRedirect nên được gọi như một Hook (trong function) 
			hoặc được định nghĩa là Component. Hiện tại nó đang được gọi sai cú pháp. 
			Giả sử nó là một custom hook, nó cần được gọi trong App function, không phải trong JSX. */}
			{/* <useMobileRedirect/> */} 

			{/* Component Toaster để hiển thị thông báo (từ thư viện sonner) */}
			<Toaster/>
			
			{/* BrowserRouter: Thiết lập cơ chế định tuyến cho ứng dụng */}
			<BrowserRouter>
				{/* ScrollToTop: Đảm bảo cuộn lên đầu trang khi chuyển route */}
				<ScrollToTop /> 
				{/* Header: Hiển thị trên mọi trang */}
				<Header/>

				{/* Container chính cho nội dung trang. Dùng padding top để tránh Header cố định. */}
				<div className="pt-[50px] sm-pt-[56px]">
					{/* Routes: Nơi định nghĩa các cặp đường dẫn (path) và component tương ứng (element) */}
					<Routes>

						{/* Route: Trang chủ */}
						<Route
							path="/"
							element={<HomePage />}
						/>

						{/* Route: Trang chi tiết truyện */}
						<Route
							path="/StoryDetails"
							element={<StoryDetails />}
						/>

						{/* Các Route cho từng Chương truyện (Chap1 -> Chap7) */}
						<Route path="/chap1" element={<Chap1 />} />

						<Route path="/chap2" element={<Chap2 />} />

						<Route path="/chap3" element={<Chap3 />} />

						<Route path="/chap4" element={<Chap4 />} />

						<Route path="/chap5" element={<Chap5 />} />

						<Route path="/chap6" element={<Chap6 />} />

						<Route path="/chap7" element={<Chap7 />} />

						{/* Route Catch-all (*): Nếu không khớp với bất kỳ đường dẫn nào ở trên, hiển thị trang NotFound */}
						<Route
							path="*"
							element={<NotFound />}
						/>
					
					</Routes>
				</div>

				{/* FooterConditional: Component hiển thị Footer chỉ trên các trang chương */}
				<FooterConditional />
			</BrowserRouter>

		</>
	)
}

// Export component App
export default App