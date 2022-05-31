import React from "react";
import { useSelector } from "react-redux";
import DetailWeather from "../shared/DetailWeather";
import WaitForSearch from "../shared/WaitForSearch";

const SearchWeather = () => {
  const weather = useSelector((state) => state.searchCity);
  return (
    <div className="">
      {weather.isLoading ? (
        <div className="center h-96 flex-col gap-3 ">
          <WaitForSearch weather={weather} />
        </div>
      ) : (
        <div>
          <DetailWeather weatherDetail={weather.weather} />
        </div>
      )}
    </div>
  );
};

export default SearchWeather;
