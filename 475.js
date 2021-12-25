// 这题就是逻辑上不太好想，其实就是判断每一个房间距离哪个供暖器会近一些
// 有些供暖器会报废，并不能提供价值
// 唉 这个题看题解之后再写的，其实并不符合直觉
var findRadius = function(houses, heaters) {
    houses.sort((a,b) => a - b)
    heaters.sort((a,b) => a - b)
    let ans = 0
    for(let i = 0,j=0; i < houses.length; i ++){
        let cur = Math.abs(houses[i]-heaters[j])
        while(houses[i] >= heaters[j] && j < heaters.length){
            cur = Math.min(cur,houses[i] - heaters[j++])
        }
        if(j < heaters.length){
            cur = Math.min(heaters[j] - houses[i],cur) // 对于当前的房间来说最近的一个供暖器的距离，左右两边的供暖器取最小
        }
        ans = Math.max(cur,ans) // 对于所有的房间结果取最大
        if(j > 0){
            j--  // 为什么要-1？ 因为对于间隔在前后两个供暖器的房间，可能还是前面的那个房间给它供暖近，所以要退一步
        }
    }
    return ans 
};

// 需要转换一下题目的思路，找每个房间的最近的前后两个供暖器
// 遍历房间，找到第一个比他大的供暖器，然后比较前后两个供暖器距离当前房间的距离
var findRadius = function(houses, heaters) {
    houses.sort((a,b) => a -b)
    heaters.sort((a,b) => a - b)
    heaters.unshift(Number.MIN_SAFE_INTEGER)
    heaters.push(Number.MAX_SAFE_INTEGER)
    let ans = 0
    for(let i = 0, j = 0; i < houses.length; i++){
       while(houses[i] >= heaters[j] && j < heaters.length){
           j++
       }
       ans = Math.max(ans,Math.min(houses[i] - heaters[j-1], heaters[j] - houses[i])) 
    }
    return ans 
};

