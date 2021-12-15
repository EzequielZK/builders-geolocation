const INITIAL_STATE = {
  isLoading: true,
  address: null,
};

export default function addressReducer(state = INITIAL_STATE, action) {
  const types = {
    ADDRESS: {
      ...state,
      address: action.payload,
      isLoading: action.isLoading,
    },
  };

  const response = types[action.type];

  if (response) {
    return response;
  }
  return state;
}
