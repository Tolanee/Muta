import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Alert,
} from "react-native";
import CheckBox from "expo-checkbox";
import { FilledButton } from "@/components/ui/FilledButton";
import CustomHeader from "@/components/ui/CustomHeader";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Beginner, Intermediate, Novice } from "@/assets/icons/Icons";
import { router, useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import store from "@/constants/store";

const App = () => {
	const language = useSelector((state) => state.language);
	const usertype = useSelector((state) => state.type);
	// const { language } = useLocalSearchParams();
	console.log("====================================");
	console.log(usertype);
	console.log("====================================");
	const [checkboxValues, setCheckboxValues] = useState({
		checkbox1: false,
		checkbox2: false,
		checkbox3: false,
		checkbox4: false,
	});

	const handleCheckboxChange = (checkboxName) => {
		setCheckboxValues((prevValues) => {
			return { ...prevValues, [checkboxName]: !prevValues[checkboxName] };
		});
	};

	const handleSubmit = () => {
		router.push({
			pathname: "/sign-up/signUp",
		});
	};

	const alertChooseProficiency = () => {
		Alert.alert(
			"Choose one",
			"Choose a proficiency level before you proceed",
			[{ text: "OK", onPress: () => console.log("OK Pressed") }],
			{ cancelable: false },
		);
	};
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{ padding: 17 }}>
					<CustomHeader />
					<GeneralHeaderText
						title={`How would you rate your proficiency in ${language.languageName}?`}
						position="flex-start"
					/>
					<TouchableOpacity
						onPress={() => {
							store.dispatch({ type: "SAVE_USER_TYPE", payload: "Novice" });
							handleCheckboxChange("checkbox1");
						}}
						style={[
							{ borderColor: checkboxValues.checkbox1 ? "#4CA6A8" : "#ABB3C7" },
							styles.item,
						]}
					>
						<View style={{ flexDirection: "row" }}>
							<Novice />
							<View style={{ paddingHorizontal: 10 }}>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									Novice
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 14,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									I’m new to {language.languageName}
								</Text>
							</View>
						</View>
						<CheckBox
							value={checkboxValues.checkbox1}
							onValueChange={() => handleCheckboxChange("checkbox1")}
							color={checkboxValues.checkbox1 ? "#4CA6A8" : undefined}
							style={styles.box}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							store.dispatch({ type: "SAVE_USER_TYPE", payload: "Beginner" });
							handleCheckboxChange("checkbox2");
						}}
						style={[
							{ borderColor: checkboxValues.checkbox2 ? "#4CA6A8" : "#ABB3C7" },
							styles.item,
						]}
					>
						<View style={{ flexDirection: "row" }}>
							<Beginner />

							<View style={{ paddingHorizontal: 10 }}>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									Beginner
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 14,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									I know some words in {language.languageName}
								</Text>
							</View>
						</View>

						<CheckBox
							value={checkboxValues.checkbox2}
							onValueChange={() => handleCheckboxChange("checkbox2")}
							color={checkboxValues.checkbox2 ? "#4CA6A8" : undefined}
							style={styles.box}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							store.dispatch({
								type: "SAVE_USER_TYPE",
								payload: "Intermediate",
							});
							handleCheckboxChange("checkbox3");
						}}
						style={[
							{ borderColor: checkboxValues.checkbox3 ? "#4CA6A8" : "#ABB3C7" },
							styles.item,
						]}
					>
						<View style={{ flexDirection: "row" }}>
							<Intermediate />
							<View style={{ paddingHorizontal: 10 }}>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									Intermediate
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 14,
										fontFamily: "Axiforma",
										lineHeight: 24,
									}}
								>
									{`I can have simple conversations in \n ${language.languageName}`}
								</Text>
							</View>
						</View>

						<CheckBox
							value={checkboxValues.checkbox3}
							onValueChange={() => handleCheckboxChange("checkbox3")}
							color={checkboxValues.checkbox3 ? "#4CA6A8" : undefined}
							style={styles.box}
						/>
					</TouchableOpacity>
				</View>

				<View style={{ margin: 17 }}>
					<TouchableOpacity
						style={usertype ? styles.con : styles.buttonDisabled}
						onPress={usertype ? handleSubmit : alertChooseProficiency}
					>
						<Text style={styles.tex}>CONTINUE</Text>
					</TouchableOpacity>
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

		borderRadius: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 17,
		marginVertical: 17,
	},
	box: {
		borderRadius: 100,
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
	buttonDisabled: {
		padding: 17,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		backgroundColor: "#ABB3C7",
	},
});
