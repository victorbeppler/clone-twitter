import axios from "axios";

const baseBack = axios.create({
    baseURL: "http://localhost:3006/api/twitter",
});

export default baseBack;