import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import React, { useState } from "react";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import CustomInput from "../../../components/ui/CustomInput";
import { Link, router, useLocalSearchParams } from "expo-router";

import { z } from "zod";
import apiClient from "@/api/apiClient";
import CustomHeader from "@/components/ui/CustomHeader";
import { postData } from "@/api/requests";
import store from "@/constants/store";
import { useSelector } from "react-redux";

const signUpSchema = z.object({
	email: z.string().email("Invalid email address"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const NamePassword = () => {
	const { email } = useLocalSearchParams();
	const type = useSelector((state) => state.type);
	const language = useSelector((state) => state.language);
	const saveToken = (token) => {
		store.dispatch({ type: "SAVE_TOKEN", payload: token }); // Dispatch an action to save the token
	};

	const [formData, setFormData] = useState({
		email: email,
		firstName: "",
		lastName: "",
		password: "",
		spokenLanguage: "7d0f00aa-1028-4871-abc1-0237dff35356",
		userType: type,
		country: {
			name: "Nigeria",
			code: "NG",
			flag: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/NG.svg",
		},
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
		// Clear the error for the field as the user types
		setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
	};

	const handleSubmit = async () => {
		setSubmitted(true);
		setLoading(true);
		const validatedData = signUpSchema.parse(formData);
		// console.log("Form data is valid:", validatedData);
		postData("create-user", validatedData)
			.then((res) => {
				const token = res.token;
				saveToken(token);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error.data[0].message);
				setLoading(false);
				Alert.alert("Error", error.data[0].message);
			});
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<KeyboardAvoidingView>
					<CustomHeader />
					<GeneralHeaderText
						title="Enter name and password"
						position="flex-start"
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
						type="text"
						label="First Name"
						value={formData.firstName}
						onChange={(value) => handleChange("firstName", value)}
						error={submitted ? errors.firstName : undefined} // Show error only if form is submitted
					/>
					<CustomInput
						type="text"
						label="Last Name"
						value={formData.lastName}
						onChange={(value) => handleChange("lastName", value)}
						error={submitted ? errors.lastName : undefined} // Show error only if form is submitted
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
							<Text>{loading ? "SIGNING UP" : "SIGN UP"}</Text>
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
							Already a Muta User?
							<Link href="sign-in">
								<Text style={{ color: "#4CA6A8" }}> Log In</Text>
							</Link>
						</Text>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</View>
	);
};

export default NamePassword;

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
