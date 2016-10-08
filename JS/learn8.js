/**
 * Created by Minnie on 2016/9/13.
 */
var images = new Array(6);
var index = 1;
for (var i=0;i<4;i++){
    images[i] = new Image();                    //创建新的图片对象
    images[i].src ="../images/images_JS_learn8/"+ i + ".jpg";                 //提前装载图片
}
function show() {
    document.anm.src = images[index].src;      //装入新图片
    index = (index+1)%4;                          //使index在1、2、3、0之间循环
}