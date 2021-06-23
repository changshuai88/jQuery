# jQuery
jQuery学习
# jquery 的入口函数
$(function(){
    ...//此处是页面DOM加载完成的入口
});

$(document).ready(function(){
    ...//此处是页面DOM加载完成的入口
});

等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装
相遇js原生代码中DOMContentLoaded。
不同于原生js中的load事件是等页面文档，外部的js文件，css文件，图片加载完毕才执行内部代码。

# jQuery的顶级对象$ 

$是jQuery的别称，再代码中可以使用jQuery代替$，但一般为了方便，通常直接使用$.

$是jQuery的顶级对象，相同于原生js中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

# jQuery对象和DOM对象

1.用原生js获取的对象就是DOM对象

