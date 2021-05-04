import MessageState from "@utilities/redux/states/message.state";
import {
  HANDLE_MESSAGE,
  HANDLE_ERROR,
} from "@/utilities/redux/actions/constants";

export default function msgReducer(state = MessageState, action) {
  switch (action.type) {
    case HANDLE_MESSAGE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case HANDLE_ERROR: {
      return {
        ...state,
        type: "error",
        open: true,
        text: action.message,
      };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
