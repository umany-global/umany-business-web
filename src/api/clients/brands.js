import API from "@api";

/**
 * Send certificate taxes by brand ID
 * @param {Object} data
 */
export const taxes = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "POST",
        url: `/brands/${data.id}/certificates/taxes/`,
        headers: {
          "Content-Type": "image/jpeg",
        },
        data: data.file,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

/**
 * Send certificate taxes by brand ID
 * @param {Object} data
 */
export const editBrand = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let formData = new FormData();
      let keys = Object.keys(data);
      keys.map((key) => formData.append(key, data[key]));
      const response = await API({
        method: "PATCH",
        url: `/accounts/brands/${id}/`,
        headers: {
          "Content-Type": "image/jpeg",
        },
        data: formData,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

/**
 * Get Brand List with params and pagination
 * @param {Object} params
 */
export const getValidationChecklist = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "POST",
        url: `/brands/${id}/verify/`,
        data: { simulate: true },
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};
/**
 * Get Brand List with params and pagination
 * @param {Object} params
 */
export const getBrandList = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "GET",
        url: "/accounts/brands/",
        data,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

/**
 * Get Bramds filtering by Search
 * @param {Object({search})} params
 */
export const getBrands = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "GET",
        url: "/brands",
        params,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

const client = {
  taxes,
  editBrand,
  getValidationChecklist,
  getBrandList,
  getBrands,
};
export default client;
