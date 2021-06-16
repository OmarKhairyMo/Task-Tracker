import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTask] = useState([]);
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTask([...tasks, data]);
    // setTask([...tasks, task]);
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTask(tasks.filter((element) => element.id !== id));
  };

  const toggleReminder = async (id) => {
    const currentObj = await fetchTask(id);

    const updatedObj = { ...currentObj, reminder: !currentObj.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedObj),
    });
    const data = await res.json();
    console.log(data);
    setTask(
      tasks.map((element) =>
        element.id === id ? { ...element, reminder: data.reminder } : element
      )
    );
  };
  const toggleShowTask = () => {
    setShowTask(!showTask);
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTask(data);
    })();
  }, []);
  return (
    <div className="container">
      {showTask && (
        <AddTask tasks={tasks} setTask={setTask} addTask={addTask} />
      )}
      <Header title="Lemon" setShowTask={toggleShowTask} showTask={showTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        "No Tasks Here"
      )}
    </div>
  );
}

export default App;
