import api from "../services/axiosInstance";

const checkAuthentication = async () => {
	const token = localStorage.getItem("userToken");
	if (!token) {
		return { success: false, message: "No token found" };
	}

	try {
		// The Authorization header is automatically added by the interceptor
		const res = await api.get("/auth/check_auth");
		return res.data;
	} catch (error: any) {
		console.error("Authentication check failed:", error);

		// Handle HTTP error responses (401, 403, etc.)
		if (error.response && error.response.data) {
			// Return the error response data which contains success: false
			return error.response.data;
		}

		// For network errors or other issues, return false
		return { success: false, message: "Authentication failed" };
	}
};

export default checkAuthentication;
