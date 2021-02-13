import React, {useState} from "react";
import {FaPaperPlane} from "react-icons/fa";

const AddTask = ({addTask}) => {

  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setRem] = useState(false);

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();
    addTask({text, date, time, reminder});

    setText("");
    setDate("");
    setTime("");
    setRem(false);
  }


  return (
    <form className="mb-4 pb-2" onSubmit={onSubmit}>
      <div className="form-group">
        <label
          htmlFor="taskName"
          className="small text-secondary text-uppercase"
        >
          Task Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task Name"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <div className="col-6">
        <div className="form-group">
          <label htmlFor="date" className="small text-secondary text-uppercase">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            required
          />
        </div></div>
        <div className="col-6">
        <div className="form-group">
          <label htmlFor="date" className="small text-secondary text-uppercase">
            Time
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Time"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            required
          />
        </div></div>
      </div>
      
      <div className="custom-control custom-checkbox mb-3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customControlAutosizing"
          checked={reminder}
          onChange={(e)=>setRem(e.currentTarget.checked)}
        />
        <label
          className="custom-control-label"
          htmlFor="customControlAutosizing"
        >
          Set Reminder
        </label>
      </div>
      <button type="submit" className="btn btn-dark btn-block">
        Submit <FaPaperPlane />
      </button>
    </form>
  );
};

export default AddTask;
