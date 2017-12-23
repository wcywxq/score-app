/**
 * Created by 宣棋 on 2017/12/10.
 */
requirejs.config({//换名字的时候用,如果不想配置的话，就必须把你要引入的js文件改名字改成jquery
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function ($) {//需要哪些模块就引进来哪些文件

    function Dialog(arg) {//定义一个Dialog类
        var _this = this;//此时的this指向的是dialog_new对象，用_this存一下此时的this指向

        this.defaultValue ={//如果没传参数，默认样式，否则会用extend覆盖
            width:300,
            hight:200
        };
        $.extend(this.defaultValue,arg);//合并对象

        //html内容
        this.$mask = $('<div class="mask"></div>');
        this.$container = $('<div class="container"></div>');
        this.$title = $('<div class="title"></div>');
        this.$h2 = $('<h2></h2>').html(this.defaultValue.title);
        this.$close = $('<span class="close">✘</span>')
            .on('click',function () {//点击的时候调用close()
                _this.close();
            });
        this.$content = $('<div class="content"></div>');
    }
    Dialog.prototype.open = function () {
        this.$container.appendTo(this.$mask).append(this.$title).append(this.$content)
            .css({
                width:this.defaultValue.width,
                height:this.defaultValue.height,
                marginLeft:-this.defaultValue.width/2,//居中
                marginTop:-this.defaultValue.height/2//居中
            });
        this.$title.append(this.$h2).append(this.$close);
        this.$content.load(this.defaultValue.content);//load：加html片段，对于多个弹出层来说很有用
        $('body').append(this.$mask);
    };

    Dialog.prototype.close = function () {//prototype:方法写到原型中
        this.$mask.remove();//此处的this是为了使用局部变量$mask
    };
    return Dialog;

});