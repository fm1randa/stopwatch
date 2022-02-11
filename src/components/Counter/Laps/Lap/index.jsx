import React from "react";
import { Container, LapId, End, Duration } from "./styles";
import getFormattedTimer from "../../../../helpers/getFormattedTimer";

const Index = ({ index, start, end, duration, ...rest }) => {
	return (
		<Container {...rest}>
			<LapId>#{index + 1}</LapId>
			<End>{getFormattedTimer(end, { showMs: true })}</End>
			<Duration>{getFormattedTimer(duration, { showMs: true })}</Duration>
		</Container>
	);
};

export default Index;
