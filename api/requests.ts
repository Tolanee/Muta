import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import apiClient from "./apiClient";

export const fetchData = async (url) => {
	try {
		const response = await apiClient.get(url);
		return response.data; // Return the entire response object
	} catch (error) {
		throw error; // Re-throw the error to handle it in the caller
	}
};
