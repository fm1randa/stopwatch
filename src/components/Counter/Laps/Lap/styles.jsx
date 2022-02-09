import styled from "styled-components";
import { COLORS } from "../../../../constants";

export const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	column-gap: 10px;
	color: ${COLORS.white};

	&.shorter {
		color: ${COLORS.green};
	}
	&.longer {
		color: ${COLORS.red};
	}
`;

export const LapId = styled.span`
	font-style: italic;
`;

export const StartEnd = styled.div``;

export const Start = styled.span``;

export const End = styled.span``;

export const Duration = styled.span``;
