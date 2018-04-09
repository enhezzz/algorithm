class MyPromise {
    constructor(func) {
        this.normalHandler = null;   //成功处理器
        this.normalData = undefined;    // resolve数据
        this.errorData = undefined;     //error数据
        this.errorHandler = null;       //错误处理器
        this.resolver = null;
        func(this.resolve.bind(this), this.reject.bind(this));

    }
    _isFunction(arg) {
        return typeof arg === 'function';
    }
    resolve(data) {
        this.normalData = data;
        if (this._isFunction(this.normalHandler)){  //针对异步操作，resolved后调用回掉函数
            let returnVal = this.normalHandler(this.normalData);//当这个callback包含异步操作时，gg。。。
            // console.log(returnVal)
            this.resolver(returnVal);
        }
    }
    reject(error) {

    }
    then(normalHandler) {
        let returnVal = undefined;
        if (this.normalData != undefined) {         //针对同步操作，即当前已resolved
            returnVal = normalHandler(this.normalData);   
            return new MyPromise(function (resolve, reject) {
                resolve(returnVal)
            })
        } else
            this.normalHandler = normalHandler;
            return new MyPromise((resolver, reject)=> {
               this.resolver = resolver;
            })

    }
    catch(errorHandler) {
        this.errorHandler = errorHandler;
    }
}
new MyPromise(function (resolve, reject) {
   setTimeout(() => {
    resolve(1)
   }, 2000);
        
}).then(function (val) {
    console.log(val);
  
    return 3
   
}).then(function(val){
    console.log(val);
    return 4
})
.then(function(val){
    console.log(val);
    // return 4
})
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve(1)
//     }, 3000);
// }).then(data => {
//     console.log(data);
//     setTimeout(() => {
        
//         return 4
//     }, 1000);
// }).then(data =>{
//     console.log(data)
// })