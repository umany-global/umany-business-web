import API from "@api";

/**
 * Get Categories filtering by Search
 * @param {Object({search})} params
 */
export const getCategories = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "GET",
        url: "/categories",
        params,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

const client = { getCategories };
export default client;
