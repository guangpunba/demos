/* 加载依赖模块 */
/*require.config({
    baseUrl : 'js',
    paths : {
        "jquery" : "jquery-10",
        "layer"  : "layer/layer.min",
        "a" : "a"
    }
 
})*/
/*require(['jquery','layer'],function($,layer){
    //console.log(123);
    //a.fun1(2,8)
    //a.fun2()
    layer.msg('积分卡是否')
}); */
/*require(["jquery","a","layer"], function($,a,layer){
　　　　 $(function(){
            //a.fun1(5,9)
            $.layer({
                shade: [0],
                area: ['auto','auto'],
                dialog: {
                    msg: '您是如何看待前端开发？',
                    btns: 2,                    
                    type: 4,
                    btn: ['重要','奇葩'],
                    yes: function(){
                        layer.msg('重要', 1, 1);
                    }, no: function(){
                        layer.msg('奇葩', 1, 13);
                    }
                }
            });
        })
});*/
/*define(['jquery','layer'],function($,layer){
    var msg = function(){
        layer.msg('msg');
    }
    var alert = function(){
        layer.alert('alert');
    }
    return {
        msg : msg,
        alert : alert
    }
})
define(function(){
    var fun1 = function(a,b){
        console.log(a-b);
    } 
    
    var fun2 = function(){
        console.log('aaa');
    }
    return {
        fun1 : fun1,
        fun2 : fun2
    };
})*/
/*define(['jquery','layer'],function($,layer){
    var alert = function(){
        layer.alert('前端攻城师贤心');
    }
    
    return {
        alert :alert
    }
})*/
/*require(["jquery","a"], function($,a){
　　　　 $(function(){
            a.fun1(5,9)
        })
});*/

/*require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert($('#main'));  
    })
})*/