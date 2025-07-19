const checkAuthentication = () => {
	const token = localStorage.getItem("userToken");
	return !!token; // Returns true if token exists, false otherwise
};

export default checkAuthentication;
