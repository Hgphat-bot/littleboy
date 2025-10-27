// App.jsx

// Import các hooks và components cần thiết từ thư viện
import { Toaster } from "sonner"; // Thư viện hiển thị thông báo
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // React Router
import useMobileRedirect from "./components/useMobileRedirect"; // Hook tùy chỉnh để chuyển hướng thiết bị di động

// Components chung
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages (Trang)
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import StoryDetails from "./pages/StoryDetails";
import ChapterReader from "./pages/ChapterReader";

// --- LOGIC HIỂN THỊ FOOTER CÓ ĐIỀU KIỆN ---

/**
 * @function FooterConditional
 * @description Component quyết định có hiển thị Footer hay không dựa trên URL hiện tại.
 * @returns {JSX.Element | null} Component Footer nếu đường dẫn bắt đầu bằng '/chap', ngược lại là null.
 */
function FooterConditional() {
	// Dùng hook useLocation để lấy thông tin đường dẫn
	const location = useLocation();
	// Chuẩn hóa đường dẫn: Loại bỏ dấu '/' cuối cùng và chuyển về chữ thường
	const path = location.pathname.replace(/\/$/, '').toLowerCase();
	
	// Nếu đường dẫn bắt đầu bằng '/chap' (ví dụ: /chap1, /chap7) thì hiển thị Footer
	if (path.startsWith('/chap')) return <Footer />;
	
	// Ngược lại, không hiển thị gì
	return null;
}

// --- COMPONENT CHÍNH ---

function App() {

  useMobileRedirect();
  
	return (
		<>

			{/* Component Toaster để hiển thị thông báo toàn cầu */}
			<Toaster />

			<BrowserRouter>
				{/* ScrollToTop phải nằm trong BrowserRouter và trên Routes để hoạt động */}
				<ScrollToTop /> 
				
				{/* Header cố định trên cùng mọi trang */}
				<Header />

				{/* Container cho nội dung chính, có padding trên để tránh Header che mất nội dung */}
				<div className="pt-[50px] sm:pt-[56px]">
					<Routes>
						{/* Trang chủ */}
						<Route path="/" element={<HomePage />} />

						{/* Trang chi tiết truyện */}
						<Route path="/StoryDetails" element={<StoryDetails />} />

						{/* --- ROUTE CHO CÁC CHƯƠNG TRUYỆN --- */}
						<Route path="/chap1" element={<Chap1 />} />
						<Route path="/chap2" element={<Chap2 />} />
						<Route path="/chap3" element={<Chap3 />} />
						<Route path="/chap4" element={<Chap4 />} />
						<Route path="/chap5" element={<Chap5 />} />
						<Route path="/chap6" element={<Chap6 />} />
						<Route path="/chap7" element={<Chap7 />} />

						{/* Route dự phòng: Bắt tất cả các URL không khớp (Trang 404) */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>

				{/* Footer chỉ hiển thị trên các trang chương truyện */}
				<FooterConditional />
			</BrowserRouter>
		</>
	)
}

export default App;