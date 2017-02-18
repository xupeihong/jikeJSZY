//全选按钮全部选中事件
/*function ckall() {
    var ck = document.getElementsByName("ck");
    for (var i = 0; i < ck.length; i++) {
        ck[i].checked = true;
    }
}*/
//窗体加载操作
window.onload = function () {
    var all = document.getElementById("ckall");
    all.onclick = function () {
        var ck = document.getElementsByName("ck");
        for (var i = 0; i < ck.length; i++) {
            ck[i].checked = this.checked;
        }
    }

    var cks = document.getElementsByName("ck");//获取所有复选框
    for (var j = 0; j < cks.length; j++) {
        cks[j].onclick = function () {
            var type = true;
            for (var k = 0; k < cks.length; k++) {
                if (!cks[k].checked) {
                    type = false;
                    all.checked = false;
                    break;
                }
            }
            if (type)
                all.checked = true;
        }
    }
    //jq实现删除功能
    /*$("#del").click(function () {
     if (confirm("确定要删除吗？")) {
     $("input[name='ck']:checked").each(function () { // 遍历选中的checkbox
     var n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
     $("table#tab").find("tr:eq(" + n + ")").remove();
     });
     }
     });*/

}

function delck() {
    var ck = document.getElementsByName("ck");
    if (confirm("确认删除？")) {
        for (var i = ck.length; i > 0; i--) {
            if (ck[i - 1].checked) {
                ck[i - 1].parentNode.parentNode.remove();
            }
        }
    }
}
