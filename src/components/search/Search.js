import React from "react";
import SearchForm from "./SearchForm";
import SearchWeather from "./SearchWeather";

const Search = () => {
  return (
    <div className="flex min-h-screen pt-20 flex-col items-center justify-around bg-slate-300 md:flex-row ">
      <SearchForm />
      <SearchWeather />
    </div>
  );
};

export default Search;
