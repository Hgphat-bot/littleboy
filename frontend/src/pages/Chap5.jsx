// Chap5.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 5
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter5/00.jpg',
	'/images/xichquy/Chapter5/01.jpg',
	'/images/xichquy/Chapter5/02.jpg',
	'/images/xichquy/Chapter5/03.jpg',
	'/images/xichquy/Chapter5/04.jpg',
	'/images/xichquy/Chapter5/05.jpg',
	'/images/xichquy/Chapter5/06.jpg',
	'/images/xichquy/Chapter5/07.jpg',
	'/images/xichquy/Chapter5/08.jpg',
	'/images/xichquy/Chapter5/09.jpg',
	'/images/xichquy/Chapter5/010.jpg',
	'/images/xichquy/Chapter5/011.jpg',
	'/images/xichquy/Chapter5/012.jpg',
	'/images/xichquy/Chapter5/013.jpg',
	'/images/xichquy/Chapter5/014.jpg',
	'/images/xichquy/Chapter5/015.jpg',
	'/images/xichquy/Chapter5/016.jpg',
	'/images/xichquy/Chapter5/017.jpg',
	'/images/xichquy/Chapter5/018.jpg',
	'/images/xichquy/Chapter5/019.jpg',
	'/images/xichquy/Chapter5/020.jpg',
	'/images/xichquy/Chapter5/021.jpg',
	'/images/xichquy/Chapter5/022.jpg',
	'/images/xichquy/Chapter5/023.jpg',
	'/images/xichquy/Chapter5/024.jpg',
	'/images/xichquy/Chapter5/025.jpg',
	'/images/xichquy/Chapter5/026.jpg',
	'/images/xichquy/Chapter5/027.jpg',
	'/images/xichquy/Chapter5/028.jpg',
	'/images/xichquy/Chapter5/029.jpg',
	'/images/xichquy/Chapter5/030.jpg',
	'/images/xichquy/Chapter5/031.jpg',
	'/images/xichquy/Chapter5/032.jpg',
	'/images/xichquy/Chapter5/033.jpg',
	'/images/xichquy/Chapter5/034.jpg',
	'/images/xichquy/Chapter5/035.jpg',
];

// Định nghĩa component Chương 5
const Chap5 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding xung quanh, và loại bỏ khoảng cách âm giữa các ảnh để tạo dòng chảy liền mạch
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap5 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap5)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap5;