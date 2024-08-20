import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CheckBox from "expo-checkbox";
import { FilledButton } from "@/components/ui/FilledButton";
import CustomHeader from "@/components/ui/CustomHeader";
import GeneralHeaderText from "@/components/ui/GeneralHeaderText";
import { Beginner, Intermediate, Novice } from "@/assets/icons/Icons";

const App = () => {
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

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{ padding: 17 }}>
					<CustomHeader />
					<GeneralHeaderText
						title="How would you rate your proficiency in Yoruba?"
						position="flex-start"
					/>
					<View style={styles.item}>
						<View style={{ flexDirection: "row" }}>
							<Novice />
							<View>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									Novice
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									I’m new to Yoruba
								</Text>
							</View>
						</View>
						<CheckBox
							value={checkboxValues.checkbox1}
							onValueChange={() => handleCheckboxChange("checkbox1")}
							tintColors="#4CA6A8"
							onCheckColor="#fff"
							onFillColor="#4CA6A8"
							onTintColor="#4CA6A8"
							style={{ height: 15 }}
						/>
					</View>

					<View style={styles.item}>
						<View style={{ flexDirection: "row" }}>
							<Beginner />

							<View>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									Beginner
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									Beginner
								</Text>
							</View>
						</View>

						<CheckBox
							value={checkboxValues.checkbox2}
							onValueChange={() => handleCheckboxChange("checkbox2")}
							tintColors="#4CA6A8"
							onCheckColor="#fff"
							onFillColor="#4CA6A8"
							onTintColor="#4CA6A8"
							style={{ height: 15 }}
						/>
					</View>

					<View style={styles.item}>
						<View style={{ flexDirection: "row" }}>
							<Intermediate />
							<View>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									Intermediate
								</Text>
								<Text
									style={{
										color: "#fff",
										fontSize: 16,
										fontFamily: "Axiforma",
									}}
								>
									Intermediate
								</Text>
							</View>
						</View>

						<CheckBox
							value={checkboxValues.checkbox3}
							onValueChange={() => handleCheckboxChange("checkbox3")}
							tintColors="#4CA6A8"
							onCheckColor="#fff"
							onFillColor="#4CA6A8"
							onTintColor="#4CA6A8"
							style={{ height: 15 }}
						/>
					</View>
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
});
