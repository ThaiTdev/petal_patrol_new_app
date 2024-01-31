import axios from "axios";
//Je paramètre ma base url avec axios
console.log("Base Url:" + process.env.EXPO_PUBLIC_API_URL);
const Axios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

export default Axios;
