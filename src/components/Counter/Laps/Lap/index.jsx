import React from "react";
import { Container, LapId, Start, End, Duration, StartEnd } from "./styles";
import getFormattedTimer from "../../../../helpers/getFormattedTimer";

const Index = ({ index, start, end, duration, ...rest }) => {
	return (
		<Container {...rest}>
			<LapId>#{index + 1}</LapId>
			<StartEnd>
				<End>{getFormattedTimer(end, { showMs: true })}</End>
			</StartEnd>
			<Duration>{getFormattedTimer(duration, { showMs: true })}</Duration>
		</Container>
	);
};

export default Index;
