import React from "react";

import weatherGif from "../../assets/weather-gif.gif";

const Banner = () => {
  return (
    <main className="relative flex h-screen flex-col items-center  justify-center bg-slate-300 sm:flex-row sm:justify-around">
      <section className="flex w-64 flex-col justify-between pb-7 pt-14 text-center sm:text-left ">
        <h1 className="text-4xl sm:text-7xl shadow-tictoc">
          Current <span className="pl-8 ">Weather</span>
        </h1>
        <p className="my-2 font-serif opacity-75 capitalize tracking-tight ">
          You can be informed of the weather in your city and the city you want
        </p>
        <button className="bg-red-400 w-1/2 self-center rounded py-2 px-3 font-medium">Get Started</button>
      </section>
      <section className="container-Banner-image  center">
        <div className="banner-image w-44 sm:w-64 ">
          <img src={weatherGif} alt="weather" />
        </div>
      </section>
    </main>
  );
};

export default Banner;
