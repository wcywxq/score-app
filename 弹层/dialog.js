/**
 * Created by 宣棋 on 2017/12/10.
 */
requirejs.config({//换名字的时候用,如果不想配置的话，就必须把你要引入的js文件改名字改成jquery
   paths:{
       jquery:'jquery-1.12.4'
   }
});
define(['jquery'],function ($) {//需要哪些模块就引进来哪些文件
    return{
        open:function (arg) {//arg：传了一个参数，用来传值
            this.defaultValue ={//如果没传参数，默认样式，否则会用extend覆盖
               width:300,
               hight:200
            };
            var html = ' <div class="mask">'
                            +'<div class="container">'
                                +'<div class="title">'
                                    +'<h2>aaaaa</h2>'
                                    +'<span class="close">X</span>'
                                +'</div>'
                                +'<div class="content">aasdfsdfgh;</div>'
                            +'</div>'
                        +'</div>';
            $('body').append(html);
            var value = $.extend(this.defaultValue,arg);//extend:合并对象，第二个参数把第一个参数覆盖，返回到第一个参数中
            $('.container').css({
                width:value.width,
                height:value.height,
                marginLeft:-value.width/2,//居中
                marginTop:-value.height/2//居中
            });
            $('.title h2').html(arg.title);
            $('.content').html(arg.content);
        },
        close:function () {
                $('body').remove(html);
        }
    }
});