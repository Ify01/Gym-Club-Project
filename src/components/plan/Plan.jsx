import React from "react";
import "./Plan.css";
import { plansData } from "../../data/PlansData";
import whiteTick from "../../images/whiteTick.png";

const Plan = () => {
  return (
    <div className="plans-container">
      <div className="blur plan-blur1"></div>
      <div className="blur plan-blur2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US?</span>
      </div>

      <div className="plans">
        {plansData.map((data, i) => (
          <div className="plan" key={i}>
            {data.icon}
            <span>{data.name}</span>
            <span>$ {data.price}</span>

            <div className="features">
              {data.features.map((feature, i) => (
                <div key={i} className="feature">
                  <img src={whiteTick} alt="whiteTick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benefits -{">"}</span>
            </div>

            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
