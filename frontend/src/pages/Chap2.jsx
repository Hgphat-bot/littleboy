
// Mảng đường dẫn ảnh Chap2
const images = [
	'/src/assets/xichquy/Chapter2/00.jpg',
	'/src/assets/xichquy/Chapter2/01.jpg',
	'/src/assets/xichquy/Chapter2/02.jpg',
	'/src/assets/xichquy/Chapter2/03.jpg',
	'/src/assets/xichquy/Chapter2/04.jpg',
	'/src/assets/xichquy/Chapter2/05.jpg',
	'/src/assets/xichquy/Chapter2/05.jpg',
	'/src/assets/xichquy/Chapter2/07.jpg',
	'/src/assets/xichquy/Chapter2/08.jpg',
	'/src/assets/xichquy/Chapter2/09.jpg',
	'/src/assets/xichquy/Chapter2/010.jpg',
	'/src/assets/xichquy/Chapter2/011.jpg',
	'/src/assets/xichquy/Chapter2/012.jpg',
	'/src/assets/xichquy/Chapter2/013.jpg',
	'/src/assets/xichquy/Chapter2/014.jpg',
	'/src/assets/xichquy/Chapter2/015.jpg',
	'/src/assets/xichquy/Chapter2/016.jpg',
	'/src/assets/xichquy/Chapter2/017.jpg',
	'/src/assets/xichquy/Chapter2/018.jpg',
	'/src/assets/xichquy/Chapter2/019.jpg',
	'/src/assets/xichquy/Chapter2/020.jpg',
	'/src/assets/xichquy/Chapter2/021.jpg',
	'/src/assets/xichquy/Chapter2/022.jpg',
	'/src/assets/xichquy/Chapter2/023.jpg',
	'/src/assets/xichquy/Chapter2/024.jpg',
	'/src/assets/xichquy/Chapter2/025.jpg',
	'/src/assets/xichquy/Chapter2/026.jpg',
	'/src/assets/xichquy/Chapter2/027.jpg',
	'/src/assets/xichquy/Chapter2/028.jpg',
	'/src/assets/xichquy/Chapter2/029.jpg',
];

const Chap2 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap2 ${idx}`} className="w-full max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap2;
