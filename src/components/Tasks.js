import React from "react";
import TaksContainer from "./TaksContainer";
const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      {tasks.map((element) => (
        <TaksContainer
          key={element.id}
          element={element}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
