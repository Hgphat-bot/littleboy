
// Mảng đường dẫn ảnh Chap3
const images = [
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
];

const Chap7 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap6 ${idx}`} className="w-full lg:max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap7;
