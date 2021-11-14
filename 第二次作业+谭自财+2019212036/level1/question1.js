var arr = [1, 2, 3, 3, 4, 'a', 'a', 'b', 'c'];

function reduce(arr) {
    var res = [];
    var lable = [];
    for (var i = 0; i < arr.length; i++) {
        if (!lable[arr[i]]) {
            res.push(arr[i]);
            lable[arr[i]] = 1;
        }
    }
    return res;
}

console.log(reduce(arr)); //[1, 2, 3, 4, "a", "b", "c"]