const initialState = {
  weather: [],
  isLoading: true,
  isSearching: false,
  error: "",
};

const fetWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_REQUEST":
      return {
        isLoading: true,
        isSearching: true,
      };
    case "WEATHER_SUCCESS":
      return {
        isLoading: false,
        weather: action.payload,
        isSearching: false,
        
      };
    case "WEATHER_FAILURE":
      return {
        isLoading: false,
        error: action.payload,
        isSearching: false,
        ...state,
      };

    default:
      return state;
  }
};

export default fetWeatherReducer;
