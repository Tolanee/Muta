import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { create } from "react-test-renderer";
import { FilledButton } from "../../../components/ui/FilledButton";

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
					<View style={styles.item}>
						<Text
							style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}
						>
							I speak English
						</Text>
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
						<Text
							style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}
						>
							Je parle Français
						</Text>
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
						<Text
							style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}
						>
							Eu falo Português
						</Text>
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

					<View style={styles.item}>
						<Text
							style={{ color: "#fff", fontSize: 16, fontFamily: "Axiforma" }}
						>
							Yo hablo Español
						</Text>
						<CheckBox
							value={checkboxValues.checkbox4}
							onValueChange={() => handleCheckboxChange("checkbox4")}
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
