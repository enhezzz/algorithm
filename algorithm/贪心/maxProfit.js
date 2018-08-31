/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
*/
function maxProfit(arr){
    var sum = 0;
    for(var i = 1;i<arr.length;i++){
        if(arr[i-1]<arr[i]){
            sum += arr[i] - arr[i-1];
        }
    }
    return sum
}
console.log(maxProfit([7,1,5,3,6,4]))