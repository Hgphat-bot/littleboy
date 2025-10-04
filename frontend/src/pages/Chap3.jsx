
// Mảng đường dẫn ảnh Chap3
const images = [
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
