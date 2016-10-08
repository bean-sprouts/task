/**
 * Created by Minnie on 2016/10/8.
 */
window.onload = function() {
    var subNumBtn=document.getElementById('subNumBtn'),
        addNumBtn=document.getElementById('addNumBtn'),
        currentNum=document.getElementById('currentNum'),
        numRange=document.getElementById('numRange'),
        setBtn=document.getElementById('setBtn'),
        playerContent=document.getElementById('playerContent');
    //显示当前人数值
    currentNum.innerHTML=numRange.value;
    //减号按钮鼠标点击事件
    subNumBtn.onclick = function(){
        subNum();
        currentNum.innerHTML=numRange.value;
    };
    //加号按钮鼠标点击事件
    addNumBtn.onclick = function(){
        addNum();
        currentNum.innerHTML=numRange.value;
    };
    //滑块鼠标离开事件
    numRange.onmousemove = function () {
        currentNum.innerHTML=numRange.value;
    };
    //设置玩家配比
    setBtn.onclick = function () {
        //设置内容区域
        playerSet();
    }
};
function subNum() {
    var numRange=document.getElementById('numRange');
    numRange.value--;
}
function addNum(){
    var numRange=document.getElementById('numRange');
    numRange.value++;
}
function playerSet(){
    var playerNum=[],
        playerContent=document.getElementById('playerContent'),
        numRange=document.getElementById('numRange');
    //清空内容区域
    playerContent.innerHTML=null;
    //新建ul节点
    var newUl=document.createElement('ul');
    //设置数组长度为当前人数
    playerNum.length=numRange.value;
    //随机设置其中一人为杀手
    playerNum[Math.floor(Math.random()*playerNum.length)]='杀 手';
    for(var i=0,l=playerNum.length;i<l;i++){
        //除杀手外的其他人为水民
        if(playerNum[i] != '杀 手'){
            playerNum[i]='水 民';
        }
        //新增li节点
        var newLi=document.createElement('li'),
            newI=document.createElement('i');
        newLi.innerHTML = playerNum[i] + ' 1 人';
        //设置奇数行小方块为橙色
        if(i%2 == i%4){
            newI.style.backgroundColor='#ee9f1b';
        }else{
            newI.style.backgroundColor='#29bde0';
        }
        newLi.insertBefore(newI,newLi.firstChild);
        newUl.appendChild(newLi);
    }
    playerContent.appendChild(newUl);
}