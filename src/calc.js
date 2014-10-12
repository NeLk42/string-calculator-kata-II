var calc = {
	add: function(text) {
		result = text ? text : 0;
		if (result != 0){
			var numbers = this.getNumbers(text)
			result = this.getSum(numbers)
		}

		return result
	},
	getNumbers: function(text) {
		var res = text.split(',')
		return res
	},
	getSum: function(array){
		var res = 0
		for(var i=0; i<array.length; i++){
			res += parseInt(array[i])
		}
		return res
	}
}

module.exports = calc;
