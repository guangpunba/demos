define(function(){
    var fun3 = function(c,d){
           console.log(c+d);
    } 
    
    var fun4 = function(){
        console.log('aaa');
    }
    return {
        fun3: fun3,
        fun4 : fun4
    };
})