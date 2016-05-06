//创建一个模块

/*
//第一种
var name;

exports.setName = function(thyName){
    name = thyName;
};

exports.sayHello = function(){
    console.log('Hello ' + name)
};
*/




//第二种
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;