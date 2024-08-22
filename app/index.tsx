import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

import React, { type FC } from "react";
import FilledButton from "@/components/ui/FilledButton";
import Button2 from "../components/ui/Button2";
import { Link } from "expo-router";

const Welcome = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("@/assets/images/designs/doodles.png")}
				style={styles.doodle}
			/>

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
