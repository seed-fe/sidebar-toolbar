define(['jquery'], function($) {
    function ScrollTo(opts) {
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
        this.$el = $('html, body');
    }
    ScrollTo.prototype.move = function() {
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
        
    }
    // 静态属性
    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800   
    }
    return {
        ScrollTo: ScrollTo
    }
})