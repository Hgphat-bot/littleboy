// Chap6.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 6
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter6/00.jpg',
	'/images/xichquy/Chapter6/01.jpg',
	'/images/xichquy/Chapter6/02.jpg',
	'/images/xichquy/Chapter6/03.jpg',
	'/images/xichquy/Chapter6/04.jpg',
	'/images/xichquy/Chapter6/05.jpg',
	'/images/xichquy/Chapter6/06.jpg',
	'/images/xichquy/Chapter6/07.jpg',
	'/images/xichquy/Chapter6/08.jpg',
	'/images/xichquy/Chapter6/09.jpg',
	'/images/xichquy/Chapter6/010.jpg',
	'/images/xichquy/Chapter6/011.jpg',
	'/images/xichquy/Chapter6/012.jpg',
	'/images/xichquy/Chapter6/013.jpg',
	'/images/xichquy/Chapter6/014.jpg',
	'/images/xichquy/Chapter6/015.jpg',
	'/images/xichquy/Chapter6/016.jpg',
	'/images/xichquy/Chapter6/017.jpg',
	'/images/xichquy/Chapter6/018.jpg',
	'/images/xichquy/Chapter6/019.jpg',
	'/images/xichquy/Chapter6/020.jpg',
	'/images/xichquy/Chapter6/021.jpg',
	'/images/xichquy/Chapter6/022.jpg',
	'/images/xichquy/Chapter6/023.jpg',
	'/images/xichquy/Chapter6/024.jpg',
	'/images/xichquy/Chapter6/025.jpg',
	'/images/xichquy/Chapter6/026.jpg',
	'/images/xichquy/Chapter6/027.jpg',
	'/images/xichquy/Chapter6/028.jpg',
	'/images/xichquy/Chapter6/029.jpg',
	'/images/xichquy/Chapter6/030.jpg',
	'/images/xichquy/Chapter6/031.jpg',
	'/images/xichquy/Chapter6/032.jpg',
	'/images/xichquy/Chapter6/033.jpg',
	'/images/xichquy/Chapter6/034.jpg',
	'/images/xichquy/Chapter6/035.jpg',
	'/images/xichquy/Chapter6/036.jpg',
	'/images/xichquy/Chapter6/037.jpg',
	'/images/xichquy/Chapter6/038.jpg',
	'/images/xichquy/Chapter6/039.jpg',
	'/images/xichquy/Chapter6/040.jpg',
];

// Định nghĩa component Chương 6
const Chap6 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding, và loại bỏ khoảng cách âm giữa các ảnh (-space-y-0)
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap6 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap6)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap6;