import React from 'react'
import Footer from '../../Footer.scss';

import footerImg1 from "../../footerImg/american-express.jpg";
import footerImg2 from "../../footerImg/mastercard.jpg";
import footerImg3 from "../../footerImg/paypal.jpg";
import footerImg4 from "../../footerImg/visa-electron.jpg";
import footerImg5 from "../../footerImg/mastercard.jpg";
import footerImg6 from "../../footerImg/visa.jpg";
export default function UFooter() {
  return (
    <div className="out-u-footer">
          <div className="mainFooter-under">
        <p>
          Copyright 2014 SURANOV | All Rights Reserved | Designed By Jthemes
        </p>
        <ul>
          <img src={footerImg1} alt="" />
          <img src={footerImg2} alt="" />
          <img src={footerImg3} alt="" />
          <img src={footerImg4} alt="" />
          <img src={footerImg5} alt="" />
          <img src={footerImg6} alt="" />
        </ul>
      </div> 
    </div>
  )
}
