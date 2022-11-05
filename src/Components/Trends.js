import React from "react";
import { FaSistrix } from "react-icons/fa";
import TrendKeyWords from "../TrendKeyWords";

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__search">
        <input
          type="text"
          placeholder="Search Twitter"
          className="trends__control"
        />
        <div className="trends__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrendKeyWords />
    </div>
  );
};

export default Trends;
