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

# 6 jQuery内容文本值

    主要针对元素的内容还有表单的值操作
    1. 普通元素内容html()相当于原生innerHTML
        html()获取元素的内容
        html("内容") 设置元素的内容
    2. 普通元素文本内容text() 相当于原生innerText
        text() 获取元素的内容
        text("内容") 设置元素的内容
    3.表单的值val()相当于原生value()
        val() 获取元素的内容
        val("内容") 设置元素的内容

## parents()返回指定祖先元素

# 7.jQuery元素操作
    主要是遍历、创建、添加、删除元素操作

## 7.1 遍历元素
    jQuery隐式迭代是同一类元素做了同样的操作，如果想要给同一类元素做不同操作，就需要用到遍历。

    语法1：
    $("div").each(function(index,domEle){xxx;})
    1.each()方法遍历匹配的每一个元素，主要用DOM处理，each每一个、
    2.里面的回调函数有2个参数，index是每个元素的索引号，demEle是每个DOM元素对象，不是jQuery对象。

    语法2：
    $.each(object,function(index,element){xxx;})

    1.$.each()方法可用于遍历任何对象，主要用于数据处理，比如数组，对象。
    2.里面的函数有2个参数，index是每个元素的索引号，element遍历
## 7.2 创建元素
    语法：
        $("<li></li>");
    动态的创建了一个li标签
## 7.3添加元素
    1.内部添加
    element.append("内容")
    把内容放入匹配元素内部最后面，类似原生appendChild。
    element.prepend("内容")
    把内容放入匹配元素内容最前面。
    2.外部添加
    element.after("内容") 把内容放入目标元素后面

    element.before("内容") 把内容放入目标元素前面
### 内部添加元素,生成之后,他们是父子关系
### 外部添加元素,生成之后,他们是兄弟关系

## 7.4删除元素
    element.remove()  删除匹配的元素(本身)

    element.empty()   删除匹配的元素集合中的所有的子节点

    element.html("")   清空匹配的元素内容

# 8.jquery事件注册

## 8.1单个事件注册
    语法： element.事件(function(){})
    $("div").click(function(){事件处理程序})

    其他事件和原生基本一致
    比如mouseover,mouseout,blur,focus,change,keydown,keyup,resize,scroll等
## 8.2事件处理on()绑定事件
on()方法再匹配元素上绑定一个或多个事件的事件处理函数
语法：
    element.on(events,[selector],fn)
    1.events:一个或多个用空格分隔的事件类型，比如"click"或"keydown".
    2.selector:元素的子元素选择器。
    3.fn：回调函数 即绑定在元素身上的侦听函数。

on()方法优势2：
可以事件委派操作，事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。

$("ul").on("click","li",function(){
    alert("hello world");
});

### 在此前有bind(),live(),delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on替代他们。

## 8.3事件处理 off()解绑事件
off()方法可以移除通过on()方法添加的事件处理程序。

$("p").off()  //解绑p元素所有事件处理程序
$("p").off("click") //解绑p元素上面的点击事件，后面的foo是监听函数名
$("ul").off("click","li"); //解绑事件委托

### 如果有的事件只想触发一次，可以使用one()来绑定事件。


## 8.4自动触发事件trigger()
有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一致，可以利用定时器自动触发右侧点击按钮事件，不必鼠标点击触发。

1.  element.click()   //第一种简写形式
2.  element.trigger("type") // 第二种自动触发模式
3.  element.triggerHandler(type) //第三种自动触发模式
## 8.5jQuery事件对象

事件被处罚，就会有事件对象的产生
element.on(events,[selector],function(event){})

阻止默认行为，event.preventDefault()或者return false 
阻止冒泡：event.stopPropagation().

# 9.1 jQuery对象拷贝

如果想要把某个对象拷贝(合并)给另一个对象使用，此时可以使用$.extend()方法。

语法：
    $.extend([deep],target,object1,[objectN])
    1.deep:如果设为true为深拷贝，默认为false浅拷贝
    2.target要拷贝的目标对象
    3.object1：待拷贝到第一个对象的对象
    4.objectN: 待拷贝到第N个对象的对象
    5.浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象，修改目标对象会影响被拷贝对象。
    6.深拷贝，前面加true，完全克隆(拷贝的对象，而不是地址)，修改目标对象不会影响被拷贝对象。

