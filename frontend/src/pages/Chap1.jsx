
import { Link } from 'react-router-dom';
// Mảng đường dẫn ảnh Chap1
const images = [
	'/src/assets/xichquy/Chapter1/00.jpg',
	'/src/assets/xichquy/Chapter1/01.jpg',
	'/src/assets/xichquy/Chapter1/02.jpg',
	'/src/assets/xichquy/Chapter1/03.jpg',
	'/src/assets/xichquy/Chapter1/04.jpg',
	'/src/assets/xichquy/Chapter1/05.jpg',
	'/src/assets/xichquy/Chapter1/06.jpg',
	'/src/assets/xichquy/Chapter1/07.jpg',
	'/src/assets/xichquy/Chapter1/08.jpg',
	'/src/assets/xichquy/Chapter1/09.jpg',
	'/src/assets/xichquy/Chapter1/010.jpg',
	'/src/assets/xichquy/Chapter1/011.jpg',
	'/src/assets/xichquy/Chapter1/012.jpg',
	'/src/assets/xichquy/Chapter1/013.jpg',
	'/src/assets/xichquy/Chapter1/014.jpg',
	'/src/assets/xichquy/Chapter1/015.jpg',
	'/src/assets/xichquy/Chapter1/016.jpg',
	'/src/assets/xichquy/Chapter1/017.jpg',
	'/src/assets/xichquy/Chapter1/018.jpg',
	'/src/assets/xichquy/Chapter1/019.jpg',
	'/src/assets/xichquy/Chapter1/020.jpg',
	'/src/assets/xichquy/Chapter1/021.jpg',
	'/src/assets/xichquy/Chapter1/022.jpg',
	'/src/assets/xichquy/Chapter1/023.jpg',
	'/src/assets/xichquy/Chapter1/024.jpg',
	'/src/assets/xichquy/Chapter1/025.jpg',
	'/src/assets/xichquy/Chapter1/026.jpg',
	'/src/assets/xichquy/Chapter1/027.jpg',
	'/src/assets/xichquy/Chapter1/028.jpg',
	'/src/assets/xichquy/Chapter1/029.jpg',
];

const Chap1 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap1 ${idx}`} className="w-full max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap1;
