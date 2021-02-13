import React from "react";

const Button = ({ color, text, size, power }) => {
  return (
    <button onClick={power} className={`btn btn-${color} btn-${size}`}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button Component",
};

export default Button;
