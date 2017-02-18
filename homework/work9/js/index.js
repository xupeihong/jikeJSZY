function getnum() {
    var obj = [
        {"id": "10001", "name": "中国队", "contry": "中国", "score": "9", "number": "2"},
        {"id": "10002", "name": "美国队", "contry": "美国", "score": "7", "number": "-9"},
        {"id": "10003", "name": "日本队", "contry": "日本", "score": "-9", "number": "9"},
        {"id": "10004", "name": "韩国队", "contry": "韩国", "score": "-5", "number": "-2"}
    ];
    document.write("<table border='1'>");
    for (var i = 0; i < obj.length; i++)
    {
        document.write("<tr><td>"+obj[i].id+"</td><td> "+obj[i].name+"</td><td>"+obj[i].contry+"</td><td> "+obj[i].score+"</td><td>"+obj[i].number+"</td></tr>");
    }
    document.write("</table>");
}