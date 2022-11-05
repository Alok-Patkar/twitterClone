import React, { useState } from "react";

const TrendKeyWords = () => {
  const [state, setState] = useState([
    {
      id: 1,
      country: "Trends in India",
      keyword: "ISPR",
      totalKeywords: "2218k",
    },
    {
      id: 2,
      country: "Trends in India",
      keyword: "Narendra Modi",
      totalKeywords: "6000k",
    },
    {
      id: 3,
      country: "Trends in India",
      keyword: "Youtube in India",
      totalKeywords: "2560k",
    },
  ]);
  return (
    <div className="keywords">
      <div className="key">
        <div className="keywords__heading">
          <h4>Trends for you</h4>
        </div>
        {state.map((keyword) => (
          <div key={keyword.id}>
            <div className="country">{keyword.country}</div>
            <div className="keyword__name">
              <strong>{keyword.keyword}</strong>
            </div>
            <div className="keyword__tweets">{keyword.totalKeywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendKeyWords;
