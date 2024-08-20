import { View } from "react-native";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const Back = () => {
	return (
		<Svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
		>
			<Path
				d="M17.5513 15.5191L17.5533 15.9912C17.5533 17.9534 17.4384 19.7422 17.2653 20.9084L17.1137 21.6336C17.0293 22.0176 16.9184 22.4549 16.8028 22.6782C16.3795 23.4948 15.5519 24 14.6661 24H14.589C14.0115 23.9809 12.7984 23.4742 12.7984 23.4566C10.8465 22.6376 7.08061 20.1657 5.34133 18.4035L4.8359 17.8744C4.70355 17.731 4.55485 17.5613 4.46254 17.429C4.15418 17.0207 4 16.5155 4 16.0103C4 15.4463 4.17309 14.922 4.50036 14.4931L5.01964 13.9327L5.13599 13.8131C6.71415 12.1021 10.8348 9.3042 12.9904 8.44795L13.3159 8.32323C13.7075 8.18285 14.2562 8.01542 14.589 8C15.0122 8 15.4166 8.0984 15.802 8.29227C16.2835 8.56398 16.6675 8.99284 16.8798 9.49807C17.0151 9.84762 17.2275 10.8977 17.2275 10.9168C17.4222 11.9757 17.535 13.6464 17.5513 15.5191ZM28 16.0006C28 17.1183 27.1026 18.0245 25.9957 18.0245L21.0634 17.5883C20.195 17.5883 19.491 16.8774 19.491 16.0006C19.491 15.1223 20.195 14.4129 21.0634 14.4129L25.9957 13.9767C27.1026 13.9767 28 14.8829 28 16.0006Z"
				fill="#ABB3C7"
			/>
		</Svg>
	);
};

export const Novice = () => {
	return (
		<Svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Circle
				cx={6}
				cy={26}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
			<Circle
				cx={16}
				cy={16}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
			<Circle
				cx={26}
				cy={6}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
		</Svg>
	);
};
export const Beginner = () => {
	return (
		<Svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Circle
				cx={6}
				cy={26}
				r={4}
				fill="#4CA6A8"
			/>
			<Circle
				cx={16}
				cy={16}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
			<Circle
				cx={26}
				cy={6}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
		</Svg>
	);
};
export const Intermediate = () => {
	return (
		<Svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Circle
				cx={6}
				cy={26}
				r={4}
				fill="#4CA6A8"
			/>
			<Circle
				cx={16}
				cy={16}
				r={4}
				fill="#4CA6A8"
			/>
			<Circle
				cx={26}
				cy={6}
				r={3.75}
				stroke="#ABB3C7"
				strokeWidth={0.5}
			/>
		</Svg>
	);
};
