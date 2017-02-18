$(document).ready(function () {
    var i = 0;
    var settime = null;
    $("li:eq(" + i + ")").css("background", "red").css("color", "black");
    $(".focus img:eq(" + i + ")").css("display", "block");
    function showimg() {
        if (settime != null)
            setTimeout(settime);
        $("img:eq(" + i + ")").fadeOut(1000, function () {
            i++;
            if (i == 5)
                i = 0;

            $("img:eq(" + i + ")").css("display", "block");
            $("li").css("color", "white").css("background", "#3e3e3e");
            $("img:eq(" + i + ")").fadeIn(1000, function () {
                $("li:eq(" + i + ")").css("background", "red").css("color", "black");
                settime = setTimeout(showimg, 1000);
            })
        })
    }

    settime = setTimeout(showimg, 1000);
    //鼠标移入暂停
    $(".focus").mouseover(function () {
        clearTimeout(settime);
    });
    //鼠标移除继续
    $(".focus").mouseout(function () {
        settime = setTimeout(showimg, 1000);
    });
})