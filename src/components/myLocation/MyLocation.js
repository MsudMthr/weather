import React from "react";
import MyLocationForm from "./MyLocationForm";
import MyLocationWeather from "./MyLocationWeather";

const MyLocation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-around bg-slate-300 pt-20 md:flex-row ">
      <MyLocationForm />
      <MyLocationWeather />
    </div>
  );
};

export default MyLocation;
