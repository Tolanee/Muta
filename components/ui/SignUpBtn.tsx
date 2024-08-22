import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface SignUpBtnProps {
	title: string;
	href: () => void;
	image: any;
}

export const SignUpBtn = ({ title, href, image }: SignUpBtnProps) => {
	return (
		<View style={{ margin: 17 }}>
			<Link
				href={href}
				asChild
			>
				<TouchableOpacity style={styles.container}>
					<View style={styles.image}>{image}</View>
					<Text style={styles.text}>{title}</Text>
				</TouchableOpacity>
			</Link>
		</View>
	);
};

export default SignUpBtn;
export const styles = StyleSheet.create({
	container: {
		padding: 17,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 14,
		fontFamily: "Axiforma",
		fontWeight: 700,
	},
	image: {
		paddingHorizontal: 15,
	},
});
