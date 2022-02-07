import React from "react";
import { Button, Container } from "./styles";

const Index = ({ toggleCounting, buttonText }) => {
	return (
		<Container>
			<Button className="danger"> reset </Button>
			<Button> lap </Button>
			<Button onClick={toggleCounting}> {buttonText} </Button>
		</Container>
	);
};

export default Index;
