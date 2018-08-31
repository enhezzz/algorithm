function rotate(arr,k){
    let length = arr.length;

    let firstArr = arr.slice(0,length-k),
        secondArr = arr.slice(length-k);
        return secondArr.concat(firstArr)
}
// var rotate = function(nums, k) {
//     for(var i= 1; i<=k; i++){
//         nums.unshift(nums.pop())
//     }
// };
console.log(rotate([1,2,3,4,5,6,7],3))