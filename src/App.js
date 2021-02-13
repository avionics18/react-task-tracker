import React, { useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import About from "./components/About";
import Footer from "./components/Footer";
import "./bootstrap.css";
import "./style.css";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const delTask = id => {
    // alert("Obejct deleted! "+ id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ToggleReminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
            <div className="card shadow-sm rounded-lg">
              {/* Card Header */}
              <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
              />
              {/* Card Body */}
              <div className="card-body">
                <Route path="/" exact render={(props)=>(
                  <React.Fragment>
                    {/* Form Component */}
                    {showAddTask && <AddTask addTask={addTask} />}
                    {/* Tasks Component */}
                    <Tasks
                      tasks={tasks}
                      delTask={delTask}
                      toggleRem={toggleReminder}
                    />
                  </React.Fragment>
                )} />
                {/* About Page */}
                <Route path="/about" component={About} />
              </div>
              {/* Card Footer */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
