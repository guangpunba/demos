
/* 加载依赖模块 */
require.config({
    baseUrl : 'js',
    paths : {
       
        'a':'app/a',
        'b':'app/b',
        'c':'app/c'
     
        
    }
 
})

require(['common'],function(common){
    
}); 
require(['c'],function(c){
    c(33)
}); 