// WinterTheme.jsx

// Định nghĩa đường dẫn hằng số cho hình ảnh người tuyết
const SNOWMAN_PATH = '/images/snowman.png'; 

// Component con để tạo từng lớp tuyết (Layer)
// Nhận các props để kiểm soát kích thước, tốc độ, độ mờ và độ sâu (z-index)
const SnowLayer = ({ sizeClass, animationClass, opacity, zIndex }) => {
	return (
		<div 
			// Dùng Tab để thụt lề
			// Các lớp cố định: fixed (cố định), inset-0 (phủ toàn màn hình), pointer-events-none (không chặn click), overflow-hidden, bg-repeat (lặp lại background)
			// bg-snow-dot: Lớp CSS định nghĩa hình ảnh bông tuyết (dot image)
			// Các lớp động: sizeClass (kích thước tuyết), animationClass (tốc độ rơi), opacity (độ mờ), zIndex (lớp chồng)
			className={`fixed inset-0 pointer-events-none overflow-hidden bg-repeat bg-snow-dot ${sizeClass} ${animationClass} ${opacity} ${zIndex}`}
		/>
	);
}

// Component chính: WinterTheme
const WinterTheme = () => {
	return (
		// Container chính: Cố định, phủ toàn màn hình, không chặn click, z-index cao hơn nội dung
		<div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
			
			{/* --- Lớp Tuyết 1: Nhỏ và chậm --- */}
			<SnowLayer 
				sizeClass="bg-snow-small" 	      // Kích thước nhỏ
				animationClass="animate-snow-fall-slow" // Tốc độ rơi chậm
				opacity="opacity-90" 
				zIndex="z-10" 
			/>

			{/* --- Lớp Tuyết 2: Trung bình và vừa --- */}
			<SnowLayer 
				sizeClass="bg-snow-medium" 	      // Kích thước trung bình
				animationClass="animate-snow-fall-medium" // Tốc độ rơi vừa
				opacity="opacity-80" 
				zIndex="z-20" 
			/>

			{/* --- Lớp Tuyết 3: Lớn và nhanh --- */}
			<SnowLayer 
				sizeClass="bg-snow-large" 	      // Kích thước lớn
				animationClass="animate-snow-fall-fast" // Tốc độ rơi nhanh
				opacity="opacity-70" 
				zIndex="z-30" 
			/>

			{/* --- Hình ảnh Người Tuyết --- */}
			<img 
				src={SNOWMAN_PATH} 
				alt="Người tuyết trang trí" 
				// Đặt ở góc dưới bên phải, kích thước nhỏ, z-index cao, có hiệu ứng hover phóng to
				className="absolute bottom-0 right-4 w-20 h-auto object-contain z-[60] transform hover:scale-110 transition duration-300"
				style={{
					// Đảm bảo vị trí cố định, không bị cuộn theo nội dung
					position: 'fixed', 
				}}
			/>
		</div>
	);
};

// Export component
export default WinterTheme;