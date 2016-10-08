/**
 * Created by Minnie on 2016/9/9.
 */
//例一，表达式语句
/*
var box = 100;         //变量赋值语句
box();                  //函数调用语句
box.property = 10;     //属性赋值语句
box.method();          //方法调用语句
*/

//例二，switch语句
/*var box = 10;
switch (box){            //指明box就是要比较的变量
    case 1:               //if(box == 1)
        alert('one');
        break;            //中途退出，防止穿透
    case 10:
        alert('ten');
        break;
    default:              //相对于else
        alert('none');
}*/

//例三，do...while 语句
/*var box = 1;
do{                      //先运行
    alert(box);          //打印1
    box++;               //box = 2
} while(box <= 4);      //判断条件，为true则执行do后面的循环体；为false则跳出循环*/
//while 语句
/*
var box = 1;
while (box <= 4){      //先判断，条件为true时才会执行循环体，为false不会执行
    alert(box);
    box++;
}*/
//for 语句
/*
for(var box = 1;box <= 4;box++){            //第一步，声明变量
    alert(box);                               //第二步，判断条件，为true则执行循环体，为false则退出
}                                              //第三步，执行循环
                                               //第四步，box++，然后进行第二步
*/
//例四，for...in 语句
/*
var box ={                   //创建一个对象
    'name' : 'lee',         //键值对，左边是属性名，右边是值
    'age' : '18',
    'height' : '180'
};
for(var p in box){         //声明变量p，并依次枚举box的所有属性
    alert(p);                //执行三次，打印出name,age,height
}*/
//例五，break和continue
/*
for (var box = 1; box <= 5; box++) {
    if(box == 4) break;                      //box等于4时，退出循环
    if(box == 2) continue;                   //box等于4时，不会执行后面的循环体，box会继续递增。
    document.write(box);                     //最后的输出的结果为13，见例五
}*/
