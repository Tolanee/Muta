import apiClient from "./apiClient";

export const fetchData = async (url) => {
	try {
		const response = await apiClient.get(url);
		console.log("====================================");
		console.log(response.data );
		console.log("====================================");
		return response.data;
	} catch (error) {
		throw error;
	}
};
export const postData = async (url, data) => {
	try {
		const response = await apiClient.post(url, data);
		return response.data;
	} catch (error) {
		throw error;
	}
};
