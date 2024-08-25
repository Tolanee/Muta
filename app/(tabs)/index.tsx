import {
	Clickboard,
	Forward,
	Intermediate,
	Lesson,
	Level,
	Play,
	UnitedStates,
	Unlock,
} from "../../assets/icons/Icons";
import {
	Image,
	StyleSheet,
	Platform,
	View,
	Text,
	ScrollView,
	SafeAreaView,
	FlatList,
	Pressable,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSelector } from "react-redux";

export default function HomeScreen() {
	const language = useSelector((state) => state.language);
	const leaderBoard = [
		{
			id: 1,
			name: "Tino Vinus",
			icon: <UnitedStates />,
			country: "United States",
			score: "🏆 15,832",
		},
		{
			id: 2,
			name: "Tino Vinus",
			icon: <UnitedStates />,
			country: "United States",
			score: "🏆 15,832",
		},
		{
			id: 3,
			name: "Tino Vinus",
			icon: <UnitedStates />,
			country: "United States",
			score: "🏆 15,832",
		},
	];
	const RenderItems = ({ items }) => {
		return (
			<View style={styles.list}>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image
						source={require("../../assets/images/designs/profilePic.png")}
						height={48}
						width={48}
					/>
					<View>
						<Text
							style={{
								color: "#fff",
								fontSize: 16,
								fontWeight: 700,
								fontFamily: "Axioforma",
							}}
						>
							{items.name}
						</Text>
						<View style={styles.country}>
							<Text
								style={{
									paddingRight: 8,
									paddingTop: 8,
									color: "#fff",
									fontSize: 15,
									fontFamily: "Axioforma",
								}}
							>
								{items.country}
							</Text>
							{items.icon}
						</View>
					</View>
				</View>

				<View>
					<Text style={{ color: "#FF8700", fontWeight: 500, fontSize: 13 }}>
						{items.score}
					</Text>
				</View>
			</View>
		);
	};
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<FlatList
					data={leaderBoard}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <RenderItems items={item} />}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={() => (
						<View>
							<View style={styles.header}>
								<View
									style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
								>
									<Text
										style={{
											color: "#fff",
											fontSize: 16,
											fontWeight: 700,
											fontFamily: "Axioforma",
										}}
									>
										{language.languageName}
									</Text>
									<FontAwesome
										name="caret-down"
										size={24}
										color="white"
									/>
								</View>

								<View
									style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
								>
									<FontAwesome
										name="bell-o"
										size={24}
										color="white"
									/>
									<FontAwesome
										name="user-circle-o"
										size={24}
										color="white"
									/>
								</View>
							</View>
							<View style={styles.board}>
								<View style={{ padding: 10, flex: 1 }}>
									<View
										style={{
											flexDirection: "row",
											gap: 5,
											alignItems: "center",
										}}
									>
										<Level />
										<Text
											style={{
												color: "#fff",
												fontSize: 16,
												fontWeight: 700,
												fontFamily: "Axioforma",
											}}
										>
											Intermediate
										</Text>
									</View>
									<View
										style={{
											flexDirection: "row",
											gap: 5,
											alignItems: "center",
										}}
									>
										<Lesson />
										<Text
											style={{
												color: "#fff",
												fontSize: 16,
												fontWeight: 700,
												fontFamily: "Axioforma",
											}}
										>
											Lesson 2
										</Text>
									</View>
									<Pressable style={styles.learnBtn}>
										<Text>Start Learning</Text>
										<Play />
									</Pressable>
								</View>

								<View>
									<Image
										source={require("../../assets/images/designs/yoruba.png")}
									/>
								</View>
							</View>
							<View style={styles.review}>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Clickboard />
									<Text
										style={{
											fontSize: 16,
											fontFamily: "Axiforma",
											fontWeight: 700,
											paddingHorizontal: 17,
										}}
									>
										Review your most recent lesson
									</Text>
								</View>

								<Forward fill="#848A99" />
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 20,
								}}
							>
								<Text style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>
									Leaderboard
								</Text>
								<Forward fill="#fff" />
							</View>
						</View>
					)}
					ListFooterComponent={() => (
						<View style={styles.unlock}>
							<Unlock />
							<Text
								style={{
									fontSize: 16,
									fontFamily: "Aniforma",
									fontWeight: 500,
									paddingHorizontal: 15,
								}}
							>
								Upgrade now to unlock all lessons
							</Text>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 17,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 17,
	},
	text: {
		color: "#fff",
		fontSize: 16,
		fontWeight: 700,
		fontFamily: "Axioforma",
	},
	board: {
		paddingVertical: 17,
		marginVertical: 17,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#2F3540",
		borderRadius: 5,
	},
	learnBtn: {
		padding: 10,
		marginVertical: 17,
		marginRight: 17,
		borderRadius: 50,
		backgroundColor: "#BBECED",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	country: {
		flexDirection: "row",
		alignItems: "center",
	},
	list: {
		flexDirection: "row",
		backgroundColor: "#2F3540",
		borderRadius: 5,
		padding: 8,
		marginVertical: 9,
		alignItems: "center",
		justifyContent: "space-between",
	},
	unlock: {
		backgroundColor: "#BBECED",
		borderRadius: 32,
		padding: 15,
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 20,
	},
	review: {
		backgroundColor: "#FFF5DC",
		paddingVertical: 17,
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 16,
		marginVertical: 20,
	},
});
