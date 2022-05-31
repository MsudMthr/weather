import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import fetchWeather from "./../../redux/getWeather/getWeatherAction";

const SearchForm = () => {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setCityName(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(cityName));
  };

  return (
    <div className="flex h-96 w-80 flex-col  py-4 px-2">
      <h1 className="shadow-tictoc w-32 text-5xl">
        Search <span className="pl-8 ">Weather</span>
      </h1>
      <p className=" my-6 font-serif capitalize tracking-tight opacity-75">
        Search the name of the city you want to know the weather conditions
      </p>
      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="search" className=" my-2 px-3 text-lg font-semibold">
          City
        </label>
        <input
          type="search"
          name=""
          id="search"
          className="input-search "
          value={cityName}
          onChange={changeHandler}
          placeholder="Search City "
          required
        />
        <button className="btn-search">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
