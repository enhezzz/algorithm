function decodeGame(str){
    let length = str.length;
    let arr = new Array(length);
    if(str[0] == 0) arr[0] = 0;
    else arr[0] = 1;
    for(var i = 1;i<length;i++){
        if(str[i-1]>2) arr[i] = arr[i-1];
        else if(0<str[i-1]<=2 && str[i]<=6){
            if(i==1 && str[i]!=0) arr[1] = 2;
            else if(i==1 && str[i]==0) arr[1] = 1;
            else if(i==2) arr[2] = 3;
            else arr[i] = arr[i-1]+arr[i-2];
        }else if(0 == str[i-1]){
            arr[i] = arr[i-1]
        }
    }
    return arr[length-1]
}
console.log(decodeGame("10"))