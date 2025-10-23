import { useState } from 'react';

const LazyImage = ({ src, alt, className = '' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setIsError(true);
    };

    return (
        <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
            
            {/* 1. Icon Loader */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    {/* Tailwind Spinner */}
                    <div className="w-10 h-10 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="sr-only">Đang tải...</span>
                </div>
            )}

            {/* 2. Thông báo Lỗi */}
            {isError && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-700 p-2 text-sm">
                    ⚠️ Lỗi tải ảnh
                </div>
            )}

            {/* 3. Thẻ Hình ảnh */}
            <img
                src={src}
                alt={alt}
                style={{ display: isLoading || isError ? 'none' : 'block' }}
                onLoad={handleLoad}
                onError={handleError}
                className="w-full h-full object-cover" 
            />
        </div>
    );
};

export default LazyImage;