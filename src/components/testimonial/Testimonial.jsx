import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/TestemonialData";
import leftArrow from "../../images/leftArrow.png";
import rightArrow from "../../images/rightArrow.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);

  const tlength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what builders</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt="imag"
        />

        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="arrow"
          />
          <img
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
