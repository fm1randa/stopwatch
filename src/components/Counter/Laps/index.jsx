import { useState, useEffect } from "react";
import {
	Container,
	GreenBall,
	RedBall,
	TableHeader,
	Table,
	TableContainer,
	TopLap,
	GreenTag,
	RedTag,
	TableFooter,
	ColorDescription,
} from "./styles";
import Lap from "./Lap";
import getFormattedTimer from "../../../helpers/getFormattedTimer";

const Index = ({ laps }) => {
	const [shorterLap, setShorterLap] = useState(0);
	const [longerLap, setLongerLap] = useState(0);

	useEffect(() => {
		if (!laps[0]) {
			setShorterLap(0);
			setLongerLap(0);
			return;
		}
		let shorter = laps[0];
		let longer = laps[0];
		laps.forEach((lap) => {
			if (shorter.duration > lap.duration) {
				shorter = lap;
			}
			if (longer.duration < lap.duration) {
				longer = lap;
			}
		});
		setShorterLap(shorter);
		setLongerLap(longer);
	}, [laps]);

	function getClass(lap) {
		if (isTheShorter(lap)) {
			return "shorter";
		} else if (isTheLonger(lap)) {
			return "longer";
		}
	}

	function isTheShorter(lap) {
		return lap.index === shorterLap.index;
	}

	function isTheLonger(lap) {
		return lap.index === longerLap.index;
	}

	return (
		<Container>
			{laps[0] && (
				<TableHeader>
					<TopLap>
						<GreenBall />
						{getFormattedTimer(shorterLap.duration, { showMs: true })}
					</TopLap>
					<TopLap>
						<RedBall />
						{getFormattedTimer(longerLap.duration, { showMs: true })}
					</TopLap>
				</TableHeader>
			)}
			<TableContainer>
				<Table>
					{laps.map((lap) => (
						<Lap
							key={lap.index}
							index={lap.index}
							start={lap.startTime}
							end={lap.endTime}
							duration={lap.duration}
							className={getClass(lap)}
						/>
					))}
				</Table>
			</TableContainer>
			{laps[0] && (
				<TableFooter style={{ fontSize: "10px" }}>
					<ColorDescription>
						<GreenTag />
						shorter
					</ColorDescription>
					<ColorDescription>
						<RedTag />
						longer
					</ColorDescription>
				</TableFooter>
			)}
		</Container>
	);
};

export default Index;
