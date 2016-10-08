/**
 * Created by Minnie on 2016/9/12.
 */
/*var colors = ["red","blue","green"];      //初始化
var name = [];                            //定义空数组
alert(colors.length);                     //3
alert(name.length);                       //0
colors[99] = "brown";                     //赋值
alert(colors.length);                     //100
colors.length = 2;                        //length可写
alert(colors[2]);                         //undefined
colors.length = 4;
colors[colors.length] = "black";
alert(colors.length);                   //5
alert(colors[3]);                        //undefined
colors[colors.length] = "white";
alert(colors.toString());
alert(colors.valueOf());
alert(colors);
alert(colors.join("||"));*/
//堆栈、队列操作
/*var colors = [];
var count = colors.push("red","green");
alert(colors);                                   //red,green
count = colors.push("black");
alert(colors);                                    //red,green,black
item = colors.pop();
alert(item);                                     //black,堆栈后进的先出
alert(colors.length);                           //2,pop()取出了一个数
item2 = colors.shift();
alert(item2);                                    //red，队列，先进的先出
alert(colors.length);                           //1，shift()又取出了一个数*/

//排序
/*var values = [0,1,10,15,5];
values.sort();
alert(values);                       //0,1,10,15,5
values.reverse();
alert(values);                       //5,15,10,1,0*/

//比较大小
/*function compare(a,b) {
    if (a < b){                 //如果前面那个数小于后面那个
        return -1;             //返回小于0的数，则a和b顺序不变
    } else if (a > b){         //如果前面一个数大于后面那个
        return 1;              //返回大于0的数，则a和b交换顺序
    } else{
        return 0;              //返回0，则a和b顺序不变
    }
}
var values = [0,1,15,10,5];
alert(values.sort(compare));          //0,1,5,10,15*/

//连接、截取
/*var values = [0,1,15,10,5];
alert(values.concat(20,["blue","black"]));             //0,1,15,10,5，20,blue,black
alert(values.slice(1,4));                             //1,15,10*/

//splice()
/*
var values = [0,1,15,10,5];
alert(values.splice(1,2,3,4,5,6,7));    //1,15   从位置1删除2个元素1,15，插入3,4,5,6,7
alert(values);                          //0,3,4,5,6,7,10,5
alert(values.length);                  //8*/
