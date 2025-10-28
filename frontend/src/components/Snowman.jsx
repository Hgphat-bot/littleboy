import React from 'react';
// ✨ QUAN TRỌNG: Thay thế đường dẫn này bằng đường dẫn thực tế của bạn
import snowmanImage from '/images/snowman.png'; 

/**
 * Component Người Tuyết
 * Sử dụng hình ảnh (png/svg) và Tailwind CSS để định vị
 */
const Snowman = () => {
  return (
    // Container cố định ở góc dưới bên trái (bottom-4, left-4)
    <div className="fixed bottom-4 right-4 md:right-8 z-[1001] pointer-events-none">
      
      {/* Sử dụng thẻ img với đường dẫn đã import.
        w-24 (width 6rem/96px) là kích thước mặc định.
      */}
      <img 
        src={snowmanImage} 
        alt="Người tuyết hoạt hình"
        // Dùng Tailwind để đặt kích thước và đảm bảo hình ảnh mượt mà
        className="w-24 md:w-32 h-auto select-none"
        style={{
          // Tùy chọn: Thêm một chút chuyển động nhẹ để tạo cảm giác hoạt hình
          animation: 'float 4s ease-in-out infinite' 
        }}
      />

      {/* Thêm Keyframe CSS cho hiệu ứng "nổi" nhẹ. 
        Trong môi trường React/Tailwind, bạn thường định nghĩa keyframes trong file CSS chung (ví dụ: index.css)
        NHƯNG tôi sẽ thêm nó trực tiếp vào đây để bạn dễ hình dung.
      */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px); /* Nổi lên 8px */
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

    </div>
  );
};

export default Snowman;