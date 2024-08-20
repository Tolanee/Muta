import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface Button2Props {
	title: string;
	href: string;
}

const Button2 = ({ title, href }: Button2Props) => {
	return (
		<View style={{ margin: 17 }}>
			<Link
				href={href}
				asChild
			>
				<TouchableOpacity style={styles.container}>
					<Text style={styles.title}>{title}</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default Button2;
export const styles = StyleSheet.create({
	container: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		borderWidth: 2,
		borderColor: "#4CA6A8",
	},
	title: {
		color: "#fff",
		fontSize: 14,
		fontFamily: "Axiforma",
		fontWeight: 700,
	},
});
