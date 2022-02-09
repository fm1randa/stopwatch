import { useState, useEffect } from "react";
import { Container } from "./styles";
import Lap from "./Lap";

const Index = ({ laps }) => {
	const [shorterLap, setShorterLap] = useState(0);
	const [longerLap, setLongerLap] = useState(0);

	useEffect(() => {
		if (!laps[0]) {
			return;
		}
		let shorter = laps[0];
		let longer = laps[0];
		laps.forEach((lap) => {
			if (shorter.duration > lap.duration) {
				shorter = lap;
			}
			if (longer.duration < lap.duration) {
				longer = lap;
			}
		});
		setShorterLap(shorter);
		setLongerLap(longer);
	}, [laps]);

	function getClass(lap) {
		if (isTheShorter(lap)) {
			return "shorter";
		} else if (isTheLonger(lap)) {
			return "longer";
		}
	}

	function isTheShorter(lap) {
		return lap.index === shorterLap.index;
	}

	function isTheLonger(lap) {
		return lap.index === longerLap.index;
	}

	return (
		<Container>
			{laps.map((lap) => (
				<Lap
					key={lap.index}
					index={lap.index}
					start={lap.startTime}
					end={lap.endTime}
					duration={lap.duration}
					className={getClass(lap)}
				/>
			))}
		</Container>
	);
};

export default Index;
