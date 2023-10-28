import React from "react";
import "./notFound.scss";

const NotFound = (props) => {
  const { text } = props;
  //Este mensaje ayuda a la usabilidad de la aplicación
  return (
    <div data-testid="not-found" className="notFoundContainer">
      <p> {text}</p>
    </div>
  );
};

export default NotFound;
