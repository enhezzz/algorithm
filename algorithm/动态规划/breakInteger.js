// function breakInteger(n){
//     let max = -1;
//     if(n == 1) return 1;
//     for(var i = 1;i<n;i++){
//         var _max = Math.max(i*(n-i),i*arguments.callee(n-i));
//         if(_max>max) max = _max;
//     }
//     return max;
// }
function breakInteger(n){
    let max = -1;                            //可以考虑以空间换时间来缩短执行时间
    if(n == 1) return 1;
    for(var i = 1;i<n;i++){
        max = Math.max(max,i*(n-i),i*breakInteger(n-i))
    }
    return max;
}
// function breakInteger(n) {
//    let arr = new Array(n+1);
//    arr[1] = 1;
//    for(var i = 2;i<n+1;i++){
//        var max = -1;
//     for(var j = 1;j<i;j++){
        
//         var _max = Math.max(arr[j]*arr[i-j],j*(i-j));
//         if(_max>max) max = _max;
//     }
//         arr[i] = max;
//    }
//     return arr[n]
// };

console.log(breakInteger(8))