import React from "react";
import "./EducationCard.css";

const EducationCard = ({emoji, heading, detail, date, color}) => {
  return (
    <div className="educationCard" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" className="eduCardImg"/>
      <div className="eduDetails">
        <span>{heading}</span>
        <span>{detail}</span>
        <span>{date}</span>

      </div>
    </div>
  );
};

export default EducationCard;
