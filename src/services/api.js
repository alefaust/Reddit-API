import axios from "axios";

const api = axios.create({ baseURL:"https://www.reddit.com/r/subreddit/", responseType: "json" });

export default api;