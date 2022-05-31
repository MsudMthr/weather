import React from "react";

import { useDispatch, useSelector } from "react-redux";
import fetchMyLocationWeather from "./../../redux/getMyLocationWeather/getMyLocationAction";

const MyLocationForm = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        dispatch(fetchMyLocationWeather(long, lat));
      });
    }
  };
  return (
    <div className="flex h-96 w-80 flex-col  py-4 px-2">
      <h1 className="shadow-tictoc  w-32 text-5xl">
        Your <span className="pl-8">Location</span>
      </h1>
      <p className=" my-6 font-serif capitalize tracking-tight opacity-75">
        Confirm to know about the weather of your location
      </p>
      <button className="btn-search" onClick={clickHandler}>
        Search
      </button>
    </div>
  );
};

export default MyLocationForm;
