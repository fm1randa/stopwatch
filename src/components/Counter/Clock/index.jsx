import React from "react";
import getFormattedTimer from "../../../helpers/getFormattedTimer";
import { BackgroundCircle, Circle, Clock, Container, Time } from "./styles";

const Index = ({ count }) => {
	const progress = count / 10;
	const formattedCount = getFormattedTimer(count, { showMs: true });
	const radius = 150;
	const strokeWidth = 1;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (progress / 100) * circumference;
	return (
		<Container>
			<Clock>
				<Circle
					strokeDashoffset={strokeDashoffset}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference + " " + circumference}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</Clock>
			<BackgroundCircle />
			<Time> {formattedCount} </Time>
		</Container>
	);
};

export default Index;
