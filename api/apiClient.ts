import store from "@/constants/store";
import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://muta-app.fastgenapp.com/",
	// timeout: 40000,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.request.use((config) => {
	const token = store.getState().token;
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("API Error:", error.response.data);
		return Promise.reject(error.response.data);
	},
);

export default apiClient;
