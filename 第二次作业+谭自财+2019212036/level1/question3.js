var arr1 = [1, 3, 5, 7, 9];
var arr2 = [2, 4, 6, 8, 10];

function merge(arr1, arr2) {
    var res = [];
    var position_arr1 = 0,
        position_arr2 = 0;
    for (var i = 0; i < arr1.length + arr2.length; i++) {
        if (position_arr1 <= arr1.length - 1 && position_arr2 <= arr2.length - 1) {
            if (arr1[position_arr1] < arr2[position_arr2]) {
                res.push(arr1[position_arr1]);
                position_arr1++;
            } else if (arr1[position_arr1] == arr2[position_arr2]) {
                res.push(arr1[position_arr1]);
                position_arr1++;
                position_arr2++;
            } else {
                res.push(arr2[position_arr2]);
                position_arr2++;
            }
        } else {
            if (position_arr1 == arr1.length - 1) {
                res = res.concat(arr1.slice(position_arr1, arr1.length));
            } else {
                res = res.concat(arr2.slice(position_arr2, arr2.length));
            }

        }
    }
    return res;
}

console.log(merge(arr1, arr2)); //[1,2,3,4,5,6,7,8,9,10]