import BrandState from "@utilities/redux/states/brand.state";
import {
  GET_BRAND_TRANSACTION,
  GET_BRAND_ORDERS,
  GET_BRAND,
} from "@/utilities/redux/actions/constants";

export default function brandReducer(state = BrandState, action) {
  switch (action.type) {
    case GET_BRAND_TRANSACTION: {
      return {
        ...state,
        transaction: action.payload,
      };
    }
    case GET_BRAND_ORDERS: {
      return {
        ...state,
        list: action.list,
      };
    }
    case GET_BRAND: {
      return {
        ...state,
        current: action.list[0],
      };
    }
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
