var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(arr) {
  for(var i in arr){
      if(Array.isArray(arr[i])){
        fun1(arr[i]);
      }
    else{
        res.push(arr[i]);
    }
  }
}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];