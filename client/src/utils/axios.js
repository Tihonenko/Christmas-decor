import axios from "axios";

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL + "/api",
});

$host.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem("token");

	return config;
});

export { $host };
