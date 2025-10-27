// Chap3.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 3
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter3/00.jpg',
	'/images/xichquy/Chapter3/01.jpg',
	'/images/xichquy/Chapter3/02.jpg',
	'/images/xichquy/Chapter3/03.jpg',
	'/images/xichquy/Chapter3/04.jpg',
	'/images/xichquy/Chapter3/05.jpg',
	'/images/xichquy/Chapter3/06.jpg',
	'/images/xichquy/Chapter3/07.jpg',
	'/images/xichquy/Chapter3/08.jpg',
	'/images/xichquy/Chapter3/09.jpg',
	'/images/xichquy/Chapter3/010.jpg',
	'/images/xichquy/Chapter3/011.jpg',
	'/images/xichquy/Chapter3/012.jpg',
	'/images/xichquy/Chapter3/013.jpg',
	'/images/xichquy/Chapter3/014.jpg',
	'/images/xichquy/Chapter3/015.jpg',
	'/images/xichquy/Chapter3/016.jpg',
	'/images/xichquy/Chapter3/017.jpg',
	'/images/xichquy/Chapter3/018.jpg',
	'/images/xichquy/Chapter3/019.jpg',
	'/images/xichquy/Chapter3/020.jpg',
	'/images/xichquy/Chapter3/021.jpg',
	'/images/xichquy/Chapter3/022.jpg',
	'/images/xichquy/Chapter3/023.jpg',
	'/images/xichquy/Chapter3/024.jpg',
	'/images/xichquy/Chapter3/025.jpg',
	'/images/xichquy/Chapter3/026.jpg',
	'/images/xichquy/Chapter3/027.jpg',
	'/images/xichquy/Chapter3/028.jpg',
];

// Định nghĩa component Chương 3
const Chap3 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding xung quanh, và loại bỏ khoảng cách âm giữa các ảnh
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap3 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap3)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap3;