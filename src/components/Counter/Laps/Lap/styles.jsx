import styled from "styled-components";
import { COLORS } from "../../../../constants";

export const Container = styled.tr`
	width: 100%;
	color: ${COLORS.white};

	&.shorter {
		color: ${COLORS.green};
	}
	&.longer {
		color: ${COLORS.red};
	}
`;

export const LapId = styled.td`
	font-style: italic;
`;

export const End = styled.td`
	font-family: Ticking Timebomb BB Regular;
`;

export const Duration = styled.td`
	text-align: right;
`;
