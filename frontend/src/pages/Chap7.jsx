import LazyImage from '../components/LazyImage';

const images = [
	'/images/xichquy/Chapter7/00.jpg',
    '/images/xichquy/Chapter7/01.jpg',
    '/images/xichquy/Chapter7/02.jpg',
    '/images/xichquy/Chapter7/03.jpg',
    '/images/xichquy/Chapter7/04.jpg',
    '/images/xichquy/Chapter7/05.jpg',
    '/images/xichquy/Chapter7/06.jpg',
    '/images/xichquy/Chapter7/07.jpg',
    '/images/xichquy/Chapter7/08.jpg',
    '/images/xichquy/Chapter7/09.jpg',
    '/images/xichquy/Chapter7/010.jpg',
    '/images/xichquy/Chapter7/011.jpg',
    '/images/xichquy/Chapter7/012.jpg',
    '/images/xichquy/Chapter7/013.jpg',
    '/images/xichquy/Chapter7/014.jpg',
    '/images/xichquy/Chapter7/015.jpg',
    '/images/xichquy/Chapter7/016.jpg',
    '/images/xichquy/Chapter7/017.jpg',
    '/images/xichquy/Chapter7/018.jpg',
    '/images/xichquy/Chapter7/019.jpg',
    '/images/xichquy/Chapter7/020.jpg',
];

const Chap7 = () => {
	return (
            <div className="flex flex-col items-center p-4 -space-y-0">
                {images.map((src, idx) => (
                    <LazyImage
                        key={idx}
                        src={src}
                        alt={`Chap7 ${idx}`}
                        className="w-full lg:max-w-[45%] h-auto object-cover shadow"
                    />
                ))}
            </div>
	);
};

export default Chap7;
