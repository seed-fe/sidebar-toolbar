define(['jquery', 'scrollto'], function($, scrollto) {
    function BackTop (el, opts) {
        // body...
        this.opts = $.extend({}, BackTop.DEFAULTS, opts);
        this.$el = $(el);
        this.scroll = new scrollto.ScrollTo({
            dest: 0,
            speed: this.opts.speed
        })
        if (this.opts.mode == 'move') {
            // jquery的proxy方法相当于原生的bind方法，改变函数的执行环境，这里this原本是指向BackTop的实例，调用proxy方法后指向this.$el
            this.$el.on('click', $.proxy(this._move, this));
        } else {
            this.$el.on('click', $.proxy(this._go, this));
        }
        $(window).on('scroll', $.proxy(this._checkPosition, this));
    }
    BackTop.DEFAULTS = {
        mode: 'move',
        pos: $(window).height(),
        speed: 800
    }
    /*BackTop.prototype._move = function() {
        this.scroll.move();
    }
    BackTop.prototype._go = function() {
        this.scroll.go();
    }
    BackTop.prototype._checkPosition = function() {
        var $el = this.$el;
        if ($(window).scrollTop() > this.opts.pos) {
            $el.fadeIn().css('display', 'block');
        } else {
            $el.fadeOut();
        }
    }*/
    /*用字面量语法重写原型对象*/
    BackTop.prototype = {
        constructor: BackTop,
        _move: function() {
            this.scroll.move();        
        },
        _go: function() {
            this.scroll.go();       
        },
        _checkPosition: function() {
            var $el = this.$el;
            if ($(window).scrollTop() > this.opts.pos) {
                $el.fadeIn().css('display', 'block');
            } else {
                $el.fadeOut();
            }
        }
    }
    // 将一个对象添加到jquery的原型上从而提供新的jquery实例方法，这里就相当于给jquery实例对象提供了一个backtop方法，这也是实现jquery插件的常用方法
    $.fn.extend({
        backtop: function(opts) {
            // return 是为了实现连缀
            return this.each(function() {
                new BackTop(this, opts);
            })
        }
    })
    return {
        BackTop: BackTop
    }
})