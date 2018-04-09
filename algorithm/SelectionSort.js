function selectionSort(arr) {
    let arrLength = arr.length;
    if (arrLength <= 1)
        return arr;

    for (let i = 0; i < arrLength; i++) {
        let min = arr[i], index = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        if (index != i) {

            let temp = arr[i];
            arr[i] = min;
            arr[index] = temp;
        }
    }
    return arr;
}
selectionSort([1, 5, 3, 4, 8, 3, 9])
//假定最小值
// 选择排序的时间复杂度：简单选择排序的比较次数与序列的初始排序无关。
//  假设待排序的序列有 N 个元素，则比较次数永远都是N (N - 1) / 2。
//  而移动次数与序列的初始排序有关。当序列正序时，移动次数最少，为 0。当序列反序时，移动次数最多，为3N (N - 1) /  2。

// 所以，综上，简单排序的时间复杂度为 O(N2)。