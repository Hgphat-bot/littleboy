// Chap2.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 2
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter2/00.jpg',
	'/images/xichquy/Chapter2/01.jpg',
	'/images/xichquy/Chapter2/02.jpg',
	'/images/xichquy/Chapter2/03.jpg',
	'/images/xichquy/Chapter2/04.jpg',
	'/images/xichquy/Chapter2/05.jpg',
	'/images/xichquy/Chapter2/06.jpg',
	'/images/xichquy/Chapter2/07.jpg',
	'/images/xichquy/Chapter2/08.jpg',
	'/images/xichquy/Chapter2/09.jpg',
	'/images/xichquy/Chapter2/010.jpg',
	'/images/xichquy/Chapter2/011.jpg',
	'/images/xichquy/Chapter2/012.jpg',
	'/images/xichquy/Chapter2/013.jpg',
	'/images/xichquy/Chapter2/014.jpg',
	'/images/xichquy/Chapter2/015.jpg',
	'/images/xichquy/Chapter2/016.jpg',
	'/images/xichquy/Chapter2/017.jpg',
	'/images/xichquy/Chapter2/018.jpg',
	'/images/xichquy/Chapter2/019.jpg',
	'/images/xichquy/Chapter2/020.jpg',
	'/images/xichquy/Chapter2/021.jpg',
	'/images/xichquy/Chapter2/022.jpg',
	'/images/xichquy/Chapter2/023.jpg',
	'/images/xichquy/Chapter2/024.jpg',
	'/images/xichquy/Chapter2/025.jpg',
	'/images/xichquy/Chapter2/026.jpg',
	'/images/xichquy/Chapter2/027.jpg',
	'/images/xichquy/Chapter2/028.jpg',
	'/images/xichquy/Chapter2/029.jpg',
];

// Định nghĩa component Chương 2
const Chap2 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding xung quanh, và loại bỏ khoảng cách âm giữa các ảnh
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap2 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap2)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap2;