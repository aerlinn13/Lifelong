const timeCalculator = (time) => {
	let result = '';
	let remainder = time;
	const years = Math.floor(remainder / 525600);
	if (years) {
		result += `${years}y`;
		remainder -= years * 525600;
	}
	const days = Math.floor(remainder / 1440);
	if (days) {
		result += `${days}d`;
		remainder -= days * 1440;
	}
	const hours = Math.floor(remainder / 60);
	if (hours) {
		result += `${hours}h`;
		remainder -= hours * 60;
	}
	result += `${remainder}m`;
	return result;
};

export default timeCalculator;
