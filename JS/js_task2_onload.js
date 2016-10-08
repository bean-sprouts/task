/**
 * Created by Minnie on 2016/10/8.
 */
window.onload = function(){
    var time=4,
        x=setInterval(function () {
            var timer=document.getElementById('timer');
            timer.innerHTML=time;
            time--;
        },1000);
    setTimeout(function () {
        clearInterval(x);
        window.location="http://localhost:63342/task.git/trunk/JS_task/task2.html";
    },5000);
};
