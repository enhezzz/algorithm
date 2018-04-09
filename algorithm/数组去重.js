function removeRepeat(arr){
    for(let i = 0;i<arr.length;i++)
        for(let j = i+1;j<arr.length;j++){
            if(arr[i] == arr[j])
            arr.splice(j,1);
        }
}
let arr=[1,3,1,5,2,1,2]
removeRepeat(arr)
console.log(arr)