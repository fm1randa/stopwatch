export default class Lap {
	constructor(lapNumber, { startTime, endTime }) {
		this.index = lapNumber;
		this.startTime = startTime;
		this.endTime = endTime;
	}
}
