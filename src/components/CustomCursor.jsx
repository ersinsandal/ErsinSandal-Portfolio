import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-crosshair"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      <motion.div
        className="cursor-scanner"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          rotate: isHovering ? 90 : 45,
          scale: isHovering ? 0.8 : 1,
          borderColor: isHovering ? 'rgba(155, 17, 30, 0.9)' : 'rgba(155, 17, 30, 0.4)',
          backgroundColor: isHovering ? 'rgba(155, 17, 30, 0.1)' : 'transparent',
          borderRadius: isHovering ? '50%' : '8px'
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      >
        {isHovering && (
          <motion.div 
            className="cursor-target"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0.8, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
