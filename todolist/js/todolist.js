$(function(){
    // alert(11);
    // 1.按下回车把完整数据存储到本地存储里面
    //存储的数据格式 var todolist =[{title:"xxx"，done:false}]
    $("#title").on("keydown",function(event){
        if(event.keyCode === 13){
            // console.log(event);
            // alert(11);
            //先读取本地存储原来的数据。
            var local=getData();
            console.log(local);

            //把local数组进行更新数据，把最新的数据追加给local数组
            local.push({title: $(this).val() , done:false});

            //把这个数组local存储到本地存储里面
            saveData(local);
        }
    })

    //读取本都存储的数据，由于经常用，定义一个方法
    function getData() {
        var data=localStorage.getItem("todolist");
        if (data!==null) {
            //本地存储里面的数据是字符串格式的，但是我们需要的是对象格式的
            return JSON.parse(data);
        }else{
            return [];
        }
    }

    //保存本地存储数据
    function saveData(data){
        localStorage.setItem("todolist",JSON.stringify(data));
    }
})