function increSequence(array, step) {
    let arr = array.slice(0, array.length);
    arr.sort(compare);
    removeRepeat(arr);
    let startPointerOne = 0, startPointerTwo = 0;
    let amountOne = 0, amountTwo = 0;
    let findOne = false, first = false;
    let finArr = [];
    let arrLength = arr.length;
    if (arrLength <= 1)
        return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + step === arr[i + 1]) {

            if (findOne)
                amountTwo++
            else
                amountOne++;

        } else {

            if (first && amountOne - amountTwo > 0) {
                amountTwo = 0;
                startPointerTwo = i + 1;
            } else {
                if (findOne) {
                    amountOne = 0;
                    startPointerOne = i + 1;
                    // findOne = false
                }
                findOne = !findOne;
                first = true;

            }

        }
    }

    if (amountTwo > amountOne) {
        let index = 0;
        let sum = amountTwo + 1
        while (sum--) {
            finArr.push(arr[startPointerTwo] + index * step);
            index++;
        }

    } else {
        let index = 0;
        let sum = amountOne + 1
        while (sum--) {
            finArr.push(arr[startPointerOne] + index * step);
            index++;
        }
    }

    console.log(finArr)
    return finArr;
}
function removeRepeat(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++)
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[i] === arr[j])
                arr.splice(j, 1);
        }
}
function compare(a, b) {
    return a - b;
}
increSequence([1, 2, 3, 4, 8, 6, 12, 13, 14,15,14,13], 1);

