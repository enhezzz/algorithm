// function insertSort(arr) {
//     let arrLength = arr.length;
//     if (arrLength <= 1)
//         return arr;
//     for (let i = 1; i < arrLength; i++) {
//         let j = i - 1;
//         let temp = arr[i];
//         while (arr[j]>temp&&j>=0){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = temp;
//     }
//     return arr
// }
// insertSort([5,4,6,1,3,5])

//最好O(n) 最坏O(n^2)

function insertSort(arr){
    let arrLength = arr.length;
    for(let i = 1;i < arrLength;i++ ){
        while(i){
            if(arr[i]<arr[i-1]){
                swap(arr,i);
                i--;
            }else break;

        }
    }
    return arr;
}
function swap(arr,i){
    let temp = arr[i];
    arr[i] = arr[i-1];
    arr[i-1] = temp;
}
console.log(insertSort([1,5,2,6,10,9,6]))