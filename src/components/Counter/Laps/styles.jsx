import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
	width: 100%;
	margin-top: 20px;
`;

export const Table = styled.table`
	width: 100%;
	display: table;
	table-layout: fixed;
`;

export const TableContainer = styled.div`
	margin: 10px 0px 10px 0px;
	height: 180px;
	overflow-y: auto;
`;

export const TableHeader = styled.div`
	width: 100%;
	display: flex;
	height: 25px;
	justify-content: space-around;
`;

export const TableFooter = styled.div`
	width: 100%;
	display: flex;
	color: ${COLORS.white};
	justify-content: space-around;
	align-items: center;
`;

export const TopLap = styled.span`
	display: flex;
	align-items: center;
	column-gap: 5px;
	color: ${COLORS.white};
`;

export const GreenBall = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${COLORS.green};
	border-radius: 50%;
`;

export const RedBall = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${COLORS.red};
	border-radius: 50%;
`;

export const GreenTag = styled.div`
	background-color: ${COLORS.green};
	width: 10px;
	height: 5px;
	border-radius: 5px;
`;

export const RedTag = styled.div`
	background-color: ${COLORS.red};
	width: 10px;
	height: 5px;
	border-radius: 5px;
`;

export const ColorDescription = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	column-gap: 5px;
`;
