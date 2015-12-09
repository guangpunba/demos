//require(["js/a"]);
require.config({
    baseUrl : "js",
    paths : {
        "jquery" : "jquery-10",
        "layer"  : "layer/layer.min",
        "a" : "a"
    }
})

require(["jquery","layer","a"],function($,layer,a){
    //console.log(123);
    //a.fun1(2,8)
    //a.fun1(2,8)
    //layer.msg('积分卡是否')
    $(function(){
        $('#btn1').click(function(){
            a.fun1(5,1);
        })
        $('#btn2').click(function(){
            a.fun2();
        })
    })
    
});
