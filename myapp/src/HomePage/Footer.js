import React from "react";

const Footer = () => {
  const containerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
  };

 

  const workingDaysStyle = {
    marginBottom: "10px",
  };

  const workingHoursStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={workingDaysStyle}>
        <p>Working Days: Monday to Sunday</p>
      </div>
      <div style={workingHoursStyle}>
        <p>Sunday: 9.00 AM to 9.00 PM</p>
      </div>
      <div >
        <p>
          Contact Us: <a style={{textDecoration:"none", color:"red"}} href="https://www.facebook.com">Facebook</a>{" "}
          <a  style={{textDecoration:"none", color:"red"}} href="https://www.instagram.com">Instagram</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
