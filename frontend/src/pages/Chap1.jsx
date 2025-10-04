
const images = [
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

const Chap1 = () => {
	return (
		<div className="flex flex-col items-center p-4 -space-y-0">
			{images.map((src, idx) => (
			<img key={idx} src={src} alt={`Chap1 ${idx}`} className="w-full lg:max-w-[45%] h-auto object-cover shadow" />
			))}
		</div>
	);
};

export default Chap1;
