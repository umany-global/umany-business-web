import API from "@api";

/**
 * Get Projects filtering by Search
 * @param {Object({search})} params
 */
export const getProjects = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await API({
        method: "GET",
        url: "/projects",
        params,
      });
      return resolve(response);
    } catch (error) {
      console.log("error :>> ", error);
      return reject(error);
    }
  });
};

const client = { getProjects };
export default client;
