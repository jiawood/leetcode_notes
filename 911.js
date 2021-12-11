/**
 * @param {number[]} persons
 * @param {number[]} times
 */
 var TopVotedCandidate = function(persons, times) {
    const n = persons.length
    this.n = n 
    this.times = times 
    this.ans = new Array(n)  // 记录当前时刻的当选人是谁
    let cnts = new Array(n).fill(0)  // 每个候选人的票数
    let cur = -1  // 当前候选人的最大次数
    for(let i =0;i < times.length; i++){
        cnts[persons[i]]++  // 对候选人次数+1
        this.ans[i] = i-1 > 0 ? this.ans[i-1] : persons[i]
        if(cnts[persons[i]] >= cur || cur === -1){
            cur =cnts[persons[i]]
            this.ans[i] = persons[i] 
        }
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let l = 0; r = this.n
    if(t > this.times[r - 1]){
        return this.ans[r - 1]
    }
    while(l < r){
        let mid = l + ((r - l) / 2) | 0
        if(this.times[mid] <= t){
            l = mid + 1
        }else{
            r = mid
        }
    }
    return this.ans[r - 1]
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */