import axios from "axios";
axios.defaults.baseURL = "https://api.example.com";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

export default instance;
