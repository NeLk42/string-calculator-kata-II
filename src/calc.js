var calc = {
    add: function(text) {
        var result = text ? text : 0;
        if (result != 0){
            var delimIndex = text.indexOf('//')
            if(delimIndex >= 0) {
                var numbers = this.getNumsDelim(text)
                result = this.getSum(numbers)
            }
            else {
                var numbers = this.getNumbers(text)
                result = this.getSum(numbers)
            }
        }
        return result
    },
    getNumbers: function(text) {
        var res = text.replace('\n',',').split(',')
        return res
    },
    getNumsDelim: function (text) {
        var subtext = text.substring(2)
        var textArray = subtext.split('\n')
        var res = textArray[1].split(textArray[0])
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



