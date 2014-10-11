var calc = require('../src/calc')

describe('String calculator', function() {
	it('should return zero if there is no input', function(){
		expect(calc.add()).toBe(0)
	})
})
