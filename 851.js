// 拓扑排序，先统计每个编号的入度，入度为0的排在前面，在这个题中，入度为0的quiet等于它本身
var loudAndRich = function(richer, quiet) {
    const map = new Map()
    const degree = new Array(quiet.length).fill(0)
    const ans = new Array(quiet.length).fill(0).map((_,i) => i)
    for(let i = 0; i < richer.length; i++){
        if(map.get(richer[i][0])){
            map.get(richer[i][0]).push(richer[i][1])
        }else{
            map.set(richer[i][0],[richer[i][1]])
        }
        degree[richer[i][1]]++
    }
    const queue = []
    for(let i = 0; i < degree.length; i++){
        if(degree[i] === 0){
            queue.push(i)
        }
    }
    while(queue.length){
        const q = queue.shift()
        if(map.get(q)){
            const others = map.get(q)
            for(const other of others){
                if(quiet[ans[other]] > quiet[ans[q]]){
                    ans[other] = ans[q]
                }
                degree[other]--
                if(degree[other] === 0){
                    queue.push(other)
                }
            }
        }
    }
    return ans 
};