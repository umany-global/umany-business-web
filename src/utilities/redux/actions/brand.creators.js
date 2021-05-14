import BrandClient from "@api/clients/brands";

// CONSTANTS
import {
  GET_BRAND_TRANSACTION,
  GET_BRAND_ORDERS,
  HANDLE_MESSAGE,
  GET_BRAND_LIST,
  GET_BRAND,
} from "@/utilities/redux/actions/constants";

export const getBrandTransaction = (transactionId) => {
  console.log("transactionId", transactionId);
  return async (dispatch) => {
    try {
      const response = await BrandClient.getBrandTransaction(transactionId);
      console.log("getBrandTransaction response", response);
      dispatch({
        type: GET_BRAND_TRANSACTION,
        payload: response.data,
      });
    } catch (error) {
      // // console.log("error :>> ", error);
    }
  };
};

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

export const getTransactionList = (brandId) => {
  return async (dispatch) => {
    try {
      const response = await BrandClient.getTransactionList(brandId);
      dispatch({
        type: GET_BRAND_ORDERS,
        list: response.data.data,
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
};

export const getBrand = (params) => {
  return async (dispatch) => {
    try {
      const response = await BrandClient.getBrands(params);
      dispatch({
        type: GET_BRAND,
        list: response.data.data,
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
