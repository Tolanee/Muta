import { Stack } from "expo-router";
import ArrowLeft from "@/assets/images/designs/Back.svg";
import React from "react";

export default function AuthLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f4511e",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "light",
				},
			}}
		>
			<Stack.Screen
				name="sign-in"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="sign-up"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
