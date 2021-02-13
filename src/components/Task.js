import React from "react";
import { FaTimes, FaBell } from "react-icons/fa";

const Task = ({ task, delTask, toggleRem }) => {
  return (
    <div
      key={task.id}
      className={`task-item shadow ${task.reminder ? "notification-on" : ""}`}
    >
      <div className="task-content">
        <p className="mb-1">{task.text}</p>
        <p className="m-0">
          <span className="badge badge-dark mr-1">{task.date}</span>
          <span className="badge badge-dark mr-1">{task.time}</span>
          {task.reminder ? (
            <span className="badge badge-success">
              <FaBell /> Reminder
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
      <div className="task-close ml-2">
        <p className="mb-1">
          <button
            onClick={() => delTask(task.id)}
            className="btn btn-danger btn-sm"
          >
            <FaTimes />
          </button>
        </p>
        <p className="m-0">
          <button
            onClick={() => toggleRem(task.id)}
            className={`btn btn-sm ${
              task.reminder ? "btn-success" : "btn-outline-secondary"
            }`}
          >
            <FaBell />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Task;
