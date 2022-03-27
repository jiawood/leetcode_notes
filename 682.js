var calPoints = function(ops) {
    const res = []
    for(let i = 0; i < ops.length; i++){
        let o = ops[i]
        let n = res.length 
        if(o === '+'){
            res.push(res[n-1] + res[n-2])
        }else if(o === 'C'){
            res.pop()
        }else if(o === 'D'){
            res.push(res[n-1]*2)
        }else{
            res.push(+o)
        }
    }
    return res.reduce((a,b) => a + b,0)
};