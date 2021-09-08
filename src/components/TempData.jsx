import React from "react";

import "./css/style.css";

const TempData = (props) => {
  return (
    <div>
      <h2 className="location">
        <i className="fas fa-street-view"></i>
        {props.name}
      </h2>
      <h1 className="temp">{`${props.data.temp} C`}</h1>
      <h3 className="tempmin_max">
        Min : {`${props.data.temp_min} C`} | Max : {`${props.data.temp_max} C`}
      </h3>
      <h3 className="tempmin_max">
        Humidity : {`${props.data.humidity} % `} | Pressure : {`${props.data.pressure}`}
      </h3>
    </div>
  );
};

export default TempData;
