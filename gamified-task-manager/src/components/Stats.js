import React from "react";

function Stats({ xp }) {
  const level = Math.floor(xp / 100) + 1;
  const progress = xp % 100;

  return (
    <div className="stats">
      <h2>Level: {level}</h2>
      <h3>Total XP: {xp}</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Stats;