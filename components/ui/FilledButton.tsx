import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import type {} from "react-native-gesture-handler";
import { create } from "react-test-renderer";
import { Link } from "expo-router";

interface FilledButtonProps {
	title: string;
	href: string;
}

export const FilledButton = ({ title, href }: FilledButtonProps) => {
	return (
		<View style={{ margin: 17 }}>
			<Link
				href={href}
				asChild
			>
				<TouchableOpacity style={styles.container}>
					<Text>{title}</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default FilledButton;
export const styles = StyleSheet.create({
	container: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		width: 342,
		backgroundColor: "#4CA6A8",
	},
});
