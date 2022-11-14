import { GET_PRODUCT, ADD_TO_CART, PRODUCT_TYPE } from "./skin.types";

const initialState = {
  skinData: [],
  originalData: [],
  loading: true,
};
const skinReducer = (state = initialState, { type, payload }) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        skinData: payload,
        originalData: payload,
        loading: false,
      };
    }
    case PRODUCT_TYPE: {
      return {
        ...state,
        skinData: payload,
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

export default skinReducer;
