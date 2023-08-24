import React from "react";
import { TiTick } from "react-icons/ti";
import "./Rank.scss";
const Rank = ({ level = 2 }) => {
  const ticks = [];
  for (let i = 0; i < 5; i++) {
    if (i < level) {
      ticks.push({
        icon: <TiTick />,
        isRanked: true,
      });
    } else {
      ticks.push({
        icon: <TiTick />,
        isRanked: false,
      });
    }
  }

  return (
    <div className="tick__container">
      {ticks.map((tick, i) => (
        <div
          key={i}
          className={`tick__item ${tick.isRanked ? "tick__ranked" : ""}`}
        >
          <>{tick.icon}</>
        </div>
      ))}
    </div>
  );
};

export default Rank;
