import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FilledButton } from "../../../components/ui/FilledButton";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Link } from "expo-router";
import CustomInput from "../../../components/ui/CustomInput";

const SignUp = () => {
	return (
		<View style={styles.container}>
			<GeneralHeaderText title="Sign up and start learning right away!" position="center" />
			<CustomInput
				placeholder="Enter email address"
				type="email"
				label="Email"
			/>
			<View>
				<FilledButton
					title="SIGN UP WITH EMAIL"
					href="/sign-up/myLanguage"
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
					Already a Muta User?
					<Link href="/sign-in">
						<Text style={{ color: "#4CA6A8" }}> Log In</Text>
					</Link>
				</Text>
			</View>
		</View>
	);
};

export default SignUp;
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1E26",
	},
});
