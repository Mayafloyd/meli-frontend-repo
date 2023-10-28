import React from "react";
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";
import "./loading.scss";

const Loading = () => {
  // Este progressBar ayuda a la usabilidad de la app
  return (
    <div role="progressbar" className="activityContainer">
      <Bounce color="#ffe600" size={32} speed={1} animating={true} />
    </div>
  );
};

export default Loading;
