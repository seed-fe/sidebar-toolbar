requirejs.config({
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.1.1/jquery.min'
    }
});
/*引入模块，第一个参数是要引入的模块，第二个参数是一个回调函数，回调函数依赖于第一个参数里加载的模块，要等到第一个参数里的模块都加载完成才会执行*/
/*这里和node.js用的commonjs规范模块加载方式不同，commonjs里模块是同步加载，必须先加载完再执行后面的语句，requirejs用的是AMD(asynchronous module definition)异步模块定义规范，模块加载不影响浏览器加载页面（页面不会失去响应），但是模块加载里的回调函数要等到依赖的模块全部加载完成才会运行*/
requirejs(['jquery', 'validate'], function($, validate) {
    $('body').css('background-color', 'blue');
    setTimeout(function() {
        console.log(validate.isEqual(1,2));        
    }, 2000);
})
console.log("I'm first")