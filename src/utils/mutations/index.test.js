import { toHashMap } from './index';

const mock = [
	[1565308800000, 24960],
	[1565568000000, 24960],
	[1565654400000, 24963.28],
	[1565740800000, 24966.55],
];

describe('test if all utils function be right', () => {
	it('validate toHashMap transform correctly', () => {
		expect(toHashMap(mock)).toStrictEqual({
			'08/08/2019': { day: '08/08/2019', yieldValue: 24960 },
			'11/08/2019': { day: '11/08/2019', yieldValue: 24960 },
			'12/08/2019': { day: '12/08/2019', yieldValue: 24963 },
			'13/08/2019': { day: '13/08/2019', yieldValue: 24966 },
		});
	});
});
