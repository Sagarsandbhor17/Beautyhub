import { GET_PRODUCT, ADD_TO_CART, PRODUCT_TYPE } from "./bath&body.type";

const initialState = {
  bathData: [],
  originalData: [],
};
const bathReducer = (state = initialState, { type, payload }) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        bathData: payload,
        originalData: payload,
      };
    }
    case PRODUCT_TYPE: {
      return {
        ...state,
        bathData: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default bathReducer;
