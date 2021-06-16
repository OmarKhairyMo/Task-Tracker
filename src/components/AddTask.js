import React, { useState } from "react";

const AddTask = ({ tasks, setTask, addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !date) alert("Enter Somthing in both");
    else {
      addTask({
        id: Math.floor(Math.random() * 10000) + 1,
        text: text,
        day: date,
        reminder: Boolean(reminder),
      });
    }
  };
  return (
    <form className="add-form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.value)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
