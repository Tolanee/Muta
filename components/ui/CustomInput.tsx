import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { FormSchema } from "@/constants/utils";
import { create } from "react-test-renderer";

const Schema = FormSchema("sign-up");
interface CustomInputProps {
	label: string;
	type: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	error?: string;
}

const CustomInput = ({
	placeholder,
	label,
	type,
	value,
	onChange,
	error,
}: CustomInputProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor="#666"
				type={type}
				style={[styles.input, { borderColor: error ? "#ff0000" : "#ccc" }]}
				value={value}
				onChangeText={onChange}
			/>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
};
export default CustomInput;

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 17,
		paddingVertical: 20,
	},
	label: {
		paddingVertical: 10,
		fontFamily: "Axiforma",
		color: "#ABB3C7",
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#ABB3C7",
		color: "#ABB3C7",
		fontSize: 15,
	},
	error: {
		fontSize: 14,
		color: "#ff0000",
		marginTop: 5,
	},
});
