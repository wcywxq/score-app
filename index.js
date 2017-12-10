
/**
 * Created by 宣棋 on 2017/12/10.
 */
/*
require(['add'],function (add1) {//第一个参数是你依赖的模块，第二个参数是你要执行的代码，参数代表第一个参数返回的东西
    console.log(add1(3,4));
});*/
require(['sortArray'],function (sortArray) {//requireJS AMD 提前执行 推崇依赖前置
    var arr = [1,3,5,90,13,2];
    var object = {
        name:'zs',
        age:15
    };
    console.log(sortArray(arr));
    console.log(sortArray(object));
});

define(function (sortArray) {//seaJS  CMD 延迟执行 推崇依赖就近
    var arr = [1,3,5,90,13,2];
    var object = {
        name:'zs',
        age:15
    };
    var sortArray = require('sortArray');
    console.log(sortArray(arr));
    console.log(sortArray(object));
});