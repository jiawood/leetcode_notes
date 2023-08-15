/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const n = s.length
    const replaceStr = Array(n);
    const replaceLen = Array(n).fill(1);

    for(let i = 0; i < indices.length; i++){
        const idx = indices[i]
        if(s.startsWith(sources[i], idx)){
            replaceStr[idx] = targets[i]
            replaceLen[idx] = sources[i].length
        }
    }

    let ans = []
    for(let i = 0; i < n; i += replaceLen[i]){
        ans.push(replaceStr[i] ? replaceStr[i] : s.charAt(i))
    }
    return ans.join("")
};