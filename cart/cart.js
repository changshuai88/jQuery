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
        getSum();
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
        getSum();
    })

    // 4.用户修改文本框的值，计算小计模块
    $(".itxt").change(function(){
        //先得到文本框里的值，乘以商品的单价
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").html();
        p=p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥"+ (p*n).toFixed(2));
        getSum();
    });
    //5.  计算总计和总额模块
    getSum();
    function getSum(){
        var count = 0; //计算总件数
        var money = 0; //计算总价钱
        $(".itxt").each(function(i,ele){
            count +=parseInt( $(ele).val());
        });
        $(".amount-sum em").text(count);

        $(".p-sum").each(function(i,ele){
            money+= parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥"+money.toFixed(2));
    }

    //6.删除商品模块
    //(1)商品后面的删除按钮
    $(".p-action a").click(function(){
        //删除的是当前的商品
        $(this).parents(".cart-item").remove();
        getSum();
    });

    //(2)删除选中的商品
    $(".remove-batch").click(function(){
        //删除的是小的复选框选中的商品
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    //(3)清空购物车 删除全部商品
    $(".clear-all").click(function(){
        $(".cart-item").remove();
        getSum();
    })

})