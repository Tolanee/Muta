import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import CheckBox from "expo-checkbox";
import English from "../../../assets/images/designs/English.png";
import French from "../../../assets/images/designs/French.png";
import Portuguese from "../../../assets/images/designs/Portuguese.png";
import Spanish from "../../../assets/images/designs/Spanish.png";

import FilledButton from "../../../components/ui/FilledButton";
import CustomHeader from "@/components/ui/CustomHeader";

const App = () => {
	const [items, setItems] = useState([
		{
			id: "1",
			label: "I speak English",
			image: English,
			isChecked: false,
		},
		{
			id: "2",
			label: "Je parle Français",
			image: French,
			isChecked: false,
		},
		{
			id: "3",
			label: "Eu falo Português",
			image: Portuguese,
			isChecked: false,
		},
		{
			id: "4",
			label: "Yo hablo Español",
			image: Spanish,
			isChecked: false,
		},
	]);

	const toggleCheckbox = (id) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, isChecked: !item.isChecked } : item,
			),
		);
	};

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => {
					toggleCheckbox(item.id);
				}}
				style={[
					{ borderColor: item.isChecked ? "#4CA6A8" : "#ABB3C7" },
					styles.item,
				]}
			>
				<View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
					<Image
						source={item.image}
						style={{ width: 48, height: 48 }}
					/>
					<Text style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}>
						{item.label}
					</Text>
				</View>

				<CheckBox
					value={item.isChecked}
					onValueChange={() => toggleCheckbox(item.id)}
					color={item.isChecked ? "#4CA6A8" : undefined}
					style={styles.box}
				/>
			</TouchableOpacity>
		);
	};

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
						href="sign-up/languageToLearn"
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
