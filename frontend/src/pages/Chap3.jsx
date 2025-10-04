
// Mảng đường dẫn ảnh Chap3
const images = [
	'/src/assets/xichquy/Chapter3/00.jpg',
	'/src/assets/xichquy/Chapter3/01.jpg',
	'/src/assets/xichquy/Chapter3/02.jpg',
	'/src/assets/xichquy/Chapter3/03.jpg',
	'/src/assets/xichquy/Chapter3/04.jpg',
	'/src/assets/xichquy/Chapter3/05.jpg',
	'/src/assets/xichquy/Chapter3/05.jpg',
	'/src/assets/xichquy/Chapter3/07.jpg',
	'/src/assets/xichquy/Chapter3/08.jpg',
	'/src/assets/xichquy/Chapter3/09.jpg',
	'/src/assets/xichquy/Chapter3/010.jpg',
	'/src/assets/xichquy/Chapter3/011.jpg',
	'/src/assets/xichquy/Chapter3/012.jpg',
	'/src/assets/xichquy/Chapter3/013.jpg',
	'/src/assets/xichquy/Chapter3/014.jpg',
	'/src/assets/xichquy/Chapter3/015.jpg',
	'/src/assets/xichquy/Chapter3/016.jpg',
	'/src/assets/xichquy/Chapter3/017.jpg',
	'/src/assets/xichquy/Chapter3/018.jpg',
	'/src/assets/xichquy/Chapter3/019.jpg',
	'/src/assets/xichquy/Chapter3/020.jpg',
	'/src/assets/xichquy/Chapter3/021.jpg',
	'/src/assets/xichquy/Chapter3/022.jpg',
	'/src/assets/xichquy/Chapter3/023.jpg',
	'/src/assets/xichquy/Chapter3/024.jpg',
	'/src/assets/xichquy/Chapter3/025.jpg',
	'/src/assets/xichquy/Chapter3/026.jpg',
	'/src/assets/xichquy/Chapter3/027.jpg',
	'/src/assets/xichquy/Chapter3/028.jpg',
];

const Chap3 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap3 ${idx}`} className="w-full lg:max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap3;
