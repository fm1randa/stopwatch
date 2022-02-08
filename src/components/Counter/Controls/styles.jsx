import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
	display: flex;
	column-gap: 10px;
`;

export const Button = styled.button`
	width: 95px;
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${COLORS.secondary};
	background-color: transparent;
	cursor: pointer;

	color: ${COLORS.secondary};
	transition: all 0.2s ease-in-out;

	&.active {
		background-color: ${COLORS.secondary};
		color: ${COLORS.primary};

		:hover {
			opacity: 0.5;
		}
	}

	:hover {
		&.danger {
			background-color: ${COLORS.red};
			color: ${COLORS.text};
			border-color: ${COLORS.primary};
		}
		background-color: ${COLORS.secondary};
		color: ${COLORS.primary};
	}
`;
