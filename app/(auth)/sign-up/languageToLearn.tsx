import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { FilledButton } from "@/components/ui/FilledButton";

const languageToLearn = () => {
	interface RenderProps {
		item: string;
	}
	const languages = [
		{
			id: 1,
			language: "Swahili",
			icon: "",
		},
		{
			id: 2,
			language: "Swahili",
			icon: "",
		},
		{
			id: 3,
			language: "Swahili",
			icon: "",
		},
		{
			id: 4,
			language: "Swahili",
			icon: "",
		},
		{
			id: 5,
			language: "Swahili",
			icon: "",
		},
		{
			id: 6,
			language: "Swahili",
			icon: "",
		},
		{
			id: 7,
			language: "Swahili",
			icon: "",
		},
	];

	const _renderItems = ({ item }: RenderProps) => {
		return (
			<View style={styles.box}>
				<Text>{item.language}</Text>
			</View>
		);
	};
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{ paddingHorizontal: 17 }}>
					<GeneralHeaderText
						title="I want to learn..."
						position="flex-start"
					/>

					<FlatList
						data={languages}
						numColumns={2}
						renderItem={({ item }) => <_renderItems item={item} />}
						keyExtractor={(item) => item.id}
					/>
				</View>

				<View>
					<FilledButton
						title="CONTINUE"
						href="/sign-up/proficiency"
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default languageToLearn;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B1E26",
	},

	box: {
		padding: 10,
		borderWidth: 1,
		borderColor: "#ABB3C7",
		borderRadius: 8,

		margin: 10,
	},
});
