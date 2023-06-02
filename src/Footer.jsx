import React from "react";



import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import {MdAddIcCall} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'


import "./Footer.scss";
export default function Footer() {
  return (
    <div className={`outFooter border-color `}>
      <div className="mainFooter">
        <div className="blocks-footer1">
          <h4>О нас</h4>
          <div className="line-footer"></div>
          <p>
            Lorem ipsuitatis placeat quia repudiandae dicta cipit accusamus
            quisquam illum, ea aliquid distinctio
          </p>
          <div className="icons-footer">
            <span>
              <FaFacebookSquare id="face" />
            </span>
            <span>
              <FaInstagramSquare id="insta" />
            </span>
            <span>
              <FaTwitter id="twitter" />
            </span>
            <span>
              <FaWhatsappSquare id="whats" />
            </span>
          </div>
        </div>
        <div className="blocks-footer1">
          <h4>Полезные тэги</h4>
          <h3>Fation</h3>
            <h3>Jeans</h3>
            <h3>Top Sellers</h3>
          <p>Lorem ipsum dolor sit amet conse tetur adipi</p>
          
        </div>
        <div className="blocks-footer1">
          <h4>information</h4>
          <div className="blocks-footer-info">
            <div className="inner-blocks"><MdAddIcCall className="MdAddIcCall"/><span>+996 554 458 010</span></div>
            <div className="inner-blocks"><MdAddIcCall className="MdAddIcCall"/><span>+996 557 789 012</span></div>
            <div className="inner-blocks"><MdEmail className="MdAddIcCall"/><span>info@datka.com</span></div>
            <div className="inner-blocks"><ImLocation className=" MdAddIcCall"/><span>Ош</span></div>
          </div>

        </div>
     
      </div>
   
    </div>
  );
}
