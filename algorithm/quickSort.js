//  function quickSort(arr){
// 	if(arr.length <= 1)
// 	return arr;
// 	var selectedIndex = Math.floor((arr.length-1)/2);
// 	var selectedVal = arr.splice(selectedIndex,1)[0];
// 	var left = [];
// 	var right = [];

// 	for(var i = 0;i < arr.length;i++){
// 		if(arr[i] < selectedVal)
// 			left.push(arr[i]);
// 		else
// 			right.push(arr[i])
// 	}
// 	return quickSort(left).concat([selectedVal],quickSort(right));
// }
// quickSort([1,5,2,3,6,2,4])

// 平均时间复杂度为 O（n^2)，空间复杂度为O（logn）

// 

// function quickSort(arr,start,end) {
//     var length = end - start + 1;
//     if (length <= 1) {
//         return arr;
//     }
//     var pivot = arr[start];
//     var pivotIndex = start;
//     var low = start+1;
//     var high = end;
//     while (low < high) {
//         if (arr[high] < pivot) {
//             swap(arr, high, pivotIndex);
//             pivotIndex = high;
//         } else {
//             high--;
//         }
//         if (arr[low] > pivot) {
//             swap(arr, low, pivotIndex);
//             pivotIndex = low;
//         } else {
//             low++;
//         }

//     }
//     if (low == high && arr[high]<pivot){
//         swap(arr, pivotIndex, low);
//         pivotIndex = low;
//     }else{
//         swap(arr, pivotIndex, low-1);
//         pivotIndex = low -1;
//     }
//     quickSort(arr,0,pivotIndex-1);
//     quickSort(arr,pivotIndex+1,end);
//     return arr;
// }
// function swap(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }
// var arr = [3,1,6,2,0]
// quickSort(arr,0,arr.length-1)
// console.log(arr)

function quickSort(arr, start, end) {
    var length = end - start + 1;
    if (length <= 1)
        return arr;
    var pivot = arr[start];
    let pivotIindex;
    var low = start;
    var high = end;
    console.log(low, high)
    while (low < high) {
        while (low < high) {
            if (arr[low] <= pivot)
                low++;
            else
                break;

        }
        while (low < high) {
            if (arr[high] >= pivot)
                high--;
            else
                break;
        }
        console.log(low, high)
        swap(arr, low, high);
        // console.log(arr)
    }
    // console.log(low,high)
    // console.log(arr)
    if (arr[low] < pivot) {
        swap(arr, low, start);
        pivotIindex = low;
    }

    else {
        swap(arr, low - 1, start);
        pivotIindex = low - 1;
    }
    quickSort(arr, start, pivotIindex - 1);
    quickSort(arr, pivotIindex + 1, end)
    return arr;

}
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
var arr = [4, 1, 3, 5, 7, 5, 14, 64, 3, 7];
quickSort(arr, 0, arr.length - 1)
console.log(arr)
// console.log(arr1)