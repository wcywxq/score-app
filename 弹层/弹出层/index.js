
/**
 * Created by 宣棋 on 2017/12/10.
 */
requirejs.config({//换名字的时候用,如果不想配置的话，就必须把你要引入的js文件改名字改成jquery
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog_new'],function ($, Dialog) {

    $('#btn').on('click',function () {

        var dialog1 = new Dialog({
            width:800,
            title:'haha',
            content:'content.html'//引用片段文件
        });

        dialog1.open();

        $('body').on('click','#cancel',function () {//后生成的元素，事件绑定要用到事件委托，委托到父元素身上
            dialog1.close();
        });
    });

    $('body').on('click','#yes',function () {
        var dialog2 = new Dialog({
            width:200,
            title:'请输入用户名',
            content:'content1.html'//引用片段文件
        });
        dialog2.open();
    });
});