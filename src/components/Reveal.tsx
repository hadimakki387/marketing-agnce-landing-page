import React, { useState, useEffect } from 'react';

const Reveal = ({ children } :{ children:any }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  useEffect(() => {
    const handleScroll = () => {
      if (isRevealed) {
        return;
      }

      const revealTop = children.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        setIsRevealed(true);
      } else {
        setIsRevealed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isRevealed) {
    return null;
  }

  return (
    <div className="">
      {children}
    </div>
  );
};

export default Reveal;
