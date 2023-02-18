import axios from "axios";

// devlopment baseURL
// const baseURL = axios.create({ baseURL: "http://127.0.0.1:8000" });

// production baseURL
const baseURL = axios.create({
  baseURL: "https://ecommerce-api-p9x7.onrender.com",
});

export default baseURL;
