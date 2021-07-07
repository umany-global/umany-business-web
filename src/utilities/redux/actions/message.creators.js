// CONSTANTS
import { HANDLE_MESSAGE } from "@/utilities/redux/actions/constants";

export const handleMessage = (payload) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: HANDLE_MESSAGE,
        payload,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
};
