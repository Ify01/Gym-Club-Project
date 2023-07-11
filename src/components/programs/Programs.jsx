import React from "react";
import "./Programs.css";
import { programsData } from "../../data/ProgramsData";
import RightArrow from "../../images/rightArrow.png";

const Programs = () => {
  return (
    <div className="program" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to build you</span>
      </div>

      <div className="program-categories">
        {programsData.map((programs) => (
          <div key={programs.id} className="category">
            {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="RightArrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
