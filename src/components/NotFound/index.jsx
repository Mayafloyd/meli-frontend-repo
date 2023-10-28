import React from "react";
import "./notFound.scss";

const NotFound = (props) => {
  const { text } = props;
  return (
    <div data-testid="not-found" className="notFoundContainer">
      <p> {text}</p>
    </div>
  );
};

export default NotFound;
