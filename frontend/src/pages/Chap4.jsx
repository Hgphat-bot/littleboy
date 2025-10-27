
const images = [
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

const Chap4 = () => {
	return (
            <div className="flex flex-col items-center p-4 -space-y-0">
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Chap4 ${idx}`}
                        className="w-full lg:max-w-[45%] h-auto object-cover shadow"
                    />
                ))}
            </div>
	);
};

export default Chap4;
