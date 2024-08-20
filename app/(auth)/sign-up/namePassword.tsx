import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import CustomInput from "../../../components/ui/CustomInput";
import { Link, router } from "expo-router";

import { z } from "zod";
import apiClient from "@/api/apiClient";
import  CustomHeader  from "@/components/ui/CustomHeader";

// Define the schema for the form data
const signUpSchema = z.object({
	email: z.string().email("Invalid email address"),
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const NamePassword = () => {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		lastName: "",
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

		try {
			// Validate form data
			const validatedData = signUpSchema.parse(formData);
			console.log("Form data is valid:", validatedData);
			router.push("(tabs)");
			// Make the API call
			const response = await apiClient.post("create-user", validatedData);
			console.log("API response:", response.data);
		} catch (error) {
			if (error instanceof z.ZodError) {
				const formattedErrors = error.issues.reduce((acc, curr) => {
					acc[curr.path[0]] = curr.message;
					return acc;
				}, {});
				setErrors(formattedErrors);
				console.error("Validation failed:", formattedErrors);
			} else {
				console.error("API call failed:", error);
			}
		}
	};

	return (
		<View style={styles.container}>
		<CustomHeader />
			<GeneralHeaderText title="Enter name and password" position="center"/>
			<CustomInput
				placeholder="Enter email address"
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
					<Text>SIGN UP</Text>
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
					<Link href="/sign-in">
						<Text style={{ color: "#4CA6A8" }}> Log In</Text>
					</Link>
				</Text>
			</View>
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
		width: 342,
		backgroundColor: "#4CA6A8",
	},
});
