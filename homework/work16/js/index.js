// jquery语法
//             成绩单数据操作功能完成
//                1、添加数据 要有验证
//                2、全选功能
//                3、删除功能
//                4、修改信息   两个状态  可修改 不可修改
//                5、计算总成绩
$(document).ready(function () {
    //获取全选按钮
    var ckall = $("#ckAll");
    //点击全选按钮没问题
    ckall.click(function () {
        var ck = $("[name='ck']");
        for (var i = 0; i < ck.length; i++) {
            ck[i].checked = this.checked;
        }
    });
    //单选还有问题
    var ck = $("[name='ck']");
    var type = true;
    ck.click(function () {

        for (var k = 0; k < ck.length; k++) {
            if (type) {
                ckall.checked = true;
            }
            else if ($("[name='ck']").eq(k).attr("checked") != "checked") {
                ckall.checked = false;
                break;
            }
        }
        // if (!ck[k].checked) {
        //     type = false;
        //     ckall.checked = false;
        //     break;
        // }


    })

    //多选删除如果没选中不用给提示
    $("#delall").click(function () {
        if (confirm("是否真的要删除？")) {
            $("[name='ck']:checked").each(function () {
                var n = $(this).parents("tr").index();
                $("table#tab").find("tr:eq(" + n + ")").remove();
            })
        }

    });


    //点击删除不选中也能删除
    $("table .del").each(function () {
        $(this).click(function () {
            if (confirm("是否真的要删除？")) {
                this.parentNode.parentNode.remove();
            }
        })
    })


    //点击添加按钮next和after的区别
    $("#Addinfo").click(function () {
        var name = $("[name='name']").val();
        var sex = $("[name='sex']").val();
        var score = $("[name='score']").val();
        var total = $('table tr:eq(3):last td:eq(1)').text();
        check();
        if (name != "" && sex != "" && score != "") {
            // function addInfo() {
            $('table tr:eq(0):last').after($('<tr><td><input type="checkbox" name="ck"/></td><td></td><td></td><td></td><td></td></tr>'));
            var a = $("<a href='javascript:void(0)' class='del'>删除</a> <a href='javascript:void(0)' class='edite'>修改</a>");
            $('table tr:eq(1):last td:eq(1)').text(name);
            $('table tr:eq(1):last td:eq(2)').text(sex);
            $('table tr:eq(1):last td:eq(3)').text(score);
            $('table tr:eq(1):last td:eq(4)').append(a);
            $(".del").click(function () {
                if (confirm("是否真的删除？")) {
                    this.parentNode.parentNode.remove();
                }
            });
            total = 1 * total + parseInt(1 * score);

            // }
        }
        /*if (name == "") {
         $("[name='name']").next().html("姓名不能为空");
         }
         else {
         $("[name='name']").next().html("√").css("color", "green");
         }

         if (sex == "") {
         $("[name='sex']").next().html("性别不能为空");
         }
         else if (sex != '男' || sex != '女') {
         $("[name='sex']").next().html("性别填写错误");
         }
         else if(sex == "男" || sex == "女"){
         $("[name='sex']").next().html("√").css("color", "green");
         }
         if (score == "") {
         $("[name='score']").next().html("分数不能为空");
         }
         else if (isNaN(score)) {
         $("[name='score']").next().html("只能是数字");
         }*/
        /*else {
         $("[name='score']").next().html("√").css("color", "green");
         }*/

        /*var name = $("[name='name']").val();
         var sex = $("[name='sex']").val();
         var score = $("[name='score']").val();
         var table = $("table");
         var tr = $("<tr></tr>");
         var td = $("<td></td>");
         td.text(name);
         td = $("<td></td>");
         td.text(sex);
         td = $("<td></td>");
         td.text(score);
         td = $("<td></td>");
         var input = $("<input/>");
         input.attr("type", "checkbox");
         input.attr("name", "ck");
         td.append(input);
         var a = $("<a></a>");
         var a2 = $("<a></a>");
         td = $("<td></td>");
         a.html("删除");
         a2.html("修改");
         a.attr("href", "javascript:void(0)");
         a.addClass("del");
         $(".del").click(function () {
         if (confirm("是否真的删除？")) {
         this.parentNode.parentNode.remove();
         }
         });
         a2.attr("href", "javascript:void(0)");
         a2.addClass("edite");
         td.append(a);
         td.append(a2);
         tr.append(td);
         table.append(tr);*/
    });
    /*$("[name='name'],[name='sex'],[name='score']").focus(function () {
     // $(this).css("background", "red");
     switch ($(this)[0].name) {
     case "name":
     $(this).next().html("<span style='color:green'>姓名不能为空</span>");
     break;
     case "sex":
     $(this).next().html("<span style='color:green'>性别不能为空</span>");
     break;
     case "score":
     $(this).next().html("<span style='color:green'>分数必须在1-100之间</span>");
     break;
     }
     }).blur(function () {
     $(this).next().html("<span style='color:green;'>√</span>");
     $(this).css("background", "#fff");
     /!*if ($(this).val() == "") {
     $(this).next().html("dsds");
     }*!/
     })*/
    //验证
    function check() {

        var name = $("[name='name']").val();
        var sex = $("[name='sex']").val();
        var score = $("[name='score']").val();
        alert(name + ":" + sex + ":" + score);
        if (name == "" && sex == "" && score == "") {
            $("[name='name']").next().html("姓名不能为空");
            $("[name='sex']").next().html("性别不能为空");
            $("[name='score']").next().html("分数不能为空");
            return false;
        }
        else if (isNaN(1 * score)) {
            $("[name='score']").next().html("分数必须是数字");
            return false;
        }
        return true;
    }

    $(".edite").click(function () {
        $(this).parent($(this).attr("readOnly", false));
        $(this).html("确定");
        if ($(this).html() == "确定") {

        }
    })
})