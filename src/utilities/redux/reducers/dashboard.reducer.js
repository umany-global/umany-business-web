import DashState from "@utilities/redux/states/dashboard.state";
// Use the initialState as a default value
import {
  FILTER_BRAND,
  FILTER_PROJECT,
  FILTER_CATEGORY,
  FILTER_REPORT,
} from "@/utilities/redux/actions/constants";

export default function appReducer(state = DashState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case FILTER_REPORT: {
      return {
        ...state,
        home: { ...state.home, reports: action.list },
      };
    }
    case FILTER_BRAND: {
      return {
        ...state,
        home: { ...state.home, brand: action.list },
      };
    }
    case FILTER_PROJECT: {
      return {
        ...state,
        home: { ...state.home, project: action.list },
      };
    }
    case FILTER_CATEGORY: {
      return {
        ...state,
        home: { ...state.home, category: action.list },
      };
    }

    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
