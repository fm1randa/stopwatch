import React from "react";
import { Container } from "./styles";
import Lap from "./Lap";

const Index = ({ laps }) => {
	return (
		<Container>
			{laps.map((lap) => (
				<Lap
					key={lap.index}
					index={lap.index}
					start={lap.startTime}
					end={lap.endTime}
					duration={lap.endTime - lap.startTime}
				/>
			))}
		</Container>
	);
};

export default Index;
