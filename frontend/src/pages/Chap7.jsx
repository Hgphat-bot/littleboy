// Chap7.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 7
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter7/00.jpg',
	'/images/xichquy/Chapter7/01.jpg',
	'/images/xichquy/Chapter7/02.jpg',
	'/images/xichquy/Chapter7/03.jpg',
	'/images/xichquy/Chapter7/04.jpg',
	'/images/xichquy/Chapter7/05.jpg',
	'/images/xichquy/Chapter7/06.jpg',
	'/images/xichquy/Chapter7/07.jpg',
	'/images/xichquy/Chapter7/08.jpg',
	'/images/xichquy/Chapter7/09.jpg',
	'/images/xichquy/Chapter7/010.jpg',
	'/images/xichquy/Chapter7/011.jpg',
	'/images/xichquy/Chapter7/012.jpg',
	'/images/xichquy/Chapter7/013.jpg',
	'/images/xichquy/Chapter7/014.jpg',
	'/images/xichquy/Chapter7/015.jpg',
	'/images/xichquy/Chapter7/016.jpg',
	'/images/xichquy/Chapter7/017.jpg',
	'/images/xichquy/Chapter7/018.jpg',
	'/images/xichquy/Chapter7/019.jpg',
	'/images/xichquy/Chapter7/020.jpg',
];

// Định nghĩa component Chương 7
const Chap7 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding, và loại bỏ khoảng cách âm giữa các ảnh (-space-y-0)
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap7 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap7)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap7;