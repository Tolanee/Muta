import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FilledButton } from "../../../components/ui/FilledButton";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Link, router } from "expo-router";
import CustomInput from "../../../components/ui/CustomInput";
import CustomHeader from "../../../components/ui/CustomHeader";
import SignUpBtn from "@/components/ui/SignUpBtn";
import { Google, Facebook } from "../../../assets/icons/Icons";
import { z } from "zod";
import { Alert } from "react-native";

const signUpSchema = z.object({
	email: z.string().email("Invalid email address"),
});
const SignUp = () => {
	const goToGoogle = () => {
		router.push("google.com");
	};
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
	});

	const handleChange = (field, value) => {
		setFormData((prevData) => ({ ...prevData, [field]: value }));
		// Clear the error for the field as the user types
		setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
	};

	const handleSubmit = () => {
		setSubmitted(true);

		const result = signUpSchema.safeParse(formData);

		if (!result.success) {
			// If the input doesn't meet the schema requirements, show errors
			const errors = result.error.issues.reduce((acc, issue) => {
				acc[issue.path[0]] = issue.message;
				return acc;
			}, {});

			setErrors(errors);
		} else {
			const validatedData = result.data;
			router.push({
				pathname: "/sign-up/namePassword",
				params: { email: formData.email },
			});
		}
	};

	const alertEmail = () => {
		Alert.alert(
			"Input Your Email",
			"Kindly Input your email before you proceed",
			[{ text: "OK", onPress: () => console.log("OK Pressed") }],
			{ cancelable: false },
		);
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<KeyboardAvoidingView>
					<View style={{ padding: 17 }}>
						<CustomHeader />
					</View>

					<GeneralHeaderText
						title="Sign up and start learning right away!"
						position="center"
					/>
					<SignUpBtn
						image={<Google />}
						title="Sign Up with Google"
						href={() => goToGoogle}
					/>
					<SignUpBtn
						image={<Facebook />}
						title="Sign Up with Facebook"
						href={() => goToFacebook} // Change goToGoogle to goToFacebook
					/>
					<CustomInput
						placeholder="Enter email address"
						type="email"
						label="Email"
						value={formData.email}
						onChange={(value) => handleChange("email", value)}
						error={submitted ? errors.email : undefined}
					/>

					<View style={{ margin: 17 }}>
						<TouchableOpacity
							style={formData.email ? styles.button : styles.buttonDisabled}
							onPress={formData.email ? handleSubmit : alertEmail}
						>
							<Text>SIGN UP WITH EMAIL</Text>
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

export default SignUp;
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
	buttonDisabled: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#ABB3C7",
	},
});
