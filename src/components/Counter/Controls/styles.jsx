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
		border-color: #f5ed00;
		background-color: #f5ed00;
		color: ${COLORS.primary};

		:hover {
			background-color: #b8b100;
			border-color: #b8b100;
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
