/**
 * Created by 宣棋 on 2017/12/10.
 *//*
define(function () {
   function sortArray(arr) {
       return arr.sort(function (a,b) {//sort:对数组排序，不生成副本，相当于直接改动数组，因此直接返回,
                                       // 按照数字的字符编码去排，不是按照数字大小去排，所以要进行比较
           return a-b;//返回小于0的值，从小到大排序，反之从大到小排序
       });
   }
   return sortArray;
});*/
define(['isArray'],function (isArray) {//依赖于模块isArray,然后判断是不是数组，如果是则排序，否则输出提示.
    function sortArray(arr) {
        if(isArray(arr)){
            return arr.sort(function (a,b) {
                return a-b;
            });
        }else{
            return '请输入数组'
        }
    }
    return sortArray;
});