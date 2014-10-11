var calc = require('../src/calc');

describe('String calculator', function() {
	it('should return zero if there is no input', function(){
		expect(calc.add()).toBe(0);
	});

	it('should return zero if the input is "" ', function(){
		expect(calc.add('')).toBe(0);
	});
});
