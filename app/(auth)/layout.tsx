import { Stack } from "expo-router";
import ArrowLeft from "@/assets/images/designs/Back.svg";
import SignIn from "./sign-in";
import SignUp from "./sign-up/signUp";
import React from "react";

export default function AuthLayout() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="sign-in"
				options={{
					headerShown: false,
				}}
				component={SignIn}
			/>
			<Stack.Screen
				name="sign-up"
				options={{
					headerShown: false,
					headerBackground: "#ED2939",
				}}
				component={SignUp}
			/>
		</Stack.Navigator>
	);
}