# 9.2 jquery 多库共存

问题概述：
    jQuery使用$作为标示符，随着jQuery的流行，其他js库也会用这$作为标识符，这样一起使用会引起冲突。
客观需求：
    需要一个解决方案，让jQuery和其他的js库不存在冲突，可以同时存在，这就叫做多库共存
jQuery解决方案：
1.把jQuery里面的$符号同意改为jQuery，比如：jQuery("div")
2.jQuery变量规定新的名称：$noConflict() var xx=$.noConflict();

# 9.3 jQuery插件
    jQuery功能比较有限，想要更复杂的特殊效果，可以借助jQuery插件完成。
    注意：这些插件也是依赖于jQuery来完成的，所以必须要先引入jQuery文件，因此也称为jQuery插件。
## jQuery插件常用的网站：
1.jQuery插件库：http://www.jq22.com/
2.jQuery之家：http://www.htmleaf.com/

## jquery插件使用步骤：

1.引入相关文件，（jquery文件和插件文件）
2.复制相关html、css、js（调用插件）

## jQuery插件演示：
1.瀑布流
2.图片懒加载(图片使用延迟加载可提高网页下载速度。它也能帮助减轻服务器负载)
    当我们页面滑动到可视区域，再显示图片。
    我们使用jQuery插件库Easylazyload。注意，此时的js引入文件和js调用必须写到DOM元素（图片）最后面。

3.全屏滚动(fullpage.js)

    github:https://github.com/alvarotrigo/fullPage.js
    中文翻译网站：http://www.dowebok.com/demo/2014/77/

4.bootstrap JS 插件
bootstrap框架也是依赖于jQuery开发的，因此里面的js插件使用，也必须引入jQuery文件。

# 10 综合案例  

    案例：toDoList
    1.文本框里面输入内容，按下回车，就可以生成代办事项。
    2.点击待办事项复选框，就可以把当前数据添加到已完成事项里面。
    3.点击已完成事项复选框，就可以把当前数据添加到待办事项里面。
    4.但是本页面内容刷新页面不会丢失。

    案例：toDoList分析  
    1.刷新页面不会丢失数据，因此需要用到本地存储localStorage。
    2.核心思路：不管按下回车，还是点击复选框，都是把本地存储的数据加载到页面中，这样保证刷新关闭页面不会丢失数据。
    3.存储的数据格式：var todolist=[{title:"xxx",done:false}]
    4.注意点1：本地存储localstorage里面只能存储字符串格式，因此需要把对象装换为字符串JSON.stringify(data).
    5.注意点2：获取本地存储数据，需要把里面的字符串转换为对象给是json.parse()我们才能使用里面的数据。

    案例：todolist按下回车把新数据添加到本地存储里面
    1.切记：页面中的数据，都要从本地存储里面获取，这样刷新页面不会丢失数据，所以先要把数据保存到本地存储里面。
    2.利用时间对象keycode判断用户按下回车键（13）
    3.声明一个数组，保存数据。
    4.先要读取本地存储原来的数据，(声明函数getData())，放到这个数组里面。
    5.之后把最新从表单获取过来的数组，追加到数组里面。
    6.最后把数组存储给本地存储(声明函数saveData())

    案例：todolist本地存储数据渲染加载到页面
    1.因为后面也会经常渲染加载操作，所以声明一个函数load,方便后面调用
    2.先要读取本地存储数据(数据不要忘记转换为对象格式)
    3.之后遍历这个数据，($.each())，有几条数据，就生成几个小li添加到ol里面。
    4.每次渲染加载之前，先把原先里面ol的内容清空，然后渲染加载最新的数据。

    案例:todolist删除操作
    1.点击里面的a链接，不是删除的li，而是删除本地存储对应的数据。
    2.核心原理，现获取本地存储数据，删除对应的数据，保存给本地存储，重新渲染列表li。
    3.我们可以给链接自定义属性记录当前的索引号。
    4.根据这个索引号删除相关的数据---数组的splice(i,1)方法。
    5.存储修改后的数据，然后存储给本地存储。
    6.重新渲染加载数据列表。
    7.因为a是动态创建的，我们使用on()方法绑定事件。
    












    
