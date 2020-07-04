const POSITIVE = '+';
const NEGATIVE = '–';

const lifespanModifiers = [
	{
		id: 0,
		text: '15 minutes walk',
		value: '30m',
		minutes: 30,
		type: POSITIVE
	},
	{
		id: 1,
		text: `30 minutes walk`,
		value: '1h',
		minutes: 60,
		type: POSITIVE
	},
	{
		id: 2,
		text: '1 hour walk',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 3,
		text: 'All day walk',
		value: '1d',
		minutes: 1440,
		type: POSITIVE
	},
	{
		id: 4,
		text: '30 minutes run',
		value: '1h30m',
		minutes: 90,
		type: POSITIVE
	},
	{
		id: 5,
		text: '1 hour run',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 6,
		text: 'Long run',
		value: '6h',
		minutes: 360,
		type: POSITIVE
	},
	{
		id: 7,
		text: 'Vegetables in a meal',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 8,
		text: 'No meat today',
		value: '4h',
		minutes: 240,
		type: POSITIVE
	},
	{
		id: 9,
		text: '1 hour social media',
		value: '1h30m',
		minutes: 90,
		type: NEGATIVE
	},
	{
		id: 10,
		text: '3 hours social media',
		value: '6h',
		minutes: 360,
		type: NEGATIVE
	},
	{
		id: 11,
		text: 'Stroked a cat',
		value: '1h',
		minutes: 60,
		type: POSITIVE
	},
	{
		id: 12,
		text: 'Played with a dog',
		value: '50m',
		minutes: 50,
		type: POSITIVE
	},
	{
		id: 13,
		text: 'Overcrowded commute',
		value: '45m',
		minutes: 45,
		type: NEGATIVE
	},
	{
		id: 14,
		text: 'Stressful meeting',
		value: '2h',
		minutes: 120,
		type: NEGATIVE
	},
	{
		id: 15,
		text: 'Food poisoning',
		value: '2d',
		minutes: 2880,
		type: NEGATIVE
	},
	{
		id: 16,
		text: 'Argument with someone',
		value: '3h',
		minutes: 180,
		type: NEGATIVE
	},
	{
		id: 17,
		text: 'Lost father',
		value: '2y',
		minutes: 1051200,
		type: NEGATIVE
	},
	{
		id: 18,
		text: 'Lost mother',
		value: '2y',
		minutes: 1051200,
		type: NEGATIVE
	},
	{
		id: 19,
		text: 'Surgery',
		value: '120d',
		minutes: 172800,
		type: NEGATIVE
	},
	{
		id: 20,
		text: '8 hours good work',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 21,
		text: '8 hours boring work',
		value: '3h',
		minutes: 180,
		type: NEGATIVE
	},
	{
		id: 22,
		text: 'Late overtime',
		value: '1h',
		minutes: 60,
		type: NEGATIVE
	},
	{
		id: 23,
		text: 'Fast food for lunch',
		value: '3h',
		minutes: 180,
		type: NEGATIVE
	},
	{
		id: 24,
		text: 'No food after 18.00',
		value: '1h',
		minutes: 60,
		type: POSITIVE
	},
	{
		id: 25,
		text: 'No exercise today',
		value: '3h',
		minutes: 180,
		type: NEGATIVE
	},
	{
		id: 26,
		text: 'Less than 8h sleep',
		value: '5h',
		minutes: 300,
		type: NEGATIVE
	},
	{
		id: 27,
		text: 'Good party with friends',
		value: '4h',
		minutes: 240,
		type: POSITIVE
	},
	{
		id: 28,
		text: 'Boring party',
		value: '4h',
		minutes: 240,
		type: NEGATIVE
	},
	{
		id: 29,
		text: '50g red meat',
		value: '50m',
		minutes: 50,
		type: NEGATIVE
	},
	{
		id: 30,
		text: 'Ice cream',
		value: '30m',
		minutes: 30,
		type: NEGATIVE
	},
	{
		id: 31,
		text: 'Vodka shot',
		value: '1h',
		minutes: 60,
		type: NEGATIVE
	},
	{
		id: 32,
		text: 'Pint of cider',
		value: '40m',
		minutes: 40,
		type: NEGATIVE
	},
	{
		id: 33,
		text: 'Pint of beer',
		value: '45m',
		minutes: 45,
		type: NEGATIVE
	},
	{
		id: 34,
		text: 'Birthday present',
		value: '1d',
		minutes: 1440,
		type: POSITIVE
	},
	{
		id: 35,
		text: 'Talk with relative',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 36,
		text: 'Talk with relative',
		value: '2h',
		minutes: 120,
		type: NEGATIVE
	},
	{
		id: 37,
		text: 'Vodka shot',
		value: '1h',
		minutes: 60,
		type: NEGATIVE
	},
	{
		id: 38,
		text: 'Hang out with best friend',
		value: '3h',
		minutes: 180,
		type: POSITIVE
	},
	{
		id: 39,
		text: 'Stopped by police',
		value: '5h',
		minutes: 300,
		type: NEGATIVE
	},
	{
		id: 40,
		text: 'Night in jail',
		value: '3d',
		minutes: 4320,
		type: NEGATIVE
	},
	{
		id: 41,
		text: 'No red meat today',
		value: '12h',
		minutes: 720,
		type: POSITIVE
	},
	{
		id: 42,
		text: 'No junk food today',
		value: '3h',
		minutes: 180,
		type: POSITIVE
	},
	{
		id: 43,
		text: '1 cigarette',
		value: '1d',
		minutes: 1440,
		type: NEGATIVE
	},
	{
		id: 44,
		text: 'Missed flight',
		value: '3h',
		minutes: 180,
		type: NEGATIVE
	},
	{
		id: 45,
		text: 'Hometown visit',
		value: '2d',
		minutes: 2880,
		type: POSITIVE
	},
	{
		id: 46,
		text: 'Cancer 1 stage',
		value: '3y',
		minutes: 1577846,
		type: NEGATIVE
	},
	{
		id: 47,
		text: 'Mountain retreat',
		value: '15d',
		minutes: 21600,
		type: POSITIVE
	},
	{
		id: 48,
		text: 'North Wales holiday',
		value: '20d',
		minutes: 28800,
		type: POSITIVE
	},
	{
		id: 49,
		text: 'Scotland holiday',
		value: '30d',
		minutes: 43200,
		type: POSITIVE
	},
	{
		id: 50,
		text: 'St Petersburg holiday',
		value: '30d',
		minutes: 43200,
		type: POSITIVE
	},
	{
		id: 51,
		text: 'Moscow holiday',
		value: '20d',
		minutes: 28800,
		type: POSITIVE
	},
	{
		id: 52,
		text: 'Long flight',
		value: '1d',
		minutes: 1440,
		type: NEGATIVE
	},
	{
		id: 53,
		text: 'Sleepless night',
		value: '3d',
		minutes: 4320,
		type: NEGATIVE
	},
	{
		id: 54,
		text: 'Promotion at work',
		value: '80d',
		minutes: 115200,
		type: POSITIVE
	},
	{
		id: 55,
		text: 'Lost job',
		value: '120d',
		minutes: 172800,
		type: NEGATIVE
	},
	{
		id: 56,
		text: 'Sexual intercourse',
		value: '3d',
		minutes: 4320,
		type: POSITIVE
	},
	{
		id: 57,
		text: 'Shower',
		value: '2h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 58,
		text: 'Joint of weed',
		value: '15d',
		minutes: 21600,
		type: NEGATIVE
	},
	{
		id: 59,
		text: 'Shopping as man',
		value: '3h',
		minutes: 120,
		type: NEGATIVE
	},
	{
		id: 60,
		text: 'Shopping as woman',
		value: '3h',
		minutes: 120,
		type: POSITIVE
	},
	{
		id: 61,
		text: 'Shopping as man',
		value: '3h',
		minutes: 120,
		type: NEGATIVE
	}
];

export default lifespanModifiers;
