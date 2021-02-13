import React from "react";
import { useLocation } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <div className="card-header d-flex justify-content-between align-items-center">
      <h1 className="h5 text-primary font-weight-bold m-0">
        <FaHistory /> Task Tracker
      </h1>
      {location.pathname === "/" &&
        (showAdd ? (
          <Button color="danger" text="Done" size="sm" power={onAdd} />
        ) : (
          <Button color="primary" text="+ Add Task" size="sm" power={onAdd} />
        ))}
    </div>
  );
};

export default Header;
