import LazyImage from '../components/LazyImage';

const images = [
	'/images/xichquy/Chapter2/00.jpg',
    '/images/xichquy/Chapter2/01.jpg',
    '/images/xichquy/Chapter2/02.jpg',
    '/images/xichquy/Chapter2/03.jpg',
    '/images/xichquy/Chapter2/04.jpg',
    '/images/xichquy/Chapter2/05.jpg',
    '/images/xichquy/Chapter2/06.jpg',
    '/images/xichquy/Chapter2/07.jpg',
    '/images/xichquy/Chapter2/08.jpg',
    '/images/xichquy/Chapter2/09.jpg',
    '/images/xichquy/Chapter2/010.jpg',
    '/images/xichquy/Chapter2/011.jpg',
    '/images/xichquy/Chapter2/012.jpg',
    '/images/xichquy/Chapter2/013.jpg',
    '/images/xichquy/Chapter2/014.jpg',
    '/images/xichquy/Chapter2/015.jpg',
    '/images/xichquy/Chapter2/016.jpg',
    '/images/xichquy/Chapter2/017.jpg',
    '/images/xichquy/Chapter2/018.jpg',
    '/images/xichquy/Chapter2/019.jpg',
    '/images/xichquy/Chapter2/020.jpg',
    '/images/xichquy/Chapter2/021.jpg',
    '/images/xichquy/Chapter2/022.jpg',
    '/images/xichquy/Chapter2/023.jpg',
    '/images/xichquy/Chapter2/024.jpg',
    '/images/xichquy/Chapter2/025.jpg',
    '/images/xichquy/Chapter2/026.jpg',
    '/images/xichquy/Chapter2/027.jpg',
    '/images/xichquy/Chapter2/028.jpg',
    '/images/xichquy/Chapter2/029.jpg',
];

const Chap2 = () => {
	return (
            <div className="flex flex-col items-center p-4 -space-y-0">
                {images.map((src, idx) => (
                    <LazyImage
                        key={idx}
                        src={src}
                        alt={`Chap2 ${idx}`}
                        className="w-full lg:max-w-[45%] h-auto object-cover shadow"
                    />
                ))}                   
            </div>
	);
};

export default Chap2;
