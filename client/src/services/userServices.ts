import api from "./axiosInstance";

const getCurrentUser = async () => {
	try {
		const response = await api.get("/user/profile");
		return response.data;
	} catch (error) {
		console.error("Error fetching current user:", error);
		throw error;
	}
};

const getUserProfile = async (userId: string) => {
	try {
		const response = await api.get(`/user/profile/${userId}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching user profile:", error);
		throw error;
	}
};

const getUserByName = async (username: string) => {
	try {
		const response = await api.get(`/user/profile/name/${username}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching user by name:", error);
		throw error;
	}
};

const getAllUsers = async () => {
	try {
		const response = await api.get("/user/all");
		return response.data;
	} catch (error) {
		console.error("Error fetching all users:", error);
		throw error;
	}
};

export { getCurrentUser, getUserProfile, getUserByName, getAllUsers };
