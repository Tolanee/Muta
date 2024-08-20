import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface GeneralHeaderProps {
	title: string;
}
const GeneralHeaderText = ({ title }: GeneralHeaderProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default GeneralHeaderText;

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 17,
		lineHeight: 40,
	},

	title: {
		fontSize: 24,
		color: "#fff",
		fontFamily: "Axiforma",
		fontWeight: 700,
	},
});
