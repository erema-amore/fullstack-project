import React from "react";

import "./Footer.css";
import Logo from "../../icons/Logo.svg";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__main__block">
        <div className="footer__main__block_first">
          <img src={Logo} alt="error" />
          <h3 className="footer__main__block_first__descr">
            Joobs is the largest talent platform in Southeast Asia and Taiwan
            for career development and recruitment.
          </h3>
        </div>
        <div className="footer__main__block_second">
          <h2 className="footer__main__block_second__header">Employer</h2>
          <h3 className="footer__main__block_second__items">About Us</h3>
          <h3 className="footer__main__block_second__items">Careers</h3>
          <h3 className="footer__main__block_second__items">Blog</h3>
        </div>
        <div className="footer__main__block_third">
          <h2 className="footer__main__block_third__header">
            Find Vacancy Based On
          </h2>
          <h3 className="footer__main__block_third__items">Help Center</h3>
          <h3 className="footer__main__block_third__items">Job Location</h3>
          <h3 className="footer__main__block_third__items">Company Name</h3>
        </div>
        <div className="footer__main__block_fourth">
          <h2 className="footer__main__block_fourth__header">Address</h2>
          <h3 className="footer__main__block_fourth__descr">hello@jobbb.com</h3>
          <h3 className="footer__main__block_fourth__descr">
            JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
