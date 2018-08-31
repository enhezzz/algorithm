function valid(str){
    var arr = str.split("");
    var newArr = [];
    newArr.push(arr.shift());

    for(var i = 0;arr.length!=0;){
        switch (arr[i]) {
            case ")":
                if(newArr[newArr.length-1] == "("){
                    newArr.pop();
                    arr.shift();
                }else{
                    newArr.push(arr.shift())
                }
                break;
            case "}":
                if(newArr[newArr.length-1] == "{"){
                    newArr.pop();
                    arr.shift()
                }else{
                    newArr.push(arr.shift())
                }
                break;
            case "]":
                if(newArr[newArr.length-1] == "["){
                    newArr.pop();
                    arr.shift()
                }else{
                    
                    newArr.push(arr.shift())
                }
                break;
            default:
                newArr.push(arr.shift());
                
                break;
        }
    }
    return newArr.length == 0?true:false;
}
console.log(valid('{[]}'))