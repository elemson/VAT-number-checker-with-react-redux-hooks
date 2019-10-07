import React from "react";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-primary btn-lg btn-block mb-5" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
