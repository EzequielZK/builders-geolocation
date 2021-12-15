const INITIAL_STATE = {
  isLoading: true,
  payload: null,
};

export default function weatherReducer(state = INITIAL_STATE, action) {
  const types = {
    USER_WEATHER: {
      ...state,
      payload: action.payload,
      isLoading: action.isLoading,
    },
  };

  const response = types[action.type];

  if (response) {
    return response;
  }
  return state;
}
