import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, delTask, toggleRem }) => {
  // If no tasks are present
  if (tasks.length == 0) {
    return (
      <div className="task-list">
        <p className="text-secondary m-0">No tasks here!!! Click on <b>+ Add Task</b> to add one.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(item => (
        <Task key={item.id} task={item} delTask={delTask} toggleRem={toggleRem} />
      ))}
    </div>
  );
};

export default Tasks;
