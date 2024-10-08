import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "home" : "home-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="learn"
				options={{
					title: "Learn",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "book" : "book-outline"}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="liveLesson"
				options={{
					title: "Live Lesson",
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? "headset" : "headset-outline"}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
