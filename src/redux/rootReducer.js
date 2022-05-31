import { combineReducers } from "redux";
import fetWeatherReducer from "./getWeather/getWeatherReducer";
import fetMyLocationWeatherReducer from "./getMyLocationWeather/getMyLocationReducer";

const rootReducer = combineReducers({
  searchCity: fetWeatherReducer,
  myLocationWeather: fetMyLocationWeatherReducer,
});

export default rootReducer;
