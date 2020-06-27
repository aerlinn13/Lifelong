const POSITIVE = '+';
const NEGATIVE = '–';

const lifespanModifiers = [
	{
		id: 0,
		text: 'Short walk',
		value: '15m',
		minutes: 15,
		type: POSITIVE
	},
	{
		id: 1,
		text: `Read smart book`,
		value: '6h15m',
		minutes: 375,
		type: POSITIVE
	},
	{
		id: 2,
		text: 'Called father',
		value: '1h10m',
		minutes: 70,
		type: POSITIVE
	},
	{
		id: 3,
		text: 'Drank 2 pints of beer',
		value: '40m',
		minutes: 40,
		type: NEGATIVE
	},
	{
		id: 4,
		text: '3 pints of beer',
		value: '1h',
		minutes: 60,
		type: NEGATIVE
	}
];

export default lifespanModifiers;
