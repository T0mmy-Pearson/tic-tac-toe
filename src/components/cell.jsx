import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div
      className={`cell ${value ? "taken" : ""}`}
      onClick={onClick}
      onTouchStart={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;