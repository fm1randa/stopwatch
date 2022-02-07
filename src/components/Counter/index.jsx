import React, { useEffect, useState } from "react";
import { Clock, Container } from "./styles";
import Controls from "./Controls";
import { format } from "date-fns";

const Index = () => {
	const [buttonText, setButtonText] = useState("start");
	const [count, setCount] = useState(0);
	const [isCounting, setIsCounting] = useState(false);

	const toggleCounting = () => {
		console.log(isCounting);
		toggleButtonText();
		if (isCounting) {
			stopCounting();
		} else {
			startCounting();
		}
		setIsCounting(!isCounting);
	};

	const toggleButtonText = () => {
		if (isCounting) {
			setButtonText("start");
		} else {
			setButtonText("stop");
		}
	};

	let interval;
	const startCounting = () => {
		interval = setInterval(() => increaseCount(count), 1000);
	};

	const stopCounting = () => {
		clearInterval(interval);
	};

	const increaseCount = () => {
		const newCount = count + 1;
		setCount(newCount);
	};

	useEffect(() => {
		console.log(count);
	}, [count]);

	return (
		<Container>
			<Clock> {`${format(new Date(count), "mm:ss")}`} </Clock>
			<Controls toggleCounting={toggleCounting} buttonText={buttonText} />
		</Container>
	);
};

export default Index;
