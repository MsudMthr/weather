import { combineReducers } from "redux";
import fetWeatherReducer from "./getWeather/getWeatherReducer";

const rootReducer = combineReducers({
  searchCity: fetWeatherReducer,
});

export default rootReducer;
