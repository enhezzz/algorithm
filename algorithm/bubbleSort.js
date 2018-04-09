function bubbleSort(arr){
    let arrLength = arr.length;
    if(arr.arrLength <= 1)
    return arr;
    for(let i = 0;i < arrLength-1;i++)
        for(let j = 0;j < arrLength-1-i;j++){
           if(arr[j]>arr[j+1])
           swap(arr,j,j+1);
        }
    return arr;
}
function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
bubbleSort([1,6,9,4,2]);
//时间复杂度O(N^2)