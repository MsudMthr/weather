import React from 'react';

import searchGif from "../../assets/search-gif.gif";
import searchIcon from "../../assets/svg/search-svgrepo-com.svg";


const WaitForSearch = ({weather}) => {
    return (
        <>
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
        </>
    );
};

export default WaitForSearch;