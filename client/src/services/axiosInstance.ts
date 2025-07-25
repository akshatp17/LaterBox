import axios, { type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000", // Adjust the base URL as needed
});

// Request interceptor to automatically add token from localStorage
api.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const userToken = localStorage.getItem("userToken");

		if (userToken) {
			if (!config.headers) {
				config.headers = {} as any;
			}
			config.headers.Authorization = `Bearer ${userToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
