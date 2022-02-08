import { format } from "date-fns";

export default function getFormattedTimer(
	timeInMs,
	options = { showMs: false }
) {
	const formatString = options.showMs ? "mm:ss,SS" : "mm:ss";
	return format(new Date(0, 0, 0, 0, 0, 0, timeInMs), formatString);
}
