import axios from "axios";

const API_KEY = "d5b935b444e9f6d415390bbc706dce89";

const fetchWeatherRequest = () => {
  return { type: "WEATHER_REQUEST" };
};
const fetchWeatherSuccess = (data) => {
  return { type: "WEATHER_SUCCESS", payload: data };
};
const fetchWeatherFailure = (error) => {
  return { type: "WEATHER_FAILURE", payload: error };
};

const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        const aboutWeather = response.data;
        dispatch(fetchWeatherSuccess(aboutWeather));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchWeatherFailure(errMsg));
      });
  };
};

export default fetchWeather;
