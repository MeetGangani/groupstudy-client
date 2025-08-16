import React from "react";
import "./SummaryCard.scss";

const SummaryCard = ({ topic, date, abstract, image }) => {
  return (
    <div className="summary-card">
      <div className="summary-card__text">
        <p className="topic">Topic: {topic}</p>
        <p className="date">Date: {date}</p>
        <p className="abstract">Abstract: {abstract}</p>
        <button>View Summary</button>
      </div>
      <div className="summary-card__img" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};

export default SummaryCard;
