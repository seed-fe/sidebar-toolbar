# sidebar-toolbar
developed with sass &amp; requirejs
根据慕课网[侧栏工具条开发](http://www.imooc.com/learn/425)课程制作的侧栏工具条，使用了面向对象的写法，其中回到顶部功能封装成了jquery插件。


# 插件使用方法
1. 需引入jQuery
2. 在jQuery之后引入backtop.js
3. 任意dom元素都可作为返回顶部的按钮
  示例：
  
   ``` 
   $('selector').backtop({
      mode: 'move',
      dest: 0,
      pos: $(window).height(),
      speed: 800
   })
   ```
   
   对按钮元素调用backtop方法，传入一些选项参数，包括：
   * mode: 回到顶部的方式，可以取两个值，move是动画式，go是直接回到顶部；
   * dest：回到顶部的终点，是一个数值；
   * pos： 回到顶部按钮触发显示隐藏切换的位置，示例中是滚动超过一屏高度时显示按钮；
   * speed： 当mode取值是move时的动画速度，单位是毫秒。
   
   查看[demo](https://seed-fe.github.io/sidebar-toolbar/)
   
   插件具体制作思路详见wiki。
