import React from "react";
import "./Button.css";

const Button = ({ version, ...props }) => {
  return (
    <div className="button" onClick={props.onClick}>
      <h3>{version ? "中文" : "English"}</h3>
    </div>
  );
};

export default Button;
