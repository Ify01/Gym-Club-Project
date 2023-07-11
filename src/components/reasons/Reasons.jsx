import React from "react";
import "./Reasons.css";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import nb from "../../images/nb.png";
import adidas from "../../images/adidas.png";
import nike from "../../images/nike.png";
import tick from "../../images/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>

      <div className="right-r">
        <span>Some Reasons</span>

        <div>
          <span className="stroke-text">Why </span>
          <span> Choose us</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER 38 PERSONAL TRAINERS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>BUILD FITNESS WITH CORE VALUE</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>3 STARTER KIT FOR NEW CLUB MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>CREDIBILITY</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            textTransform: "uppercase",
            fontWeight: "normal",
          }}
        >
          Our Partners
        </span>

        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
