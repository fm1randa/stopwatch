import React from "react";
import { Button, Container } from "./styles";

const Index = ({
	toggleCounting,
	buttonText,
	resetCount,
	createLap,
	isCounting,
	lapButtonRef,
	resetButtonRef,
	toggleCountButtonRef,
}) => {
	return (
		<Container>
			<Button onClick={resetCount} className="danger" ref={resetButtonRef}>
				reset
			</Button>
			<Button onClick={createLap} ref={lapButtonRef}>
				lap
			</Button>
			<Button
				onClick={toggleCounting}
				className={isCounting && "active"}
				ref={toggleCountButtonRef}
			>
				{buttonText}
			</Button>
		</Container>
	);
};

export default Index;
