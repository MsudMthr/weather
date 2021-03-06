import React, { useEffect, useState } from "react";

import info from "../../assets/svg/info-svgrepo-com.svg";

const DetailWeather = ({ weatherDetail }) => {
  const [icon, setIcon] = useState(null);
  // console.log(weather);
  const {
    name,
    weather,
    sys: { country },
    main: { temp },
  } = weatherDetail.weather;
  console.log(weatherDetail);
  useEffect(() => {
    setIcon(
      `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
    );
  }, [weather]);
  return (
    <section className="detail-section">
      <div className="flex items-center justify-around  ">
        <div className="relative flex w-auto">
          <h1 className="capitalize">{name}</h1>
          <p className="absolute -top-2 -right-10 rounded-3xl bg-orange-500 py-0.5 px-2 text-xs font-bold ">
            {country}
          </p>
        </div>
        <h5>
          {Math.floor(temp)}
          <span>&#176;</span>
        </h5>
      </div>
      <div className="center flex-col">
        <img src={icon} alt="info" className="search-pic-weather w-40" />
        <img src={info} alt="info" className="ml-40 w-5 hover:animate-spin" />
      </div>
      <div className="flex h-20 flex-col justify-between">
        <p className="font-bold">{weather[0].description}</p>
        <p className="self-center">time</p>
      </div>
    </section>
  );
};

export default DetailWeather;
