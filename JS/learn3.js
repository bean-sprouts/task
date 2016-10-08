/**
 * Created by Minnie on 2016/9/9.
 */
//例一，递增++和递减--
/*var box = 100;
// box++;
++box;
alert(box);    //都返回101*/

//前置和后置的区别，在赋值的时候体现,前置是先递增/递减再赋值，后置是先赋值后递增/递减
/*var box = 100;
box2 = ++box;
// box3 = box++;
alert(box2);
// alert(box3);
alert(box);*/

//例二，加法运算符
/*var box = 1+2;                          //返回3
var box = 1+NaN;                       //返回NaN
var box = '你的年龄是：'+2+10;        //返回你的年龄是：210   加号都是字符串连接符
var box = '你的年龄是：'+(2+10);      //返回你的年龄是：12    一个字符串连接符，一个加法运算符
var box = 2+10+'是你的年龄。';        //返回12是你的年龄      一个加法运算符，一个字符串连接符
alert(box);*/

//例三，关系运算符，多数情况返回布尔值
/*
var box = 1 < 2;             //返回true
var box = '3' > '22';       //返回true，3 > 2
var box = 'a' > 'b';        //返回false,a=97  b=98
alert(box);
*/
//每个新创建的对象的引用地址都是不同的
/*var box = {} == {};       //false
var width = {};
var height = width;
var box = height == width;
alert(box);*/

