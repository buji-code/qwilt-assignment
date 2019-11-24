const initialState = {
  title: undefined,
  percented: undefined,
  total: undefined
};

const DetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_DETAILS":
      return action.data;
    default:
      return state;
  }
};

export default DetailsReducer;
