import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	SafeAreaView,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import React, { useState } from "react";
import CustomHeader from "@/components/ui/CustomHeader";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import CustomInput from "@/components/ui/CustomInput";
import { Link, router, useLocalSearchParams } from "expo-router";
import apiClient from "@/api/apiClient";
import { z, ZodError } from "zod";
import { postData } from "@/api/requests";
import store from "@/constants/store";
import { parse } from "react-native-svg";

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
	const [loading, setLoading] = useState(false);

	const handleChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
		setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
	};

	// const handleSubmit = async () => {
	// 	setSubmitted(true);
	// 	setLoading(true);
	// 	const validatedData = signInSchema.parse(formData);

	// 	postData("login", validatedData)
	// 		.then((res) => {
	// 			const token = res.token;
	// 			saveToken(token);
	// 			setLoading(false);
	// 			router.push("(tabs)");
	// 		})
	// 		.catch((error) => {
	// 			setLoading(false);
	// 			if (error instanceof ZodError) {
	// 				const errorMessage = error.issues[0].message;
	// 				Alert.alert("Validation Error", errorMessage);
	// 			} else {
	// 				Alert.alert("Error", error.message);
	// 			}
	// 		});
	// };

	const handleSubmit = async () => {
		setSubmitted(true);
		setLoading(true);

		const result = signInSchema.safeParse(formData);

		if (!result.success) {
			// If the input doesn't meet the schema requirements, show errors
			const errors = result.error.issues.reduce((acc, issue) => {
				acc[issue.path[0]] = issue.message;
				return acc;
			}, {});

			setErrors(errors);
		} else {
			const validatedData = result.data;
			console.log("Form data is valid:", validatedData);
			postData("login", validatedData)
				.then((res) => {
					const token = res.token;
					saveToken(token);
					setLoading(false);
					router.push("(tabs)");
				})
				.catch((error) => {
					console.log(error.data[0].message);
					setLoading(false);
					Alert.alert("Error", error.data[0].message);
				});
		}
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<KeyboardAvoidingView>
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
						error={submitted ? errors.email : undefined} 
					/>

					<CustomInput
						type="password"
						label="Password"
						value={formData.password}
						onChange={(value) => handleChange("password", value)}
						error={submitted ? errors.password : undefined} 
					/>

					<View style={{ margin: 17 }}>
						<TouchableOpacity
							style={styles.button}
							onPress={handleSubmit}
						>
							<Text>{loading ? "SIGNING IN ..." : "SIGN IN"}</Text>
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
				</KeyboardAvoidingView>
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
