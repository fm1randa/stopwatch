import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "./styles";
import Controls from "./Controls";
import Lap from "../../Lap";
import Laps from "./Laps";
import Clock from "./Clock";

const Index = () => {
	const [buttonText, setButtonText] = useState("start");
	const [count, setCount] = useState(0);
	const [countHelper, setCountHelper] = useState(0);
	const [isCounting, setIsCounting] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const [laps, setLaps] = useState([]);
	const toggleCountButtonRef = useRef(null);
	const lapButtonRef = useRef(null);
	const resetButtonRef = useRef(null);

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
		if (isCounting) toggleCounting();
		setCount(0);
		setCountHelper(0);
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
		newLaps.unshift(lap);
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
		const baseDate = new Date();
		setIntervalId(setInterval(() => increaseCount(baseDate), 1));
	};

	const stopCounting = () => {
		setCountHelper(count);
		clearInterval(intervalId);
	};

	const increaseCount = (baseDate) => {
		const currentDate = new Date();
		const timeElapsed = currentDate.getTime() - baseDate.getTime();
		setCount(countHelper + timeElapsed);
	};

	const getLastEndTime = (laps) => {
		const lastLap = laps[0];
		return lastLap ? lastLap.endTime : 0;
	};

	const handleKeyEvent = (event) => {
		event.preventDefault();
		switch (event.key) {
			case " ":
				pressButton(event, toggleCountButtonRef);
				break;
			case "Enter":
				pressButton(event, lapButtonRef);
				break;
			case "Escape":
				pressButton(event, resetButtonRef);
				break;
			default:
				break;
		}
	};
	const pressButton = (event, buttonRef) => {
		clickOnKeyDown(event, buttonRef);
		togglePressedClass(event, buttonRef);
	};

	const togglePressedClass = (event, buttonRef) => {
		if (event.type === "keydown") {
			buttonRef.current.classList.add("pressed");
		} else if (event.type === "keyup") {
			buttonRef.current.classList.remove("pressed");
		}
	};

	const clickOnKeyDown = (event, buttonRef) => {
		if (event.type === "keydown") {
			buttonRef.current.click();
		}
	};

	const useEventListener = (eventName, handler, element = window) => {
		const savedHandler = useRef();

		useEffect(() => {
			savedHandler.current = handler;
		}, [handler]);

		useEffect(() => {
			const eventListener = (event) => savedHandler.current(event);
			element.addEventListener(eventName, eventListener);
			return () => {
				element.removeEventListener(eventName, eventListener);
			};
		}, [eventName, element]);
	};

	useEventListener("keydown", handleKeyEvent);
	useEventListener("keyup", handleKeyEvent);

	return (
		<Container /* onKeyDown={handleKeyDown} */>
			<Box>
				<Clock count={count} />
				<Controls
					toggleCounting={toggleCounting}
					buttonText={buttonText}
					resetCount={resetCount}
					createLap={createLap}
					isCounting={isCounting}
					lapButtonRef={lapButtonRef}
					resetButtonRef={resetButtonRef}
					toggleCountButtonRef={toggleCountButtonRef}
				/>
				<Laps laps={laps} />
			</Box>
		</Container>
	);
};

export default Index;
