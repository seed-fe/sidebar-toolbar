/*封装成模块，方便复用*/
/*定义模块，第一个参数是依赖模块的数组*/
define(['jquery'], function($) {
    // 用构造函数定义实例属性，每个实例都有自己的实例属性的副本
    function ScrollTo(opts) {
        // jquery的extend方法，将多个对象合并到第一个空对象中，会遍历每个对象，然后返回的对象会包含每个对象的所有不重复的属性，如果后面的对象与前面的对象属性有重合，会覆盖前面对象的属性值
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
        this.$el = $('html, body');
    }
    // 用原型定义实例共享的方法，每个实例共享原型方法，节省内存
   /* ScrollTo.prototype.move = function() {
        var opts = this.opts,
            dest = opts.dest;
        // console.log(this)
        if ($(window).scrollTop() != dest) {
            if (!this.$el.is(':animated')) {
                console.log(1);
                this.$el.animate({
                    scrollTop: dest
                }, opts.speed);
            }
        }
    }
    ScrollTo.prototype.go = function() {
        var dest = this.opts.dest;
        if ($(window).scrollTop() != dest) {
           this.$el.scrollTop(dest); 
        }
    }*/
    /*用字面量语法重写原型对象，避免重复输入xxx.prototype，从视觉上更好地封装原型的功能*/
    ScrollTo.prototype = {
        constructor: ScrollTo, // 这里手动将constructor指向ScrollTo，否则由于用字面量方式重写了prototype，constructor将指向Object构造函数
        move: function () {
            // body...
            var opts = this.opts,
            dest = opts.dest;
            // console.log(this)
            if ($(window).scrollTop() != dest) {
                if (!this.$el.is(':animated')) {
                    console.log(1);
                    this.$el.animate({
                        scrollTop: dest
                    }, opts.speed);
                }
            }
        },
        go: function() {
            var dest = this.opts.dest;
            if ($(window).scrollTop() != dest) {
               this.$el.scrollTop(dest); 
            }
        }
    }
    // 静态属性
    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800   
    }
    // 最后返回一个包含构造函数方法的对象，供其他js模块调用这个模块
    return {
        ScrollTo: ScrollTo
    }
})