import React from 'react';
import './HallMarks.css';

import people from '../../../assets/people.svg';
import technology from '../../../assets/technology.svg';
import stock from '../../../assets/stock.svg';

import outstanding from '../../../assets/outstanding.svg';
import structure from '../../../assets/structure.svg';
import search from '../../../assets/search.svg';

const HallMarks = () => {
  return (
    <section className="hallmarks-container">
      <section className="container">
        <span className="hallmarks-text">Hallmarks of Brevan Howard</span>
        <section className="row mt-5 text-center">
          <section className="col-xxl-4">
            <div>
              <img src={people} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">Extraordinary</div>
                <div className="hallmarks-span-text">People</div>
              </main>
            </div>
            <div className="mt-5">
              <img src={technology} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">Best-in-Class</div>
                <div className="hallmarks-span-text">Technology</div>
              </main>
            </div>
          </section>
          <section className="col-xxl-4">
            <div>
              <img src={stock} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">
                  Diversified Investment
                </div>
                <div className="hallmarks-span-text">Products</div>
              </main>
            </div>
            <div className="mt-5">
              <img src={outstanding} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">Outstanding</div>
                <div className="hallmarks-span-text">Macro Analysis</div>
              </main>
            </div>
          </section>
          <section className="col-xxl-4">
            <div>
              <img src={structure} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">Structuring</div>
                <div className="hallmarks-span-text">Expertise</div>
              </main>
            </div>
            <div className="mt-5">
              <img src={search} alt="" />
              <main className="mt-5">
                <div className="hallmarks-span-text">Excellence in</div>
                <div className="hallmarks-span-text">Risk Management</div>
              </main>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HallMarks;
