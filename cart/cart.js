$(function(){
    // 1.全选，全不选功能模块
    //  就是把全选按钮(checkall)的状态赋值给 三个小的按钮(j-checkbox)就可以了
    //事件可以使用change
    $(".checkall").change(function(){
         $(".j-checkbox,.checkall").prop("checked",$(".checkall").prop("checked"));
    })

    // 2.如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选
    $(".j-checkbox").change(function(){
       
        if($(".j-checkbox:checked").length===$(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
    })
    $(".check-cart-item ").hover(function(){
        $(this).css("background-color","pink");
    },function(){
        $(this).css("background-color","");
    })

    // 3.增减产品数量模块，首先声明一个变量，当我们点击+号(increment),就让这个值++，然后赋值给文本框。
    $(".increment").click(function(){
        //得到当前兄弟文本框的值
        var n=$(this).siblings(".itxt").val()
        n++;
        $(this).siblings(".itxt").val(n);
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p=p.substr(1);
        // console.log(p);
        // 计算小计
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    })

    $(".decrement").click(function(){
        //得到当前兄弟文本框的值
        var n=$(this).siblings(".itxt").val()
        // if(n>=2){
        //     n--;
        // }else{
        //     return n=1;
        // }
        if(n==1) return false;
        n--;
        $(this).siblings(".itxt").val(n);
        // var p=$(this).parent().parent().siblings(".p-price").html();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p=p.substr(1);
        // console.log(p);
        // 计算小计
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    })

    // 4.用户修改文本框的值，计算小计模块
    $(".itxt").change(function(){
        //先得到文本框里的值，乘以商品的单价
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+ (p*n).toFixed(2));
    })

})