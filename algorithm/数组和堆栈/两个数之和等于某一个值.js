function find(arr,num){
    let one =undefined,two = undefined;
    arr.forEach((e,index)=>{
        
        let _index = arr.indexOf(num-e,index+1);
        if(_index == -1){
            return;
        }else{
            one = e;
            two = arr[_index];
        }
        // let another =  == -1?: 
    })
    console.log(one,two)
}
find([1,2,3,2,4],5)