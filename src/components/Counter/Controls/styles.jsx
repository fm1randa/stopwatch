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
	outline: none;
	position: relative;

	color: ${COLORS.secondary};
	transition: all 0.2s ease-in-out;

	&.active {
		border-color: #f5ed00;
		background-color: #f5ed00;
		color: ${COLORS.primary};

		:hover {
			background-color: #b8b100;
			border-color: #b8b100;
		}
	}

	:active {
		transition: 0s;
		transform: scale(0.95);
		background-color: ${COLORS.secondary};
		color: ${COLORS.primary};
	}

	&.pressed {
		transition: 0s;
		transform: scale(0.95);
		background-color: ${COLORS.secondary};
		color: ${COLORS.primary};

		&.danger {
			background-color: ${COLORS.red};
			color: ${COLORS.white};
			border-color: ${COLORS.primary};
		}
	}

	:hover {
		&.danger {
			background-color: ${COLORS.red};
			color: ${COLORS.white};
			border-color: ${COLORS.primary};
		}
		background-color: ${COLORS.secondary};
		color: ${COLORS.primary};
	}
`;

export const Key = styled.kbd`
	color: ${COLORS.white};
	opacity: 0.6;
	position: absolute;
	bottom: -20px;
	left: 50%;
	transform: translate(-50%, 0);
	pointer-events: none;
	font-size: 10px;
`;
