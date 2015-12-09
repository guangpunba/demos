/*define(function(){
    function fun1(){
      console.log('aaa');
    }

    return fun1;
})*/


define(['b'],function(b){
    var fun1 = function(c,d){
           //console.log(a-b);
        b.fun3(c,d)
    } 
    
    var fun2 = function(){
        b.fun4();
        //console.log('aaa');
    }
    return {
        fun1 : fun1,
        fun2 : fun2
    };
})