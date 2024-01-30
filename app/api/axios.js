import axios from "axios";
//Je paramètre ma base url avec axios
console.log(process.env.EXPO_PUBLIC_API_URL);
const Axios = axios.create({
  // baseURL: "http://192.168.1.48:5000/api",
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

export default Axios;
