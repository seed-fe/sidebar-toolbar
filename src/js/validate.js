/*定义一个模块，第一个参数是需要引入的模块*/
define(['jquery'], function($) {
    return {
        isEmpty: function () {},
        checkLength: function() {},
        isEqual: function(str1, str2) {
            return str1 === str2;
        }
    }
})