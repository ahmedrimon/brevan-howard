import React, { useEffect, useRef } from 'react';
import './Hero.css';

import downArrow from '../../../assets/downArrow.svg';
/* Gsap Things */
import { gsap } from 'gsap';

const Hero = () => {
  const textFirst = useRef();
  const textSecond = useRef();
  const floatingArrow = useRef();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.5 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  useEffect(() => {
    gsap.to(textFirst.current, {
      y: -20,
      duration: 2,
      ease: 'elastic.out(1, 0.3)',
    });
    gsap.to(textSecond.current, {
      y: -20,
      duratiion: 20,
      delay: 1,
    });
  }, []);

  return (
    <div>
      <div className="container hero-container">
        <div className="text-container">
          <h1 className="hero-text" ref={textFirst}>
            Macro &#38; Derivatives
          </h1>
          <h1 className="hero-text" ref={textSecond}>
            Excellence
          </h1>
        </div>
      </div>
      <div style={{ margin: '8em 58em' }}>
        <img
          src={downArrow}
          className="img-fluid"
          ref={floatingArrow}
          alt="arrow"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        />
      </div>
    </div>
  );
};

export default Hero;
