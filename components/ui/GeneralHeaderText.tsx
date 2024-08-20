import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { create } from "react-test-renderer";

interface GeneralHeaderProps {
	title: string;
	position: string;
}
const GeneralHeaderText = ({ title, position }: GeneralHeaderProps) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			alignItems: position ? position : "center",
			justifyContent: position ? position : "center",
			paddingVertical: 17,
		},

		title: {
			fontSize: 24,
			color: "#fff",
			fontFamily: "Axiforma",
			fontWeight: 700,
			lineHeight: 32,
		},
	});
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default GeneralHeaderText;
