import API from "@api";

/**
 * Get Graphic Reports filtering by Params
 * @param {Object({brand, project_cat, city, project})} params
 */
export const getReports = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "GET",
        url: "/reports/transactions/daily",
        params,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

const client = { getReports };
export default client;
