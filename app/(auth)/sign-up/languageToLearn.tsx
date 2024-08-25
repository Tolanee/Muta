import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
	Image,
	Pressable,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import FilledButton from "@/components/ui/FilledButton";
import CustomHeader from "@/components/ui/CustomHeader";
import { fetchData } from "@/api/requests";
import { Link } from "expo-router";
import store from "@/constants/store";

const languageToLearn = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [lang, setLang] = useState("");

	useEffect(() => {
		fetchData("get-all-languages")
			.then((res) => {
				// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
				// console.log("response", res.data);
				setData(res.data);
			})
			.catch((error) => setError(error));
	}, []);

	const _renderItems = ({ item }) => {
		return (
			<TouchableOpacity
				style={[
					{
						borderWidth: item.languageName === lang ? 2 : 1,
						borderColor: item.languageName === lang ? "#4CA6A8" : "#ABB3C7",
					},
					styles.box,
				]}
				onPress={() => {
					store.dispatch({ type: "SAVE_LANGUAGE", payload: item });
					setLang(item.languageName);
				}}
			>
				<Image
					source={{ uri: item.languageIcon }}
					style={{ width: 48, height: 48 }}
				/>
				<Text style={styles.text}>{item.languageName}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.container}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ paddingHorizontal: 17, flex: 1 }}>
					<CustomHeader />
					<GeneralHeaderText
						title="I want to learn...."
						position="flex-start"
					/>

					<FlatList
						data={data}
						numColumns={2}
						renderItem={({ item }) => <_renderItems item={item} />}
						keyExtractor={(item) => item.language_id}
					/>
				</View>

				<View>
					<View style={{ margin: 17 }}>
						<Link
							href={{
								pathname: "/sign-up/proficiency",
								params: { language: lang },
							}}
							asChild
						>
							<TouchableOpacity style={styles.con}>
								<Text style={styles.tex}>CONTINUE</Text>
							</TouchableOpacity>
						</Link>
					</View>
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

		borderRadius: 8,
		margin: 10,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		minWidth: "45%",
	},
	text: {
		fontSize: 16,
		color: "#ABB3C7",
		paddingVertical: 8,
	},

	con: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#4CA6A8",
	},
	tex: {
		fontSize: 14,
		fontFamily: "Axiforma",
		fontWeight: 700,
	},
});
