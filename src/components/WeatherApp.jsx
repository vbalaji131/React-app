import getApiData from "../data/apiAccess";
import React, { useState, useEffect } from "react";
import data, { weatherImg, getApiUrl } from "../data/weatherApiData";

const WeatherApp = () => {
  //State varible for city input
  const [city, setCity] = useState("");
  const inputCity = (event) => {
    setCity(event.target.value);
  };

  //state varible to store fetched api data for every time the center name enters
  const [apiData, setapiData] = useState(data);

  //function execute every time the Enter pressed in city input box
  //function execute every time the "Get Temparature" button clicked
  //also set that data into "apiData" state varible
  async function displayAppi() {
    console.log("fetching api");
    setapiData(await getApiData(getApiUrl(city)));
  }

  //"cliamte" varible used to set the type of the climate from api data
  const [img, setImg] = useState(null);
  let climate;
  //function to confirm weather the given city name data available or not
  const response = () => {
    if (apiData.cod === 200) {
      climate = apiData.weather[0].main;
      return true;
    } else {
      climate = 0;
      return false;
    }
  };

  useEffect(() => {
    setImg(climate);
  }, [apiData, climate]);


  //Styling for weatherApp div
  var bgStyles = {
    backgroundImage: `url(${weatherImg[img] ?? weatherImg.other} )`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textColor: "green",
    // zIndex:1
  };


  
  return (
    <div className="weatherApp" style={bgStyles}>
      <div className="col-md-3 m-2">
        <input
          className="form-control"
          type="text"
          value={city}
          onChange={inputCity}
          placeholder="Enter the city name"
          onKeyDown={(e) => (e.key === "Enter" ? displayAppi() : null)}
        />
      </div>
      <button className="btn btn-warning" onClick={displayAppi}>
        Get Temparature
      </button>
      {response() ? (
        <div
          className="card border-warning  mt-2"
          style={{ maxWidth: "25rem" }}
        >
          <p className="card-header">Place: {apiData.name}</p>
          <div className="card-body text-secondary card-title ">
            <p className="card-title ">Temparature: {apiData.main.temp} C</p>
            <p className="card-text">Climate: {apiData.weather[0].description}</p>
          </div>
        </div>
      ) : (
        <div
          className="card border-secondary mt-2"
          style={{ maxWidth: "25rem" }}
        >
          <p className="card-header">{apiData.cod}</p>
          <div className="card-body text-secondary ">
            <p className="card-title ">{apiData.message}</p>
            <p className="card-text">Enter the correct city name!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
