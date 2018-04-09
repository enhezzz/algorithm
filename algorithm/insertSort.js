function insertSort(arr) {
    let arrLength = arr.length;
    if (arrLength <= 1)
        return arr;
    for (let i = 1; i < arrLength; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (arr[j]>temp&&j>=0){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr
}
insertSort([5,4,6,1,3,5])

//最好O(n) 最坏O(n^2) 