import { HOTEL_LIST } from "../actions/types";
const initialState = {
  hotel_list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HOTEL_LIST:
      return {
        ...state,
        hotel_list: action.payload,
      };

    default:
      return state;
  }
}
