import React from "react";
import { useDispatch, useSelector } from "react-redux";
import searchGif from "../../assets/search-gif.gif";
import searchIcon from "../../assets/svg/search-svgrepo-com.svg";
import DetailWeather from "./DetailWeather";
  
const SearchWeather = () => {
  const weather = useSelector((state) => state.searchCity);
  return (
    <div className="">
      {weather.isLoading ? (
        <div className="center h-96 flex-col gap-3">
          <h1 className="font-serif text-3xl ">
            {weather.isSearch ? (
              "Searching ..."
            ) : (
              <div className="flex items-center">
                <p>Search For Weather</p>
                <img src={searchIcon} alt="search for city" className="w-5 ml-2 hover:rotate-90 transition-all" />
              </div>
            )}
          </h1>

          <img src={searchGif} alt="search" className={`search-gif w-64`} />
        </div>
      ) : (
        <div>
          <DetailWeather weatherDetail={weather.weather}/>
        </div>
      )}
    </div>
  );
};

export default SearchWeather;
