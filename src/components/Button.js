import React from "react";

const Button = ({ setShowTask, showTask }) => {
  return (
    <button
      className="btn"
      onClick={setShowTask}
      style={{ backgroundColor: showTask ? "green" : "red" }}
    >
      {showTask ? "Close" : "Add"}
    </button>
  );
};

export default Button;
