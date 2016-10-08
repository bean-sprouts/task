/**
 * Created by Minnie on 2016/9/12.
 */

/*
 //定时器 异步运行
 function hello(){
 alert("hello");
 }
 //使用方法名字执行方法
 var t1 = window.setTimeout(hello,1000);
 var t2 = window.setTimeout("hello()",3000);//使用字符串执行方法
 window.clearTimeout(t1);//去掉定时器*/
window.onload=function(){
    //开始运动
    setInterval('startMove()',1000);
    //clearInterval(timer);
};
function startMove(){
    var myMain = document.getElementById('main'),
        myDiv = myMain.getElementsByTagName('div'),
        ranColor = ['red','green','blue'],
        colorCh = {red:'红色',green:'绿色',blue:'蓝色'},
        myRan1=Math.floor(Math.random()*9),
        myRan2=Math.floor(Math.random()*3);
    resetDiv();
    myDiv[myRan1].style.backgroundColor=ranColor[myRan2];
    console.log('格子'+[myRan1+1]+'变成了'+colorCh[ranColor[myRan2]]);
}
function resetDiv(){
    var myMain = document.getElementById('main'),
        myDiv = myMain.getElementsByTagName('div');
    for(var i=0,l=myDiv.length;i<l;i++){
        myDiv[i].style.backgroundColor='#E8830D';
    }
}
