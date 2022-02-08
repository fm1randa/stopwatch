import React from "react";
import { Container, LapId, Start, End, Duration, StartEnd } from "./styles";
import getFormattedTimer from "../../../../helpers/getMinutesAndSecs";

const Index = ({ index, start, end, duration }) => {
	return (
		<Container>
			<LapId>#{index + 1}</LapId>
			<StartEnd>
				<Start>{getFormattedTimer(start, { showMs: true })}</Start> -{" "}
				<End>{getFormattedTimer(end, { showMs: true })}</End>
			</StartEnd>
			<Duration>{getFormattedTimer(duration, { showMs: true })}</Duration>
		</Container>
	);
};

export default Index;
