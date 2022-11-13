import { GET_PRODUCT, ADD_TO_CART } from "./skin.types";

const initialState = {
  skinData: [],
  page: 1,
};
const skinReducer = (state = initialState, { type, payload }) => {
  // console.log(totalPages);
  switch (type) {
    case GET_PRODUCT: {
      return {
        ...state,
        skinData: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
       skinData:payload
      };
    }

    default: {
      return state;
    }
  }
};

export default skinReducer;
