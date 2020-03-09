import { currency } from './masks';

describe('test if all utils function be right', () => {
	it('validate currency masking it correctly', () => {
		expect(currency.mask(0.3)).toBe('0,30');
		expect(currency.mask(1.3)).toBe('1,30');
		expect(currency.mask(10.3)).toBe('10,30');
		expect(currency.mask(100.3)).toBe('100,30');
		expect(currency.mask(1003.3)).toBe('1.003,30');
		expect(currency.mask(1000906.03)).toBe('1.000.906,03');
	});
});
