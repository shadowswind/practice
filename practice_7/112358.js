/**
 * Created by root on 7/14/17.
 */
var arr = [];
arr.length = 200;
arr[0]=1;
arr[1]=1;
for (var i =2;i<201;i++){
    arr[i]= arr[i-1]+arr[i-2];
}
console.log(arr);