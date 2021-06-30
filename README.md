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

2.jQuery方法获取的元素就是jQuery对象。

3.jQuery对象本质是：利用$对DOM对象包装后产生的对象（伪数组形式存储）

4.DOM对象与jQuery对象之间是可以互相转换的
因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装，要想使用这些属性和方法要把jQuery对象转换为DOM对象才能使用

(1)DOM对象转化为jQuery对象：$(DOM对象)
$('div')

(2)jQuery对象转换为DOM对象（两种方式）
$('div')[index]  index 是索引号
$('div').get(index)  index 是索引号

# jQuery选择器
## 1.1jQuery基础选择器
原生js获取元素的方法很多，很杂，而且兼容行情况不一致，因此jQuery给我们做了封装，使湖区元素统一标准
$('选择器')  //里面选择器直接写CSS选择器即可，但要加引号
| 名称 | 用法 | 描述 |
| --- | --- | --- |
|ID选择器|$('#id')|获取指定id的元素|
|全选选择器|$('*')|匹配所有元素|
|类选择器|$('.class')|获取同一类class的元素|
|标签选择器|$('div')|获取同一类标签的所有元素|
|并集选择器|$('div,p,li')|获取多个元素|
|交集选择器|$('li.current')|交集元素|

## 1.2jQuery层级选择器(案例5)
|名称|用法|描述|
|---|---|---|
|子代选择器|$("ul>li");|使用>号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素|
|后代选择器|$("ul li);|使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等|


## 1.3jQuery隐士迭代(案例6)
遍历内部DOM元素，（伪数组形式存储）的过程就叫做隐式迭代
简单理解：给匹配到的所有元素进行循环遍历，执行响应的方法，而不用我们再进行循环，简化我们的操作，方便我们使用。

## 1.4jQuery的筛选选择器
|语法|用法|描述|
|---|---|---|
|:first|$('li:first')|获取第一个li元素|
|:last|$('li:last')|获取最后一个li元素|
|:eq(index)|$('li:eq(2)')|获取到的li元素中，选择索引号为2的元素，索引号index从0开始|
|:odd|$('li:odd')|获取到的li元素中，选择索引号为奇数的元素|
|:even|$('li:even')|获取到的li元素中，选择索引号为偶数的元素|

## 1.5jQuery筛选方法(重点)

|语法|用法|说明|
|---|---|---|
|parent()|$('li').parent();|查找父级|
|children(selector)|$('ul').children('li')|相当于$("ul>li"),最近一级（亲儿子）|
|find(selector)|$('ul').find("li");|相当于$("ul li"),后代选择器|
|siblings(selector)|$(".first").siblings("li")|查找兄弟节点，不包括自己本身|
|nextAll([expr])|$(".first").nextAll();|查找当前元素之后所有的同辈元素|
|prevtAll([expr])|$(".last").prevAll():|查找当前元素之前所有的同辈元素|
|hasClass(class)|$('div').hasClass('protected')|检查当前的元素是否含有某个特定的类，如果有，则返回true|
|eq(index)|$("li").eq(2);|相当于$("li:eq(2)"),index从0开始|

## 1.6jQuery中的排他思想
想要多选一的效果,排他思想:当前元素设置样式,其余的兄弟元素清除样式.

# 2.jQuery的样式操作

## 2.1操作css方法

jQuery可以使用css方法来修改简单元素样式；也可以操作类，修改多个样式。
1.参数只写属性名，则是返回属性值
    $(this).css("color");
2.参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号
    $(this).css("clolor","red");
3.参数可以是对象形式，方便设置多组样式，属性名和属性值用冒号隔开，属性可以不用加引号。
    $(this).css({width:400,background:"yellow"})

## 2.2设置类样式方法
作用等同于以前的classlist,可以操作类样式，注意操作类里面的参数不要加点。
1.添加类
    $("div").addClass("current");
2.移除类
    $("div").removeClass("current");
3.切换类
    $("div").toggleClass("current");
## 2.3类操作与className区别
原生js中className会覆盖元素原先里面的类名
jQuery里面类操作只是对指定类进行操作，不影响原先的类名

# 3jQuery效果

## 3.1显示隐藏效果
1.显示语法规范
    show([speed,[easing],[fn]])
2.显示参数
    2.1 参数都可以省略，无动画直接显示
    2.2 speed：三种预定速度之一的字符串（“slow”，“normal”，or “fast”）或表示动画时长的毫秒数值（如：1000）
    2.3 easing：（Optional）用来指定切换效果，默认是“swing”，可用参数“linear”。
    2.4 fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

3.隐藏语法规范
    hide([speed,[easing],[fn]])
4.隐藏参数
    4.1 参数都可以省略，无动画直接显示
    4.2 speed：三种预定速度之一的字符串（“slow”，“normal”，or “fast”）或表示动画时长的毫秒数值（如：1000）
    4.3 easing：（Optional）用来指定切换效果，默认是“swing”，可用参数“linear”。
    4.4 fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

5.切换语法规范
    toggle([speed,[easing],[fn]])
6.切换参数
    6.1 参数都可以省略，无动画直接显示
    6.2 speed：三种预定速度之一的字符串（“slow”，“normal”，or “fast”）或表示动画时长的毫秒数值（如：1000）
    6.3 easing：（Optional）用来指定切换效果，默认是“swing”，可用参数“linear”。
    6.4 fn：回调函数，在动画完成时执行的函数，每个元素执行一次。

## 3.2上滑下滑效果

## 3.3事件切换
    hover([over,]out);
1. over：鼠标移到元素上要触发的函数（相当于mouseenter）
2. out：鼠标移除元素要触发的函数（相当于mouseleave）

## 3.4动画队列及其停止排队方法

1.动画或效果队列
动画或者效果一但触发就会执行，如果多次触发，就造成多个动画或效果排队执行。
2.停止排队
    stop()
1.stop()方法用于停止动画或效果
2.注意：stop()写到动画或者效果的前面，相当于停止结束上一次的动画。

## 3.5淡入淡出效果
1.淡入效果语法规范
fadeIn([speed,[easing],[fn]])
...同隐藏显示

2.渐进方式调整到指定的不透明度
    fadeTo([[speed],opacity,[easing],[fn]])
3.效果参数
    3.1 opacity透明度必须写，取值0-1之间
    3.2 speed：三种预定速度之一...必须写
    3.3 easing：....

## 3.6自定义动画animate
1.语法
    animate(params,[speed],[easing],[fn])
2.参数
    2.1params：想要更改的样式属性，以对象形式传递，必须写，属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法，borderLeft，其余参数都可以省略
    2.2speed。。
    2.3 easing...
    2.4 fn回调函数...

## 手风琴动画，只能用position属性，不然动画效果会出问题。

# 5.jQuery属性操作

## 5.1 设置或获取元素固有属性值prop()
    所谓元素固有属性就是元素本身自带的属性，比如<a>元素里面的href属性，比如<input>元素里面的type属性

    1.获取属性语法
        prop("属性名")
    2.设置属性语法
        prop("属性名","属性值")

## 5.2设置或获取元素的自定义属性值 attr()

    用户自己给元素添加的属性，我们称为自定义属性，比如给div添加index="1"

    1.获取属性语法
        attr("属性") //类似原生getAttribute()
    2.设置属性语法
        attr("属性名","属性值") //类似原生setAttribute()

该方法也可以获取H5自定属性。

## 5.3数据缓存 data()

    data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构，一但页面刷新，之前存放的数据将被移除。
    