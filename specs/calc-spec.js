var calc = require('../src/calc');

describe('String calculator add() method', function() {
	it('should return 0 if there is no text', function(){
		expect(calc.add()).toBe(0);
	});

	it('should return 0 if the text is "" ', function(){
		expect(calc.add('')).toBe(0);
	});

	it('should return 42 if the text is 42', function(){
		expect(calc.add('42')).toBe(42);
	});

	it('should return 63 if the text is "42,21" ', function(){
		expect(calc.add('42,21')).toBe(63);
	});

	it('should return 315 if the text is "105,84,63,42,21" ', function(){
		expect(calc.add('105,84,63,42,21')).toBe(315);
	});

	it('should return 105 if the text is "63,42\n21" ', function(){
		expect(calc.add('63,42\n21')).toBe(126);
	});

    it('should return 105 if the text is \/\/;\\n63;42;21 ', function(){
        expect(calc.add('//;\n63;42;21')).toBe(126);
    });

    it('should raise exception if receives negative values', function(){
        expect(calc.add('1,-2')).toBe('Negatives not allowed : -2');
    });
});