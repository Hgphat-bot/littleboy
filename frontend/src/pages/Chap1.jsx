// Chap1.jsx

// Import component LazyImage để tải ảnh chậm
import LazyImage from '../components/LazyImage';

// Định nghĩa mảng chứa các đường dẫn đến tất cả các ảnh của Chương 1
const images = [
	// Dùng Tab để thụt lề
	'/images/xichquy/Chapter1/00.jpg',
	'/images/xichquy/Chapter1/01.jpg',
	'/images/xichquy/Chapter1/02.jpg',
	'/images/xichquy/Chapter1/03.jpg',
	'/images/xichquy/Chapter1/04.jpg',
	'/images/xichquy/Chapter1/05.jpg',
	'/images/xichquy/Chapter1/06.jpg',
	'/images/xichquy/Chapter1/07.jpg',
	'/images/xichquy/Chapter1/08.jpg',
	'/images/xichquy/Chapter1/09.jpg',
	'/images/xichquy/Chapter1/010.jpg',
	'/images/xichquy/Chapter1/011.jpg',
	'/images/xichquy/Chapter1/012.jpg',
	'/images/xichquy/Chapter1/013.jpg',
	'/images/xichquy/Chapter1/014.jpg',
	'/images/xichquy/Chapter1/015.jpg',
	'/images/xichquy/Chapter1/016.jpg',
	'/images/xichquy/Chapter1/017.jpg',
	'/images/xichquy/Chapter1/018.jpg',
	'/images/xichquy/Chapter1/019.jpg',
	'/images/xichquy/Chapter1/020.jpg',
	'/images/xichquy/Chapter1/021.jpg',
	'/images/xichquy/Chapter1/022.jpg',
	'/images/xichquy/Chapter1/023.jpg',
	'/images/xichquy/Chapter1/024.jpg',
	'/images/xichquy/Chapter1/025.jpg',
	'/images/xichquy/Chapter1/026.jpg',
	'/images/xichquy/Chapter1/027.jpg',
	'/images/xichquy/Chapter1/028.jpg',
	'/images/xichquy/Chapter1/029.jpg',
];

// Định nghĩa component Chương 1
const Chap1 = () => {
	return (
		// Container chính: căn giữa theo cột, có padding xung quanh, và loại bỏ khoảng cách âm giữa các ảnh (-space-y-0)
		<div className="flex flex-col items-center p-4 -space-y-0">
			{/* Lặp qua mảng images để render từng ảnh */}
			{images.map((src, idx) => (
				<LazyImage
					// Dùng Tab để thụt lề
					key={idx} // key duy nhất cho mỗi phần tử trong list
					src={src} // Đường dẫn ảnh
					alt={`Chap1 ${idx}`} // Văn bản thay thế
					// Styling: Chiếm toàn bộ chiều rộng (w-full), giới hạn chiều rộng tối đa trên màn hình lớn (lg:max-w-[45%]), chiều cao tự động, có bóng đổ
					className="w-full lg:max-w-[45%] h-auto object-cover shadow"
				/>
			))}
		</div>
	);
};

// Export component
export default Chap1;