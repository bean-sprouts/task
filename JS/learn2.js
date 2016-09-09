/**
 * Created by Minnie on 2016/9/8.
 */

//null是Null类型，得到的值为null，返回的字符串为object
/*var x=null;
 alert(x);
 alert(typeof x);*/

//object是object类型，得到的值是[object Object]，返回的字符串是object
/*var box=new Object();
 alert(box);
 alert(typeof box);*/

//或者这样写
/*var box={};
 alert(box);*/


//typeof 可用于区分函数和object,得到的值是function box(){},返回的字符串是function
/*
 function box() {

 }
 alert(box);
 alert(typeof box)*/

//创建一个变量时，不知道初始化赋什么值，可以这样
/*
 var box=null;     //对象初始化，一般用null
 var box=0;        //数值初始化，一般用0
 var box='';       //字符串初始化，一般用空字符串
 var box=true;    //布尔值初始化，可用true或false
 */

//undefined和null两个值的比较是相等的，但是数据类型不相等
/*
 alert(undefined == null);    //两个等号表示值相同，返回true
 alert(undefined === null);   //三个等号表示值和数据类型都相同，返回false
 */

//true数值上等于1，false数值上等于0
/*
 var box = false;
 alert(box == 0);*/

//所有数据类型都对应一个Boolean值，可以转换
/*
 var box = 'hello world!';
 var box2 = Boolean(box);
 alert(box2);*/

//隐式转换
/*
 var box = 'hello world!';
 if(box) {
 alert('条件为true时，会执行这一条。');
 }else{
 alert('条件为false时，会执行这一条。')
 }*/

//八进制、十六进制整数
/*var box = 076;
var box = 0x4fc;
alert(box);   //输出均为十进制*/
//浮点数,小数点后面必须至少有一位数字，需要的内存空间是整数数值的两倍
/*var box = 0.8;
alert(box);*/
//科学计数法
/*var box = 4.12e3;
alert(box);*/
//最小值最大值
/*alert(Number.MIN_VALUE);
alert(Number.MAX_VALUE);*/

//NaN
/*var box = 12/0;    //infinity
var box = 12/0*0;   //NaN
var box = 0/0;
alert(box);
alert(isNaN('lee'));   //返回true，因为字符串不能转换为数值
alert(isNaN(true));    //返回false，true可以转换为1*/

//parseInt()
// alert(parseInt('234lee123'));    //返回234
// alert(parseInt('0x70'));           //返回112
// alert(parseInt('0101110',2));      //返回46

//字符串类型
/*var box = '\u03a3';
alert(box);   //返回Σ*/

//Object对象类型
var box = new Object(5);
box = box + 100;
alert(box);

