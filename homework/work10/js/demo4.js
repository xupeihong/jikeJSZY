function getgongshi() {
    for(var i=1;i<=10;i++)
    {
        var num1=parseInt(Math.random()*10);
        var num2=parseInt(Math.random()*10);
       // document.write("计算题"+i+":"+num1+"-"+num2+"=<input type='text' id='txt'>"+"<br>");
        document.write("计算题"+i+":"+num1+"-"+num2+"="+Math.abs(num1-num2)+"<br>");
    }
}