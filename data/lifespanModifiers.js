const POSITIVE = '+';
const NEGATIVE = '–';

const lifespanModifiers = [
	{
		text: 'Short walk',
		value: '15m',
		minutes: 15,
		type: POSITIVE
	},
	{
		text: `Read smart book`,
		value: '6h15m',
		minutes: 375,
		type: POSITIVE
	},
	{
		text: 'Called father',
		value: '1h10m',
		minutes: 70,
		type: POSITIVE
	},
	{
		text: 'Drank 2 pints of beer',
		value: '40m',
		minutes: 40,
		type: NEGATIVE
	}
];

export default lifespanModifiers;
