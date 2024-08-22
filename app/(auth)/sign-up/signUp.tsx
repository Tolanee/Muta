import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { FilledButton } from "../../../components/ui/FilledButton";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Link, router } from "expo-router";
import CustomInput from "../../../components/ui/CustomInput";
import CustomHeader from "../../../components/ui/CustomHeader";
import SignUpBtn from "@/components/ui/SignUpBtn";
import { Google, Facebook } from "../../../assets/icons/Icons";

const SignUp = () => {
	const goToGoogle = () => {
		router.push("google.com");
	};
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<CustomHeader />
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
				/>
				<View>
					<FilledButton
						title="SIGN UP WITH EMAIL"
						href="sign-up"
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
						<Link href="sign-in">
							<Text style={{ color: "#4CA6A8" }}> Log In</Text>
						</Link>
					</Text>
				</View>
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
});
