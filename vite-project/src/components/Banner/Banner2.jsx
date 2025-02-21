import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

// Inline Styles
const bannerStyle = {
  backgroundColor: "#f9f9f9",
  padding: "50px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const textContainerStyle = {
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const paragraphStyle = {
  fontSize: "16px",
  color: "#444",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const primaryButtonStyle = {
  backgroundColor: "#16A34A",
  color: "white",
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

const secondaryButtonStyle = {
  border: "2px solid #16A34A",
  color: "#16A34A",
  fontWeight: "bold",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

const Banner2 = () => {
  return (
    <div style={bannerStyle}>
      {/* Content Section */}
      <div style={textContainerStyle}>
        <motion.h1
          variants={SlideLeft(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          style={headingStyle}
        >
          Get 20% Discount On Your First Order, Are You Ready To Buy
        </motion.h1>
        <motion.p
          variants={SlideLeft(0.7)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          style={paragraphStyle}
        >
          We will make sure you get the right and best quality products for your workout.
        </motion.p>
        <motion.div
          variants={SlideLeft(0.9)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          style={buttonContainerStyle}
        >
          <button style={primaryButtonStyle}>Learn More</button>
          <button style={secondaryButtonStyle}>Stay In Touch</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner2;
