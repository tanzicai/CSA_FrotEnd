var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
         {name:'lisi',age:29},{name:'wangwu',age:24}];

function sortby(key , way = true){//way为true表示默认按照升序排列
    for(var i= 0; i< arr.length-1; i++){
        for(var j = i+ 1 ;j< arr.length ;j++){
            if(way){
                if(arr[i][key]>arr[j][key]){
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }else{
                if(arr[i][key]<arr[j][key]){
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
}

console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name',false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响