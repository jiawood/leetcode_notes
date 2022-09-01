/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    const n = prices.length
    const arr = new Array(n)
    for(let i = 0; i < n; i++){
        let j = i + 1;
        while(j < n){
            if(prices[j] <= prices[i]){
                arr[i] = prices[i] - prices[j]
                break
            }
            j++
        }
        if(arr[i] == undefined){
            arr[i] = prices[i]
        }
    }
    return arr 
};