/*
*
*requirejs在下面
*
*/
var date = new Date();

/*require.config({
    baseUrl:'../js/',
    urlArgs: "v="+ date.getTime(), //清除缓存
    paths : {
        "jquery"  : "lib/jquery.min",
        "_sitenav": "module.site-nav",
        "layer"   : "lib/layer",
        "zepto" : "lib/zepto",
        "ie"    : "lib/ie"
    },
    waitSeconds: 15,
    shim: {
        'layer': {
            deps: ["jquery"],
            exports:'layer'

        }


    }
})*/
/*
*
*requirejs在上面
*
*/
var require = {
    baseUrl:'../js/',
    urlArgs: "v="+ date.getTime(), //清除缓存
    paths : {
        "jquery"  : "lib/jquery.min",
        "_sitenav": "module.site-nav",
        "layer"   : "lib/layer",
        "zepto"   : "lib/zepto",
        "ie"      : "lib/ie"
    },
    waitSeconds: 15,
    shim: {
        'layer': {
            deps: ["jquery"],
            exports:'layer'

        }


    }
};