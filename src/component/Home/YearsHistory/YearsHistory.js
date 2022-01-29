import React from 'react';
import './YearsHistory.css';

const YearsHistory = () => {
  return (
    <section className="years-container mt-5 d-flex">
      <main>
        <div className="number-eighteen">18</div>
        <div className="years-history">Years History</div>
        <span className="history-para">
          Investing in global markets, refining and improving our investment
          processes and delivering results for our clients.
        </span>
      </main>
      <main>
        <section className="d-flex">
          <span className="member">300+</span>
          <div className="mx-5 mt-3">
            <div>Team Members</div>
            <div>
              A diverse and global community of independent thinkers make up our
              inclusive workplace.
            </div>
          </div>
        </section>
        <section className="d-flex sidebar-two">
          <span className="member">90+</span>
          <div className="mx-5 mt-3">
            <div>Portfolio Managers*</div>
            <div>
              Specialised in their fields and diversified across trading style
              and geography.
            </div>
          </div>
        </section>
        <section className="d-flex sidebar-three">
          <span className="member">09+</span>
          <div className="mx-5 mt-3">
            <div>Offices</div>
            <div>
              Located in key regions to serve our global client base and access
              unique talent pools.
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default YearsHistory;
