// function quickSort(arr, start, end) {
//     var length = end - start + 1;
//     if (length <= 1)
//         return arr;
//     var pivot = arr[start];
//     let pivotIindex;
//     var low = start;
//     var high = end;
//     while (low < high) {
//         while (low < high) {
//             if (arr[low] <= pivot)
//                 low++;
//             else
//                 break;
//
//         }
//         while (low < high) {
//             if (arr[high] >= pivot)
//                 high--;
//             else
//                 break;
//         }
//         swap(arr, low, high);
//     }
//     if (arr[low] < pivot) {
//         swap(arr, low, start);
//         pivotIindex = low;
//     }
//     else {
//         swap(arr, low - 1, start);
//         pivotIindex = low - 1;
//     }
//     quickSort(arr, start, pivotIindex - 1);
//     quickSort(arr, pivotIindex + 1, end)
//     return arr;
//
// }
// function swap(arr, a, b) {
//     var temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }


// function quickSort(array){
//     function sort(prev, numsize){
//         var nonius = prev;
//         var j = numsize -1;
//         var flag = array[prev];
//         if ((numsize - prev) > 1) {
//             while(nonius < j){
//                 for(; nonius < j; j--){
//                     if (array[j] < flag) {
//                         array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
//                         break;
//                     };
//                 }
//                 for( ; nonius < j; nonius++){
//                     if (array[nonius] > flag){
//                         array[j--] = array[nonius];
//                         break;
//                     }
//                 }
//             }
//             array[nonius] = flag;
//             sort(0, nonius);
//             sort(nonius + 1, numsize);
//         }
//     }
//     sort(0, array.length);
//     return array;
// }
function quickSort(arr) {
    let arrLength = arr.length;

    function sort(start, end) {
        let low = start,
            high = end,
            piviot = arr[start];
        while (low < high) {
            while (low < high) {
                if (arr[high] < piviot) {
                    swap(arr, low, high);
                    break;
                } else {
                    high--;
                }
            }
            while (low < high) {
                if (arr[low] > piviot) {
                    swap(arr, low, high);
                    break;
                } else {
                    low++;
                }
            }
        }

        sort(0, low);
        sort(low + 1, arrLength - 1)

        function swap(arr, a, b) {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp
        }
    }
    sort(0,arrLength-1)
}
var arr = [4, 1, 3, 5, 7, 5, 14, 64, 3, 7];
quickSort(arr)
// console.log(arr)
// console.log(arr1)

// O (nlogn)