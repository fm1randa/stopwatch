import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
	position: relative;
`;

export const Clock = styled.svg.attrs({
	width: "300px",
	height: "300px",
})``;

export const Circle = styled.circle.attrs({
	fill: "transparent",
	stroke: COLORS.secondary,
	strokeWidth: 5,
})``;

export const BackgroundCircle = styled.div`
	width: 295px;
	height: 295px;
	border: 2px solid #e8f0ff;
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

export const Time = styled.span`
	position: absolute;
	top: 40%;
	left: 20%;
	font-size: 60px;
	color: ${COLORS.white};
	font-family: "Ticking Timebomb BB Regular";
`;
