import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

import React, { useEffect, useRef } from "react";
import FilledButton from "@/components/ui/FilledButton";
import Button2 from "../components/ui/Button2";
import { router } from "expo-router";
import { isLoggedIn } from "@/constants/utils";
import { current } from "@reduxjs/toolkit";

const Welcome = () => {
	const isMountedRef = useRef(false);
	useEffect(() => {
		if (isMountedRef.current && isLoggedIn) {
			router.push("(tabs)");
		}
	}, [isLoggedIn]);

	useEffect(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Image
				source={require("@/assets/images/designs/doodles.png")}
				style={styles.doodle}
			/>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View style={{ paddingHorizontal: 17 }}>
						<Text
							style={{
								color: "#fff",
								fontFamily: "Axiforma",
								fontSize: 18,
								lineHeight: 24,
							}}
						>
							Learn languages from
						</Text>
						<Text
							style={{
								color: "#fff",
								fontFamily: "Magica",
								fontSize: 64,
							}}
						>
							Africa
						</Text>
						<Text
							style={{
								color: "#fff",
								fontFamily: "Axiforma",
								fontSize: 18,
								lineHeight: 24,
							}}
						>
							Muta helps you learn African languages in the easiest way
						</Text>
					</View>

					<View>
						<FilledButton
							title="GET STARTED"
							href="sign-up"
						/>
					</View>
					<View>
						<Button2
							title="LOG IN"
							href="sign-in"
						/>
					</View>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Text style={{ color: "#FFF" }}>
						By continuing on the app, you agree to Mutas{" "}
						<Text style={{ color: "#4CA6A8" }}>Terms of service </Text> and
						<Text style={{ color: "#4CA6A8" }}>Terms of service </Text>
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Welcome;
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1E26",
	},

	doodle: {
		width: "100%",
	},
});
