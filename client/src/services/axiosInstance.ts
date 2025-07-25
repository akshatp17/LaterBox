import axios, { type InternalAxiosRequestConfig, AxiosError } from "axios";

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

// Response interceptor to handle 401 errors
api.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		if (axios.isAxiosError(error) && error.response) {
			const status = error.response.status;

			// Handle 401 unauthorized errors
			if (status === 401) {
				console.warn(
					"Unauthorized request. Redirecting to login page."
				);
				// Clear the invalid token from localStorage
				localStorage.removeItem("userToken");
				// Redirect to login page
				window.location.href = "/login";
			}
		}

		return Promise.reject(error);
	}
);

export default api;
