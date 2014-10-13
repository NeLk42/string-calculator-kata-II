var calc = {
    add: function(text) {
        var result = text ? text : 0;
        if (result != 0){
            var delim = text.indexOf('//')
            var numbers = this.getNumbers(text, delim)
            result = this.getSum(numbers)
        }
        return result
    },
    getNumbers: function(text,delim) {
        if(delim < 0){
            var res = text.replace('\n',',').split(',')
        } else {
            var subtext = text.substring(2)
            var textArray = subtext.split('\n')
            var res = textArray[1].split(textArray[0])
        }
        return res
    },
    getSum: function(array){
        var res = 0,
            negative = false,
            negativeValues = 'Negatives not allowed :'
        for(var i=0; i<array.length; i++){
            if(array[i] >= 0){
                res += parseInt(array[i])
            } else {
                negative = true
                negativeValues += ' ' + array[i]
            }
        }
        if (negative){
            return negativeValues
        } else{
            return res
        }
    }
}

module.exports = calc;



