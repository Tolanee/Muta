import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { FilledButton } from "../../../components/ui/FilledButton";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Link, router } from "expo-router";
import CustomInput from "../../../components/ui/CustomInput";
import CustomHeader from "../../../components/ui/CustomHeader";
import SignUpBtn from "@/components/ui/SignUpBtn";
import { Google, Facebook } from "../../../assets/icons/Icons";
import { z } from "zod";

const signUpSchema = z.object({
	email: z.string().email("Invalid email address"),
});
const SignIn = () => {
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
		const validatedData = signUpSchema.parse(formData);
		router.push({
			pathname: "/sign-in/enterPassword",
			params: { email: formData.email },
		});
	};
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<CustomHeader />
				<GeneralHeaderText
					title="Log in to Muta"
					position="center"
				/>
				<SignUpBtn
					image={<Google />}
					title="Sign Up with Google"
					href={() => {
						console.log("====================================");
						console.log("google");
						console.log("====================================");
					}}
				/>
				<SignUpBtn
					image={<Facebook />}
					title="Sign Up with Facebook"
					href={() => {
						console.log("====================================");
						console.log("facebook");
						console.log("====================================");
					}}
				/>
				<CustomInput
					placeholder="Enter email address"
					type="email"
					label="Email"
					value={formData.email}
					onChange={(value) => handleChange("email", value)}
					error={submitted ? errors.email : undefined}
				/>
				<View>
					<FilledButton
						title="SIGN IN WITH EMAIL"
						href="sign-in/enterPassword"
					/>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ color: "#FFF" }}>
						Don’t have a Muta account?
						<Link href="sign-up">
							<Text style={{ color: "#4CA6A8" }}> Sign Up</Text>
						</Link>
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default SignIn;
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1E26",
	},
});
