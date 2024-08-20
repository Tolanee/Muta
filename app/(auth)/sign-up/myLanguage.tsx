import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import CheckBox from "expo-checkbox";

import { FilledButton } from "../../../components/ui/FilledButton";
import CustomHeader from "@/components/ui/CustomHeader";

const App = () => {
	const [items, setItems] = useState([
		{ id: "1", label: "I speak English", isChecked: false },
		{ id: "2", label: "Je parle Français", isChecked: false },
		{ id: "3", label: "Eu falo Português", isChecked: false },
		{ id: "4", label: "Yo hablo Español", isChecked: false },
	]);

	const toggleCheckbox = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, isChecked: !item.isChecked } : item,
			),
		);
	};

	const renderItem = ({ item }) => (
		<View style={styles.item}>
			<Text style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}>
				{item.label}
			</Text>
			<CheckBox
				value={item.isChecked}
				onValueChange={() => toggleCheckbox(item.id)}
				color={item.isChecked ? "#4CA6A8" : undefined}
				style={styles.box}
			/>
		</View>
	);

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{ padding: 17 }}>
					<CustomHeader />
					<FlatList
						data={items}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
					/>
				</View>

				<View>
					<FilledButton
						title="CONTINUE"
						href="/sign-up/languageToLearn"
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default App;
export const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: "#1B1E26",
	},

	item: {
		borderWidth: 1,
		borderColor: "#2F3540",
		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 17,
		marginVertical: 17,
	},
	box: {
		borderRadius: 100,
	},
});
