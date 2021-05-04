import API from "@api";
import BrandClient from "@api/clients/brands";

// CONSTANTS
import {
  VALIDATE_CHECK_LIST,
  HANDLE_ERROR,
  HANDLE_MESSAGE,
  GET_BRAND_LIST,
} from "@/utilities/redux/actions/constants";

export const brandList = (params) => {
  return async (dispatch) => {
    try {
      const response = await BrandClient.getBrandList(params);
      dispatch({
        type: GET_BRAND_LIST,
        list: response.data.data,
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};

export const taxtIDCertificate = (data) => {
  let formData = new FormData();
  formData.append("file", data.file);
  return async (dispatch) => {
    try {
      const response = await BrandClient.taxes(data);
      return dispatch({
        type: VALIDATE_CHECK_LIST,
        list: response.data,
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};
export const patchBrandEdit = (id, data, section) => {
  var formData = new FormData();
  let keys = Object.keys(data);
  keys.map((key) => formData.append(key, data[key]));

  return async (dispatch) => {
    try {
      await BrandClient.editBrand(id, data);
      return dispatch({
        type: HANDLE_MESSAGE,
        payload: {
          text: `${section} set correctly`,
          open: true,
          type: "success",
        },
      });
    } catch (error) {
      console.log("error :>> ", error);
      // // console.log("error :>> ", error);
    }
  };
};

export const validCheckList = (id) => {
  return async (dispatch) => {
    try {
      const response = await API({
        method: "POST",
        url: `/brands/${id}/verify`,
        data: { simulate: true },
      });
      return dispatch({
        type: VALIDATE_CHECK_LIST,
        list: response.data,
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};
