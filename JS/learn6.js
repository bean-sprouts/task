/**
 * Created by Minnie on 2016/9/12.
 */
//访问对象属性
/*
 var book = new Object();
 book.title = "HTML大全";
 book.chapter1 = new Object();
 book.chapter1.title = "HTML5简介";*/
//删除对象属性
/*var book = {title:"HTML大全",chapter1:{title:"HTML5简介",page:15}};
 alert(book.chapter1);           //object Object
 // delete book.chapter1;          //删除对象book的chapter属性
 book.chapter1 = null;
 alert(book.chapter1);           //undefined*/
//遍历所有对象
/*var book = {title:"HTML大全",chapter1:{title:"HTML5简介",page:15}};
 for (var x in book){
 alert(x+"="+book[x]);    //在for循环中用方括号访问对象属性的值
 }*/

//构造方法
/*
 function Rect(w,h) {
 this.width = w;                      //必须使用this关键字
 this.height = h;
 this.area = function () {
 return this.width*this.height;
 }
 }
 var r = new Rect(5,10);         //相当于[width:5,height:10]
 r.width = 10;
 alert(r.area());                 //100*/

//原型对象
function Person(name,friends) {                 //构造方法
    this.name = name;
   //this.age = age;
    this.friends = friends;
}
Person.prototype = {                                //构造原型对象
    constructor: "Person",
    interest : ["football","NBA"],
    name : function () {
        alert(this.name);
    }
};
var person1 = new Person("James",29,["Lucy","Tom"]);   //传参数
var person2 = new Person("James",29,["Lucy","Tom"]);
person1.friends.push("Van");                            //堆栈
alert(person1.friends);                                  //Lucy,Tom,Van
alert(person2.friends);                                  //Lucy,Tom
person1.interest.push("CBA");                           //原型会有这个问题，只有赋值能单独改变person1的属性值，其他操作都会改变原型的值
alert(person1.interest == person2.interest);           //true     都是引用的原型的值
person1.interest = "dance";                             //赋值可以将引用原型对象的值变成自己的值
alert(person1.interest);                                 //dance
alert(person2.interest);                                 //football,NBA,CBA