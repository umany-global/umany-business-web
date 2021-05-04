import axios from "axios";
import interceptor from "@api/interceptors";
const { REACT_APP_ENDPOINT } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

interceptor(instance);
export default instance;
