// Chap4.jsx

// Import component LazyImage để tải ảnh chậm và tối ưu hiệu suất
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 4
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter4/00.jpg',
	'/images/xichquy/Chapter4/01.jpg',
	'/images/xichquy/Chapter4/02.jpg',
	'/images/xichquy/Chapter4/03.jpg',
	'/images/xichquy/Chapter4/04.jpg',
	'/images/xichquy/Chapter4/05.jpg',
	'/images/xichquy/Chapter4/06.jpg',
	'/images/xichquy/Chapter4/07.jpg',
	'/images/xichquy/Chapter4/08.jpg',
	'/images/xichquy/Chapter4/09.jpg',
	'/images/xichquy/Chapter4/010.jpg',
	'/images/xichquy/Chapter4/011.jpg',
	'/images/xichquy/Chapter4/012.jpg',
	'/images/xichquy/Chapter4/013.jpg',
	'/images/xichquy/Chapter4/014.jpg',
	'/images/xichquy/Chapter4/015.jpg',
	'/images/xichquy/Chapter4/016.jpg',
	'/images/xichquy/Chapter4/017.jpg',
	'/images/xichquy/Chapter4/018.jpg',
	'/images/xichquy/Chapter4/019.jpg',
	'/images/xichquy/Chapter4/020.jpg',
	'/images/xichquy/Chapter4/021.jpg',
	'/images/xichquy/Chapter4/022.jpg',
];

// Định nghĩa component Chương 4
const Chap4 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding xung quanh, và loại bỏ khoảng cách âm giữa các ảnh để tạo dòng chảy liền mạch
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap4 ${idx}`} // Văn bản thay thế (đã cập nhật thành Chap4)
					// Styling: Chiếm toàn bộ chiều rộng, giới hạn chiều rộng tối đa trên màn hình lớn, chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap4;