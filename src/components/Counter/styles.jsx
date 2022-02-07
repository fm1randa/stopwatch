import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 20px;
`;

export const Clock = styled.div`
	width: 300px;
	height: 300px;
	border: 1px solid ${COLORS.secondary};
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 60px;
	color: ${COLORS.secondary};
`;
