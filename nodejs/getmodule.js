//获取模块

/*
//第一种
var myModule = require('./module');

myModule.setName('nodejs');

myModule.sayHello();
*/



//第二种
/*var Hello = require('./module');
hello = new Hello();
hello.setName('NodeJs');
hello.sayHello();*/




var Hello = require('./index');

Hello.run();