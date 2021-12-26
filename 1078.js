var findOcurrences = function(text, first, second) {
    const t = text.split(' ')
    const res = []
    for(let i = 0; i < t.length; i++){
        if(t[i] !== first){
            continue 
        }
        if(t[i] === first && i + 1 < t.length && t[i+1] === second){
            if(i + 2 < t.length){
                res.push(t[i+2])
            }
        }
    }
    return res 
};