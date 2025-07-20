import api from "./axiosInstance";

interface UserData {
	email: string;
	name: string;
	username: string;
	password: string;
	is_google: boolean;
	profile_picture?: string;
}

interface LoginCredentials {
	email: string;
	password: string;
	is_google: boolean;
}

const registerUser = async (userData: UserData) => {
	try {
		const response = await api.post("/auth/register", userData);
		return response.data;
	} catch (error) {
		console.error("Error registering user:", error);
	}
};

const loginUser = async (credentials: LoginCredentials) => {
	try {
		const response = await api.post("/auth/login", credentials);
		return response.data;
	} catch (error) {
		console.error("Error logging in user:", error);
		throw error; // Re-throw the error for further handling if needed
	}
};

export { registerUser, loginUser };
