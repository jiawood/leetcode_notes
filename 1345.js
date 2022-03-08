/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps = function(arr) {
    let map = new Map()
    let explored = new Set()
    for(let i = 0;i < arr.length; i++){
        if(map.has(arr[i])){
            map.get(arr[i]).push(i)
        }else{
            map.set(arr[i],[i])
        }
    }
    let nodes = [0]
    let step = 0 
    explored.add(0)
    while(nodes.length > 0){
        let nxt = []
        for(let cur of nodes){
            if(cur === arr.length - 1){
                return step 
            }
            if(map.has(arr[cur])){
                for(let other of map.get(arr[cur])){
                    if(!explored.has(other)){
                        nxt.push(other)
                        explored.add(other)
                    }
                }
                map.delete(arr[cur])
            }
            if(!explored.has(cur+1)){
                nxt.push(cur+1)
                explored.add(cur+1)
            }
            if(cur > 0 && !explored.has(cur-1)){
                nxt.push(cur-1)
                explored.add(cur-1)
            }
        }
        step++
        nodes = nxt 
    }
    return arr.length - 1
};