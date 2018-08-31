function binaryFind(arr,startIndex,endIndex,finder){
    let midIndex = (startIndex+endIndex)/2;
    if(finder == arr[midIndex]){
        return midIndex;
    }else if(arr[midIndex]>finder){
        return arguments.callee(arr,startIndex,midIndex,finder);
    }else if(arr[midIndex]<finder){
        return arguments.callee(arr,midIndex,endIndex,finder);
    }
}
console.log(binaryFind([1,2,3,4],0,4,2));

//最坏的情况是O(logn)