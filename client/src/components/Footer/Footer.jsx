import React from "react";
import "./Footer.scss";
import Payment from "../../assets/payments.png"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            error quae nobis aspernatur? Quos dolorem corrupti harum ex
            deserunt, aperiam error, incidunt, magni dolore aliquid dignissimos
            obcaecati ullam tenetur enim?
          </div>
          </div>

          <div className="col">
          <div className="title">Contact</div>

          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Kayaloram Rd, Punnnamada, Kerala, 688006</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0471 272 0261</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@ecommerce.com</div>
          </div>
          </div>
           
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Wathces</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wereless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
          <div className="bottom-bar">
            <div className="bottom-bar-content">
              ECOMMERCE-STORE 2024 CREATED BY MOHIT..
            </div>
            <img className="img" src={Payment} alt="" />
          </div>
    
    </footer>
  );
};

export default Footer;
