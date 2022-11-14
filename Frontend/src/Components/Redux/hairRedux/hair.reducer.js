import { GET_PRODUCT, ADD_TO_CART, PRODUCT_TYPE } from "./hair.type";

const initialState = {
  hairData: [],
  originalData: [],
  status: true
};
const hairReducer = (state = initialState, { type, payload }) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        hairData: payload,
        originalData: payload,
        status: false
      };
    }
    case PRODUCT_TYPE: {
      return {
        ...state,
        hairData: payload,
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

export default hairReducer;
