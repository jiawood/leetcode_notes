function scheduleCourse(courses) {
    courses.sort((a,b)=>a[1]-b[1]); //按照花费时间从小到大排列
    const q=[];
    let total=0;
    for(const cours of courses){
        const ti=cours[0],di=cours[1]; 
        if(total+ti<=di){
            total+=ti
            q.push(ti)
            // q.sort((a,b)=>a-b)
        }else if(q.length&&q[q.length-1]>=ti){
            total-=q[q.length-1]-ti
            q.pop()
            q.push(ti)
            // q.sort((a,b)=>a-b)
        }
        q.sort((a,b)=>a-b)
    }
    return q.length
};