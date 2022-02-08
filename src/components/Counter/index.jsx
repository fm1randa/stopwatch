import React, { useState } from "react";
import { Box, Container } from "./styles";
import Controls from "./Controls";
import Lap from "../../Lap";
import Laps from "./Laps";
import Clock from "./Clock";

const Index = () => {
	const [buttonText, setButtonText] = useState("start");
	const [count, setCount] = useState(0);
	const [isCounting, setIsCounting] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const [laps, setLaps] = useState([]);

	const toggleCounting = () => {
		toggleButtonText();
		if (!isCounting) {
			startCounting();
		} else {
			stopCounting();
		}
		setIsCounting(!isCounting);
	};

	const resetCount = () => {
		setCount(0);
		setLaps([]);
	};

	const createLap = () => {
		const newLaps = laps.slice();
		const lastEndTime = getLastEndTime(newLaps);
		const newIndex = newLaps.length;
		const lap = new Lap(newIndex, {
			startTime: lastEndTime,
			endTime: count,
		});
		newLaps.push(lap);
		setLaps(newLaps);
	};

	const toggleButtonText = () => {
		if (isCounting) {
			setButtonText("start");
		} else {
			setButtonText("stop");
		}
	};

	const startCounting = () => {
		setIntervalId(setInterval(increaseCount, 1));
	};

	const stopCounting = () => {
		clearInterval(intervalId);
	};

	const increaseCount = () => {
		setCount((oldCount) => oldCount + 4); // Interval has a 4ms delay
	};

	function getLastEndTime(laps) {
		const lastLap = laps[laps.length - 1];
		return lastLap ? lastLap.endTime : 0;
	}

	return (
		<Container>
			<Box>
				<Clock count={count} />
				<Controls
					toggleCounting={toggleCounting}
					buttonText={buttonText}
					resetCount={resetCount}
					createLap={createLap}
					isCounting={isCounting}
				/>
				<Laps laps={laps} />
			</Box>
		</Container>
	);
};

export default Index;
