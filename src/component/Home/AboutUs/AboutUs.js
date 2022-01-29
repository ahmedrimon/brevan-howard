import React from 'react';
import './AboutUs.css';

import circle from '../../../assets/circle.svg';
import YearsHistory from '../YearsHistory/YearsHistory.js';

const AboutUs = () => {
  return (
    <section className="container">
      <div className="mt-5">
        <img className="mx-3" src={circle} alt="" />
        <span>ABOUT US</span>
      </div>
      <div>
        <span className="firm-text">Firm Overview</span>
      </div>
      <div>
        <p className="firm-para">
          Founded in 2002, Brevan Howard is a leading global alternative
          investment management platform, specialising in global macro. Our
          reputation, built up over nearly two decades, is founded on the
          quality of our exceptional people, our best-in-class technology and
          wide range of dynamic investment products offered within a rigorous
          institutional framework.
        </p>
      </div>
      <div>
        <span className="details-text">more details</span>
      </div>
      <div>
        <YearsHistory />
      </div>
    </section>
  );
};

export default AboutUs;
