import React from 'react';
import './Footer.css';

import logo from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <section className="footer-container text-white">
      <section className="container">
        <section className="row">
          <section className="d-flex col-xxl-6">
            <section>
              <section>
                <img className="footer-logo img-fluid" src={logo} alt="" />
              </section>
              <section className="middle-footer">
                <div>About Us</div>
                <div>Culture</div>
                <div>Careers</div>
                <div>Contact</div>
              </section>
              <section className="mt-5">
                <div className="footer-end">Privacy Policy</div>
                <div className="footer-end">Terms of Use</div>
              </section>
            </section>
            <section className="footer-right-side">
              <section>
                <div>Linkedin</div>
              </section>
              <section className="footer-right-end">
                <div className="footer-end">Request Access</div>
                <div className="footer-end">Notices</div>
              </section>
            </section>
          </section>
          {/* right footer */}
          <section className="col-xxl-6">
            <section>
              <div className="footer-last-part">Contact</div>
            </section>
            <section>
              <div>Investor Relations / Fund Enquiries:</div>
              <div className="footer-end">ir@brevanhoward.com</div>
            </section>
            <section className="mt-2">
              <div>All Other Enquiries:</div>
              <div className="footer-end">enquiries@brevanhoward.com</div>
              <div className="footer-end">+44 20 7022 6200</div>
            </section>
            <section className="mt-2">
              <div>Press Enquiries:</div>
              <div className="footer-end">Peregrine Communications Group</div>
            </section>
            <section className="mt-2">
              <div className="footer-end">UK +44 20 3040 0874</div>
              <div className="footer-end">Email Bill McIntosh</div>
            </section>
            <section className="mt-2">
              <div className="footer-end">Bd +880 170 482 9662</div>
              <div className="footer-end">Email Iftekhar Ahmed</div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
