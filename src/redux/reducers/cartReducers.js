const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state;
    case 'REMOVE_FROM_CART':
      return state;
    default:
      return state;
  }
};

export default cartReducer;
