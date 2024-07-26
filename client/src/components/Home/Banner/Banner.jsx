import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis earum debitis consequuntur unde, architecto tempora
            tempore aliquam eius corporis ex, fugiat iure aspernatur itaque.
            Quasi repellendus cumque totam alias iusto!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read more</div>
            <div className="banner-cta v2">Shop now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
