import BrandState from "@utilities/redux/states/brand.state";
import {
  VALIDATE_CHECK_LIST,
  GET_BRAND_LIST,
} from "@/utilities/redux/actions/constants";

export default function brandReducer(state = BrandState, action) {
  switch (action.type) {
    case VALIDATE_CHECK_LIST: {
      return {
        ...state,
        validate: { checklist: action.list },
      };
    }
    case GET_BRAND_LIST: {
      return {
        ...state,
        list: action.list,
      };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
