
// Mảng đường dẫn ảnh Chap3
const images = [
	'/images/xichquy/Chapter5/00.jpg',
    '/images/xichquy/Chapter5/01.jpg',
    '/images/xichquy/Chapter5/02.jpg',
    '/images/xichquy/Chapter5/03.jpg',
    '/images/xichquy/Chapter5/04.jpg',
    '/images/xichquy/Chapter5/05.jpg',
    '/images/xichquy/Chapter5/06.jpg',
    '/images/xichquy/Chapter5/07.jpg',
    '/images/xichquy/Chapter5/08.jpg',
    '/images/xichquy/Chapter5/09.jpg',
    '/images/xichquy/Chapter5/010.jpg',
    '/images/xichquy/Chapter5/011.jpg',
    '/images/xichquy/Chapter5/012.jpg',
    '/images/xichquy/Chapter5/013.jpg',
    '/images/xichquy/Chapter5/014.jpg',
    '/images/xichquy/Chapter5/015.jpg',
    '/images/xichquy/Chapter5/016.jpg',
    '/images/xichquy/Chapter5/017.jpg',
    '/images/xichquy/Chapter5/018.jpg',
    '/images/xichquy/Chapter5/019.jpg',
    '/images/xichquy/Chapter5/020.jpg',
    '/images/xichquy/Chapter5/021.jpg',
    '/images/xichquy/Chapter5/022.jpg',
    '/images/xichquy/Chapter5/023.jpg',
    '/images/xichquy/Chapter5/024.jpg',
    '/images/xichquy/Chapter5/025.jpg',
    '/images/xichquy/Chapter5/026.jpg',
    '/images/xichquy/Chapter5/027.jpg',
    '/images/xichquy/Chapter5/028.jpg',
    '/images/xichquy/Chapter5/029.jpg',
    '/images/xichquy/Chapter5/030.jpg',
    '/images/xichquy/Chapter5/031.jpg',
    '/images/xichquy/Chapter5/032.jpg',
    '/images/xichquy/Chapter5/033.jpg',
    '/images/xichquy/Chapter5/034.jpg',
    '/images/xichquy/Chapter5/035.jpg',
];

const Chap5 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap5 ${idx}`} className="w-full lg:max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap5;
