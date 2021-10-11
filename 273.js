/**
 * @param {number} num
 * @return {string}
 */

const nt = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
        "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"],
      tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"],
      bmt = ["Billion","Million","Thousand"],
      Billion = 1000000000,
      Million = 1000000,
      Thousand = 1000

const num2str = (num) => {
    const res = []
    if(num >= 100){
      res.push(nt[num / 100 | 0])
      res.push('Hundred')
      num %= 100  
    }
    if(num >= 20){
        res.push(tens[num / 10 | 0])
        num %= 10
    }
    if(num !== 0){
        res.push(nt[num])
    }
    return res.join(' ')
}

var numberToWords = function(num) {
    const res = []
    if(num === 0){
        return nt[0]
    }
    if(num >= Billion){
        res.push(num2str(num / Billion | 0))
        res.push(bmt[0])
        num %= Billion
    }
    if(num >= Million){
        res.push(num2str(num / Million | 0))
        res.push(bmt[1])
        num %= Million
    }
    if(num >= Thousand){
        res.push(num2str(num / Thousand | 0))
        res.push(bmt[2])
        num %= Thousand
    }
    if(num !== 0){
        res.push(num2str(num))
    }
    return res.join(' ')
};