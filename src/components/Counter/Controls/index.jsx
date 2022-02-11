import React from "react";
import { Button, Container, Key } from "./styles";

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
				<Key> esc </Key>
			</Button>
			<Button onClick={createLap} ref={lapButtonRef}>
				lap
				<Key> enter </Key>
			</Button>
			<Button
				onClick={toggleCounting}
				className={isCounting && "active"}
				ref={toggleCountButtonRef}
			>
				{buttonText}
				<Key> space </Key>
			</Button>
		</Container>
	);
};

export default Index;
