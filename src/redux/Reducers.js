const initialState = [];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item, index) => index !== action.payload);
    case "SET_ITEMS":
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
