import React from "react";
import { FaTimes } from "react-icons/fa";
const TaksContainer = ({ element, deleteTask, toggleReminder }) => {
  return (
    <div
      className={`task ${element.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(element.id)}
    >
      <h3>
        {element.text}{" "}
        <FaTimes
          onClick={() => deleteTask(element.id)}
          style={{
            color: "red",
            marginTop: 20,
            cursor: "pointer",
          }}
        />
      </h3>
      <p>{element.day}</p>
    </div>
  );
};

export default TaksContainer;
