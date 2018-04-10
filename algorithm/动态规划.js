// 动态规划解决方案从底部开始解决问题， 将所有小问题解决掉， 然后合并成一个整体解决方案， 从而解决掉整个大问题 。
function dynFib1(n){
    if(n ===1 || n===2)
    return 1;
    let arr = [];
    arr[0] = 1,arr[1] = 1;
    for(let i = 2;i<n;i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    // console.log(arr)    
    return arr[n-1];
}
let startTime1 = new Date().getTime();
console.log(dynFib1(40))
let endTime1 = new Date().getTime();
console.log('动态规划所花时间：%d',endTime1 - startTime1)



// 递归实现
function dynFib(n){
    if(n<2)
    return n;
    else
    return dynFib(n-1)+dynFib(n-2)
    
}
let startTime = new Date().getTime();
console.log(dynFib(40))
let endTime = new Date().getTime();
console.log('递归所花时间：%d',endTime - startTime)