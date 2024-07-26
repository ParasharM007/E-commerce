import "./Newsletter.scss";
import {FaFacebookF,
       FaTwitter,
       FaLinkedin,
       FaInstagram
}  from "react-icons/fa"
const Newsletter = () => {
    return (
    <div className="newsletter-section">
        <div className="newsletter-component">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
            <input type="text" placeholder="Email Address"/>
            <button>Subscribe</button>
        </div>
            <div className="text">Will be used in accordance to our Privacy Policy </div>
      <div className="social-icons">
        <FaFacebookF className="icon" size={14}/>
        <FaInstagram className="icon" size={14}/>
        <FaLinkedin className="icon" size={14}/>
        <FaTwitter className="icon" size={14}/>
      </div>
        </div>
    </div>
    )
};

export default Newsletter;
