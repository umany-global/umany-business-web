import BrandClient from "@api/clients/brands";
import CategoryClient from "@api/clients/categories";
import ProjectClient from "@api/clients/projects";
import ReportClient from "@api/clients/reports";

// CONSTANTS
import {
  // HANDLE_MESSAGE,
  FILTER_BRAND,
  FILTER_PROJECT,
  FILTER_CATEGORY,
  FILTER_REPORT,
} from "@/utilities/redux/actions/constants";

export const filterBrand = (params) => {
  const { search } = params || {};
  return async (dispatch) => {
    try {
      const response = await BrandClient.getBrands(params);
      dispatch({
        type: FILTER_BRAND,
        list: response.data.data.filter((item) =>
          search ? item.name.match(search) : true
        ),
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};

export const filterCategory = (params) => {
  const { search } = params || {};
  return async (dispatch) => {
    try {
      const response = await CategoryClient.getCategories(params);
      dispatch({
        type: FILTER_CATEGORY,
        list: response.data.data.filter((item) =>
          search ? item.name.match(search) : true
        ),
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};

export const filterProject = (params) => {
  const { search } = params || {};
  return async (dispatch) => {
    try {
      const response = await ProjectClient.getProjects(params);
      dispatch({
        type: FILTER_PROJECT,
        list: response.data.data.filter((item) =>
          search ? item.name.match(search) : true
        ),
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};

export const filterReports = (params) => {
  const { search } = params || {};
  return async (dispatch) => {
    try {
      const response = await ReportClient.getReports(params);
      dispatch({
        type: FILTER_REPORT,
        list: response.data.data.filter((item) =>
          search ? item.name.match(search) : true
        ),
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};
