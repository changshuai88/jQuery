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
