import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>PrintMania</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; PrintMania</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/demo">Instagram</a>
        <a href="http://youtube.com/demo">Youtube</a>
        <a href="http://facebook.com/demo">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
