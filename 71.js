// 简化路径，找到一个特别简单的思路，先按照 / 来切分，然后依次判断数组里面的元素
// 分情况讨论，放入数组中然后最后合并
/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    const arr = path.split('/')
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '' || arr[i] === '.'){
            continue
        }else if(arr[i] === '..'){
            res.pop()
        }else{
            res.push(arr[i])
        }
    }
    return '/' + res.join('/')
};

// 第二种思路是将 两个'/'之间的字符用双指针来写，其实跟第一种一样啦
/**
 * @param {string} path
 * @return {string}
 */
// 手写分词
var simplifyPath = function(path) {
    let res = []
    for(let i = 0; i < path.length;){
        if(path[i] === '/'){
            let j = i + 1 
            let tmp = ''
            while(j < path.length && path[j] !== '/'){
                tmp += path[j]
                j++
                i++
            }
            i++
            if(tmp==='..'){
                res.pop()
            }else if(tmp==='.' || tmp===''){
                continue 
            }else {
                res.push(tmp)
            }
        }
    }
    return '/' + res.join('/')
};