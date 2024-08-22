import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://muta-app.fastgenapp.com/",
	// timeout: 40000,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.request.use((config) => {
	// Add token or any other data to headers
	// config.headers.Authorization = `Bearer ${token}`;
	return config;
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("API Error:", error);
		return Promise.reject(error);
	},
);

export default apiClient;
