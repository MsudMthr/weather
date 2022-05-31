const initialState = {
  weather: [],
  isLoading: true,
  isSearching: false,
  error: "",
};

const fetMyLocationWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MY_LOCATION_WEATHER_REQUEST":
      return {
        isLoading: true,
        ...state,
        isSearching: true,
      };
    case "MY_LOCATION_WEATHER_SUCCESS":
      return {
        isLoading: false,
        weather: action.payload,
        isSearching: false,
      };
    case "MY_LOCATION_WEATHER_FAILURE":
      return {
        isLoading: false,
        error: action.payload,
        isSearching: false,
      };

    default:
      return state;
  }
};

export default fetMyLocationWeatherReducer;
