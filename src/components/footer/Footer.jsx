import React from "react";
import style from './footer.module.css'
import logo from '../../img/Navbar/navBar_logo.jpg'

const Footer = () => {
  return <div className={style.main}>
    <div className={style.container}>
      <div className={style.upper}>
        <div className={style.block_1}>
          <div className={style.block_1_logo}>
            <img src={ logo } alt="" />
          </div>
          <div className={style.block_1_txt}>
            <p>Joobs is the largest talent platform <br /> in Southeast Asia and Taiwan for <br /> career development and <br /> recruitment.</p>
          </div>
        </div>
        <div className={style.block_2}></div>
        <div className={style.block_3}></div>
        <div className={style.block_4}></div>
      </div>
      <div className={style.lower}></div>
    </div>
  </div>;
};

export default Footer;
