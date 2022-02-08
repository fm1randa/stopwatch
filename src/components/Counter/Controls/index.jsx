import React from "react";
import { Button, Container } from "./styles";

const Index = ({
	toggleCounting,
	buttonText,
	resetCount,
	createLap,
	isCounting,
}) => {
	return (
		<Container>
			<Button onClick={resetCount} className="danger">
				reset
			</Button>
			<Button onClick={createLap}> lap </Button>
			<Button onClick={toggleCounting} className={isCounting && "active"}>
				{buttonText}
			</Button>
		</Container>
	);
};

export default Index;
