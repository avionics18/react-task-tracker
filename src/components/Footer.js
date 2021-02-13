import React from "react";
import {Link} from "react-router-dom";
import {FcHome, FcAbout} from "react-icons/fc";

const Footer = () => {
  return (
    <div className="card-footer">
      <p className="mb-1 small text-center">
        <Link to="/" className="text-primary"><FcHome /> Home</Link> | <Link to="/about" className="text-primary"><FcAbout /> About</Link>
      </p>
      <p className="m-0 text-secondary font-weight-bold small text-center">Copyright © Task Tracker 2021.</p>
    </div>
  );
};


export default Footer;
