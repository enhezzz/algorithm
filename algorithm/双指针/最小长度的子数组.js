function minLength(arr,sum){
    let _arr = [];
    for(var i = 0;i<arr.length;i++){
        var _sum = arr[i];
        _arr[i] = [];
        _arr[i].push(arr[i])
        for(var j = i+1;j<arr.length;j++){
            if(_sum<sum){
                // console.log('--')
                _sum += arr[j];
                _arr[i].push(arr[j]);
            } 
            else{
                break;
            }
        }
        if(_arr[i].reduce(function(a,b){
            return a+b
        },0)<sum)
        _arr[i] = undefined

    }
    _arr = _arr.filter(function(e){
        return e!=undefined
    })
    var minLength = _arr[0].length;
    var index = 0;
    for(var k = 1;k<_arr.length;k++){
        
        if(_arr[k].length<minLength) {
            minLength = _arr[k].length;
            index = k
        }
    }
    return _arr[index]
}
console.log(minLength([2,3,1,2,4,3],7))