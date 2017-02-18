$(document).ready(function () {
    var i = 0;
    var settime = null;//存储计时值
    //默认第一张背景改变
    $("li:eq(" + i + ")").css({"background": "red", "color": "black"});
    //默认第一张图片显示
    $(".focus img:eq(" + i + ")").css("display", "block");
    function showimg() {
        //判断计时变量是否有值
        if (settime != null)
            clearTimeout(settime);
        //第一张淡出后，第二张淡入
        $("img:eq(" + i + ")").fadeOut(2000, function () {
            i++;
            //当超过5张后还原
            if (i == 5)
                i = 0;
            // $("img").css("display", "none");
            //紧接着后面一张显示
            $("img:eq(" + i + ")").css("display", "block");
            //切换下一张时，其它背景样式恢复原值
            $("li").css({"color": "white", "background": "#3e3e3e"});
            //淡入显示
            $("img:eq(" + i + ")").fadeIn(2000, function () {
                //背景开始变色
                $("li:eq(" + i + ")").css({"background": "red", "color": "black"});
                settime = setTimeout(showimg, 2000);
            })
        })
    }

    //clearTimeout(settime);
    settime = setTimeout(showimg, 2000);
    //鼠标移入暂停3
    $(".focus").mouseover(function () {
        clearTimeout(settime);
    });
    //鼠标移除继续
    $(".focus").mouseout(function () {
        clearTimeout(settime);
        settime = setTimeout(showimg, 2000);
    });
    //鼠标点击切换
    $("li").click(function () {
        var num = $("li").index(this);
        $("img").css("display", "none");//所有图片隐藏
        $("li:eq(" + num + ")").css({"background": "red", "color": "black"});//圆圈变色
        $("li:eq(" + i + ")").css({"color": "white", "background": "#3e3e3e"});//恢复原状
        $(".focus img:eq(" + num + ")").css("display", "block");//点击哪张显示哪张
        i = num;
    })
})