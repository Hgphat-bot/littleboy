import React, { useEffect, useRef, useState, useCallback } from 'react';

// Số lượng bông tuyết muốn hiển thị
const NUMBER_OF_SNOWFLAKES = 80; 

/**
 * Lớp (Class) đại diện cho một bông tuyết
 */
class Snowflake {
  constructor(element, speed, xPos, yPos, browserWidth, browserHeight) {
    this.element = element;
    this.speed = speed;
    this.xPos = xPos;
    this.yPos = yPos;
    this.browserWidth = browserWidth;
    this.browserHeight = browserHeight;

    this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;

    this.size = 14 + Math.random() * 40;
    this.opacity = 0.3 + Math.random() * 0.7;
    
    this.style = {
        transform: `translate3d(${Math.round(xPos)}px, ${Math.round(yPos)}px, 0)`,
        opacity: this.opacity,
        fontSize: `${this.size}px`,
    };
  }

  update(browserWidth, browserHeight) {
    this.browserWidth = browserWidth;
    this.browserHeight = browserHeight;

    // ✨ ĐIỀU CHỈNH 1: Giảm tốc độ cập nhật counter (chậm tổng thể)
    this.counter += this.speed / 4000; 
    
    // ✨ ĐIỀU CHỈNH 2: Giảm tốc độ chuyển động ngang (Tăng độ dài chu kỳ gió)
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 60;
    // ✨ ĐIỀU CHỈNH 3: Giảm tốc độ rơi dọc (Tăng thời gian rơi)
    this.yPos += Math.sin(this.counter) / 40 + this.speed / 30; 

    // LOGIC RƠI LIÊN TỤC: Nếu rơi ra khỏi màn hình, đưa nó trở lại đỉnh
    if (this.yPos > this.browserHeight) {
        this.yPos = -50;
        this.xPos = getPosition(50, this.browserWidth); 
    }

    // Cập nhật và trả về style
    this.style = {
        transform: `translate3d(${Math.round(this.xPos)}px, ${Math.round(this.yPos)}px, 0)`,
        opacity: this.opacity,
        fontSize: `${this.size}px`,
    };
  }
}

/**
 * Hàm tiện ích để tính vị trí ngẫu nhiên
 * ... (Giữ nguyên)
 */
const getPosition = (offset, size) => {
  return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
};


/**
 * React Component để tạo hiệu ứng tuyết rơi
 */
const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const animationRef = useRef();
  
  const handleResize = useCallback(() => {}, []);

  const moveSnowflakes = useCallback(() => {
    
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;

    setSnowflakes((prevSnowflakes) => {
      const nextSnowflakes = prevSnowflakes.map((snowflake) => {
        
        if (snowflake.browserWidth !== currentWidth || snowflake.browserHeight !== currentHeight) {
            snowflake.xPos = getPosition(50, currentWidth);
            snowflake.yPos = getPosition(50, currentHeight);
        }
        
        snowflake.update(currentWidth, currentHeight);
        
        return { ...snowflake }; 
      });
      
      return nextSnowflakes;
    });

    animationRef.current = requestAnimationFrame(moveSnowflakes);
    
  }, []); 

  // LOGIC CHÍNH: Khởi tạo và Bắt đầu Animation
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (snowflakes.length === 0) {
      const initialSnowflakes = [];
      const initialWidth = window.innerWidth;
      const initialHeight = window.innerHeight;

      for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
        const initialXPos = getPosition(50, initialWidth);
        const initialYPos = getPosition(50, initialHeight);
        // Tốc độ ban đầu giữ nguyên hoặc có thể tăng/giảm nhẹ tùy ý
        const speed = 10 + Math.random() * 60; 

        initialSnowflakes.push(
          new Snowflake(
            null, 
            speed,
            initialXPos,
            initialYPos,
            initialWidth,
            initialHeight
          )
        );
      }
      setSnowflakes(initialSnowflakes);
    }
    
    if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(moveSnowflakes);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
    };
    
  }, [handleResize, moveSnowflakes, snowflakes.length]); 


  if (snowflakes.length === 0) {
    return null; 
  }

  return (
    <div
      id="snowflakeContainer"
      className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden" 
    >
      {snowflakes.map((snowflake, index) => (
        <span
          key={index}
          className="text-white select-none absolute"
          style={snowflake.style}
        >
          *
        </span>
      ))}
    </div>
  );
};

export default Snowfall;