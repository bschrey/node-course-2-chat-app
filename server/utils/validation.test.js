const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		let res = isRealString(98);
		expect(res).toBe(false);
	});

	it('should reject only spaces', () => {
		let res = isRealString('     ');
		expect(res).toBe(false);
	});

	it('should allow strings with non-space characters', () => {
		let res = isRealString('  a  a  a ');
		expect(res).toBe(true);
	});
	
});