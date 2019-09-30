import axios from "axios";

const api = axios.create({ baseURL:"https://www.reddit.com/", responseType: "json" });

export default api;