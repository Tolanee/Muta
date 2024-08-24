import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Back } from "../../assets/icons/Icons";
import { router } from "expo-router";

const CustomHeader = () => {
	return (
		<View style={{ marginBottom: 17, marginHorizontal: 17 }}>
			<TouchableOpacity onPress={() => router.back()}>
				<Back />
			</TouchableOpacity>
		</View>
	);
};

export default CustomHeader;
