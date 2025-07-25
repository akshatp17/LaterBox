import api from "./axiosInstance";

const getAllUsers = async () => {
	try {
		const response = await api.get("/user/all");
		return response.data;
	} catch (error) {
		console.error("Error fetching all users:", error);
		throw error;
	}
};

export { getAllUsers };
