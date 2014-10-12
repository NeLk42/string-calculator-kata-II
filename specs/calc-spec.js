var calc = require('../src/calc');

describe('String calculator', function() {
	it('should return zero if there is no text', function(){
		expect(calc.add()).toBe(0);
	});

	it('should return zero if the text is "" ', function(){
		expect(calc.add('')).toBe(0);
	});

	it('should return n if the text is a number n', function(){
		expect(calc.add('42')).toBe(42);
	});

	it('should return sum(a,b) if the text is "a,b" ', function(){
		expect(calc.add('42,21')).toBe(63);
	});
});
