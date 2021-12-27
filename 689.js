 // 主要是要维护3个数组
 // 这题思考起来太难了，整体做出来也花了很多时间
 var maxSumOfThreeSubarrays = function(nums, k) {
    const cur = new Array(nums.length - k + 1)
    let sum = 0
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            sum += nums[i]
        }else{
            cur[j++] = sum 
            sum += nums[i] - nums[i-k]
        }
    }
    cur[j] = sum 

    const left = new Array(cur.length)
    left[0] = 0
    left[1] = 0
    for(let i = 2; i < cur.length; i++){
        if(cur[i-1] > cur[left[i-1]]){
            left[i] = i - 1 
        }else{
            left[i] = left[i-1]
        }
    }

    const right = new Array(cur.length)
    right[cur.length - 1] = cur.length -1
    right[cur.length - 2] = cur.length - 1
    for(let i = cur.length - 3; i >= 0; i--){
        if(cur[i+1] >= cur[right[i+1]]){
            right[i] = i + 1 
        }else{
            right[i] = right[i+1]
        }
    }

    let max = 0
    let res = []
    for(let i = k;i < cur.length - k; i++){
        if((cur[i] + cur[left[i - k + 1]] + cur[right[i + k - 1]])>max){
            max = cur[i] + cur[left[i - k + 1]] + cur[right[i+k-1]]
            res = [left[i-k+1],i,right[i+k-1]]
        }
    }
    return res 
};