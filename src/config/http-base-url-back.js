import axios from "axios";

const baseBack = axios.create({
    baseURL: "http://44.203.137.220:3006/api/twitter",
});

export default baseBack;