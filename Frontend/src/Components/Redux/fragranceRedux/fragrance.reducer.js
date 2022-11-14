import { GET_PRODUCT, ADD_TO_CART, PRODUCT_TYPE } from "./fragrance.type";

const initialState = {
  fragranceData: [],
  originalData: [],
};
const fragranceReducer = (state = initialState, { type, payload }) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        fragranceData: payload,
        originalData: payload,
      };
    }
    case PRODUCT_TYPE: {
      return {
        ...state,
        fragranceData: payload,
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

export default fragranceReducer;
