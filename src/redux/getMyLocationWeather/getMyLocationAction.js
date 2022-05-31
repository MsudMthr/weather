import axios from "axios";

const API_KEY = "d5b935b444e9f6d415390bbc706dce89";

const fetchMyLocationWeatherRequest = () => {
  return { type: "MY_LOCATION_WEATHER_REQUEST" };
};
const fetchMyLocationWeatherSuccess = (data) => {
  return { type: "MY_LOCATION_WEATHER_SUCCESS", payload: data };
};
const fetchMyLocationWeatherFailure = (error) => {
  return { type: "MY_LOCATION_WEATHER_FAILURE", payload: error };
};

const fetchMyLocationWeather = (lon, lat) => {
  return (dispatch) => {
    dispatch(fetchMyLocationWeatherRequest());
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        const aboutWeather = response.data;
        dispatch(fetchMyLocationWeatherSuccess(aboutWeather));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchMyLocationWeatherFailure(errMsg));
      });
  };
};

export default fetchMyLocationWeather;
