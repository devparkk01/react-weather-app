import React, { useState, useEffect } from "react";
import "./css/style.css";
import TempData from "./TempData";

const TempApp = (props) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d4d7956b1fd66c41be3ad8664f6d1c76`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson.main);
      setData(responseJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        <div className="info">
          {!data ? (
            <div className="errorMsg">No Data found</div>
          ) : (
            <TempData name={search} data={data}></TempData>
          )}
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </div>
  );
};

export default TempApp;
