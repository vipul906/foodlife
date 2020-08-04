import { HOTEL_LIST } from "./types";

export const getlist = (data) => (dispatch) => {
  dispatch({
    type: HOTEL_LIST,
    payload: data,
  });
};
