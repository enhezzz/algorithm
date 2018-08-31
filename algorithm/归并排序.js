function mergeSort(arr){
    let arrLength = arr.length;
    if(arrLength === 1)
    return arr;
    let midIndex = Math.floor(arrLength/2);
    console.log(midIndex)
    let leftArr = arr.slice(0,midIndex),rightArr = arr.slice(midIndex);
    let result = [];
    let a = mergeSort(leftArr),b = mergeSort(rightArr);
    while(a.length>0&&b.length>0){
        if(a[0]>b[0]){
            result.push(b.shift());
            

        }else{
            result.push(a.shift());
            ;
        }
    }
    

    return result.concat(a).concat(b);
}
console.log(mergeSort([3,5,15,78,13,64,7]))

// O(n log n)