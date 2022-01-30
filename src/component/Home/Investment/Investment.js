import React from 'react';
import './Investment.css';

import investment from '../../../assets/investment-picture.jpg';

const Investment = () => {
  return (
    <section className="investment-container">
      <section className="container">
        <section className="row">
          <main className="col-xxl-6 col-md-6">
            <div className="investment-first-text">Investment</div>
            <div className="investment-first-text">Approach</div>
            <p className="investment-para mt-5">
              Our investment approach combines directional, relative value and
              derivative trading strategies designed to deliver orthogonal but
              complementary returns across a broad range of investment
              solutions.
            </p>
            <p className="investment-second-para">
              We differentiate our investment process via our three core pillars
              of expertise in macro thinking, trade structuring and risk
              management.
            </p>
            <span className="details-text mt-5">More Details</span>
          </main>
          <main className="col-xxl-6 col-md-6">
            <img className="img-fluid" src={investment} alt="investment" />
          </main>
        </section>
      </section>
    </section>
  );
};

export default Investment;
