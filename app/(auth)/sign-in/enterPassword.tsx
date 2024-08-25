import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "@/components/ui/CustomHeader";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import CustomInput from "@/components/ui/CustomInput";
import { Link, router, useLocalSearchParams } from "expo-router";
import apiClient from "@/api/apiClient";
import { z } from "zod";
import { postData } from "@/api/requests";
import store from "@/constants/store";

// {"email": "addie@a.com",
// "password": "password"}

const saveToken = (token) => {
	store.dispatch({ type: "SAVE_TOKEN", payload: token }); // Dispatch an action to save the token
};
const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const enterPassword = () => {
	const { email } = useLocalSearchParams();

	const [formData, setFormData] = useState({
		email: email,
		password: "",
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
		// Clear the error for the field as the user types
		setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
	};

	const handleSubmit = async () => {
		setSubmitted(true); // Mark the form as submitted
		const validatedData = signInSchema.parse(formData);
		// console.log("Form data is valid:", validatedData);
		postData("login", validatedData).then((res) => {
			const token = res.token;
			saveToken(token);
			// console.log(token);
			router.push("(tabs)");
		});
		// try {
		// 	const validatedData = signInSchema.parse(formData);
		// 	console.log("Form data is valid:", validatedData);
		// 	const response = await apiClient.post("login", validatedData);
		// 	console.log("API response:", response.data);
		// 	router.push("(tabs)");
		// } catch (error) {
		// 	if (error instanceof z.ZodError) {
		// 		const formattedErrors = error.issues.reduce((acc, curr) => {
		// 			acc[curr.path[0]] = curr.message;
		// 			return acc;
		// 		}, {});
		// 		setErrors(formattedErrors);
		// 		console.error("Validation failed:", formattedErrors);
		// 	} else {
		// 		console.error("API call failed:", error);
		// 	}
		// }
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<CustomHeader />
				<GeneralHeaderText
					title="Enter name and password"
					position="center"
				/>
				<CustomInput
					placeholder=""
					type="email"
					label="Email"
					value={formData.email}
					onChange={(value) => handleChange("email", value)}
					error={submitted ? errors.email : undefined} // Show error only if form is submitted
				/>

				<CustomInput
					type="password"
					label="Password"
					value={formData.password}
					onChange={(value) => handleChange("password", value)}
					error={submitted ? errors.password : undefined} // Show error only if form is submitted
				/>

				<View style={{ margin: 17 }}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleSubmit}
					>
						<Text>SIGN IN</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ color: "#FFF" }}>
						Don't have an account?
						<Link href="sign-up">
							<Text style={{ color: "#4CA6A8" }}> Sign Up</Text>
						</Link>
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default enterPassword;
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1E26",
	},
	button: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#4CA6A8",
	},
});
