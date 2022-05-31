import React from "react";

import searchGif from "../../assets/search-gif.gif";
import searchIcon from "../../assets/svg/search-svgrepo-com.svg";
import notFound from "../../assets/notFound.jpg";

const WaitForSearch = ({ weather }) => {
  return (
    <>
      <h1 className="font-serif text-3xl ">
        {weather.error ? (
          <section className="flex flex-col gap-4">
            <h1 className="text-red-600">Oops!</h1>
            <p className="capitalize">{weather.error}</p>
            <img src={notFound} alt="not found city" className="notFoundImage" />
          </section>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <p>Search For Weather</p>
              <img
                src={searchIcon}
                alt="search for city"
                className="ml-2 w-5 transition-all hover:rotate-90"
              />
            </div>
            <img src={searchGif} alt="search" className={`search-gif w-64`} />
          </div>
        )}
      </h1>
    </>
  );
};

export default WaitForSearch;
