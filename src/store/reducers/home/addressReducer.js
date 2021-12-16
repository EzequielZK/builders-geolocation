const INITIAL_STATE = {
  isLoading: true,
  city: null,
  state: null,
};

export default function addressReducer(state = INITIAL_STATE, action) {
  const types = {
    USER_ADDRESS: {
      ...state,
      city: action.payload?.name,
      state: action.payload?.state,
      isLoading: action.isLoading,
      lat: action.payload?.lat,
      lng: action.payload?.lon,
    },
  };

  const response = types[action.type];

  if (response) {
    return response;
  }
  return state;
}
