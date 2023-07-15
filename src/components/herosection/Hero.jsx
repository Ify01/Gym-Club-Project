import React from "react";
import "./Hero.css";
import Header from "../header/Header";
import hero_image from "../../images/hero_image.png";
import hero_image_back from "../../images/hero_image_back.png";
import heart from "../../images/heart.png";
import calories from "../../images/calories.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      {/* <div className="blur hero-blur"></div> */}

      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "140px" : "190px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Just do it, Fitness at its peak</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Train </span>
            <span>Your</span>
          </div>
          <div>
            <span>mindset</span>
          </div>
          <div>
            <span>
              in here we will help ypu to shape your ideal body and live up your
              healthy life
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={38} start={10} delay="4" preFix="+" />
            </span>
            <span>professional trainers</span>
          </div>
          <div>
            <span>
              <NumberCounter end={112} start={50} delay="4" preFix="+" />
            </span>
            <span>club members</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={21} start={5} delay="4" preFix="+" />
            </span>
            <span>fitness courses</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Join</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          in="true"
          className="heart-rate"
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>

        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero"
          className="hero-image-back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Workout Rate</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
