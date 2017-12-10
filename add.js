
/**
 * Created by 宣棋 on 2017/12/10.
 */
define(function () {//定义一个模块
    function add(x,y) {
        return x+y;
    }
    return add;//只是返回函数，并没有调用,因为add是局部变量，所以要返回
});