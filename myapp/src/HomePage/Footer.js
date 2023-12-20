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
        <p>Working Days: Mon- Sun : 9 PM -11 PM</p>
      </div>
      <div style={workingHoursStyle}>
        <p>Sunday: 9.00 AM - 9.00 PM</p>
      </div>
      <div>
        <p>
          Follow us:{" "}
          <a
            style={{ textDecoration: "none", color: "red" }}
            href="https://www.facebook.com"
          >
            [ Facebook]
          </a>{" "}
          <a
            style={{ textDecoration: "none", color: "red" }}
            href="https://www.instagram.com"
          >
            [Instagram]
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
