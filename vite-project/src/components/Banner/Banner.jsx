import React from "react";

// Inline Styles
const bannerStyle = {
  backgroundColor: "#16A34A", // Green background
  color: "white",
  padding: "50px 20px",
  textAlign: "center",
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const Banner = () => {
  return <div style={bannerStyle}>Welcome to Our Gym</div>;
};

export default Banner;
