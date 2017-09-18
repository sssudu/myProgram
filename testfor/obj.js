// function animal(name,age){
//     this.age = age;
//     this.name = name;

// }
// animal.prototype.say = function(){
//     console.log(this.name);
// }
// var animals = new animal('tom',18);
// function dog(name,age){
//     this.name = name;
//     this.age = age;
// }
// dog.prototype =new animal();

// dog.prototype.constructor = dog;

// var dog = new dog('black',10);
// dog.say();
// console.log(dog.age);
// console.log(animals.name);
// console.log(animals.age);


// var a=10; 
// function aaa(){ 
//     console.log(a);
// };            
// function bbb(){
// var a=20;
// aaa();
// //函数aaa无法访问bbb的局部变量
// }
// bbb();



//  aaa();
//  console.log(aaa); 
//  var a;
//  var aaa = function(){
//      a=20;
//  };
//  console.log(aaa);
// //  console.log(a);
//  function aaa(){
//     a=10; 
//  }

// function aaa(){
//     var a=b=10;
//     var a = 10;
//     b=10;
// }
// aaa();
// // console.log(a);
// console.log(b);

//函数内部变量提升优先取形参,
// var a=10;
// function aaa(a){ 
//     console.log(a);
//     var a=20; 
//     console.log(a)
// } 
// aaa(a);



//对象类型指针指向用一对象,修改同一个对象
//变量修改的时候另一个变量会跟着变化，但是当变量重新被定义时，则另一个不变化
//
// var a=[1,2,3];
// var b=a;
// b.push(4);
// console.log(a);


// function fun(n,o) {
//     console.log(o)
//     return {
//       fun:function(m){
//         return fun(m,n);
//       }
//     };
//   }
//   var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
//   var b = fun(0).fun(1).fun(2).fun(3);
//   var c = fun(0).fun(1);  c.fun(2);  c.fun(3);

//   var d = fun(1,3).fun(0).fun(1);
//   d.fun(5);

//递归查重
// var nums = [1, 5, 6, 7, 7, 23, 14, 11, 1, 4, 10, 25, 85, 123, 24, 14, 52, 123, 52, 32, 14, 23];
// var the = {};
// var next = 0;
// function findTheNum(nums, the) {
//     the[nums[next]] = 0;
//     for (var j = 0; j < nums.length; j++) {
//         if (nums[next] == nums[j]) {
//             the[nums[next]] += 1;
//         }
//     }
//     next++;

//     if (!nums[next]) {
//         return
//     } else {
//         findTheNum(nums, the);
//     }
// }
// findTheNum(nums, the);
// console.log(the)

//继承练习
// function animal(){
//     this.name = 'animal';
//     this.type = 'total';
// }
// animal.prototype.walk = function(){
//     console.log(this.name+' is walking');
// }

// function dog(){
//     //首行继承父类,后面改写
//     this.name = 'dog';
//     this.type = 'dogs';
// }
// dog.prototype = new animal();
// dog.prototype.constructor = dog;
// // var animal = new animal();
// var dog = new dog();
// console.log(dog instanceof animal);
// dog.walk();


// function foo() {
//     var a = 100;
//     function fo() {
//         console.log(a);
//     };
//     fo();
// }

// foo();


// var i =10;// i =10 ,
// i++;//i=11
// console.log(i);//11
// console.log(i++);//i=12 //11
// console.log(++i);//i=13 //13
// var  y = i++ - --i;//i=13 //13 13 y=0;
// console.log(y);//0
// console.log(i++);//i=14//13
// y=++i + y-- - --y;//i=15 //15 0 -2 y=17
// console.log(y);//17
// console.log(--y);//16 
// y+=10;26
// console.log(++y);27

// console.log(Math.PI);

// function Circle(r){
//     this.r = r||0;
    
// }
// Circle.prototype.area=function(){
//     return this.r * this.r * Math.PI;
// }
// Circle.prototype.ZhouChang = function(){
//     return this.r * 2 *Math.PI;
// }


// var c = new Circle(3);
// console.log(c.area());
// console.log(c.ZhouChang());
// var p ;
// var sum =0;
// var opera = -1;
// for(var i =0;i<20000000000;i++){
//     opera = -opera;
//     sum +=opera*(1/(1+i*2))
    
// }
// console.log(4*sum);


// 1.
// var a =3;
// var b =4;
// var c =5;
// //三元,表达式为true,执行前面,false执行后面
// console.log(a>b?a:c);

// 2.
// var a = 100;

//直接a属于全局变量,
// function foo(){
//     // console.log(a);
//     //没有var定义的全局变量不会提升
//     a = 10;
//     console.log(a);
// }
// foo();

// (function(){
//  var a =b= 3;
// })()
// // a = 3;
// //报错类型undefined
// //数字类型number
// console.log(typeof a);

//6.
// var a = 100;
//同名局部变量变量提升与参数优先取参数
// function foo(a){
//     console.log(a);
//     a = 10;
//     console.log(a);
// }
// foo(a);
// console.log(a);

//7.
    // var n =999;
    // function foo(n){
    //     n = n+100;
    //     console.log(n);
    // }
    // foo(n);

//8.
    // function foo(){
    //     var n =999;
    // }
    // foo();
    // console.log(n);

    //9.
    
    // function foo(){
    //     n = 999;
    // }
    // foo();
    // console.log(n);

    //10.
    // var a = 100;
    // function foo(){
    //     console.log(a);
    //     var a = 10;console.log(a);
    // }
    // foo();
    // console.log(a);

    //11.
    // function add(){
    //     n = 1000;
    // }
    // var y = add();
    // console.log(y);

    //12.
    // (function(){
        //变量 = 函数表达式只有在只可以通过变量名访问,不能根据函数名访问
        //具名函数表达式,无法在定义域内提升,声明函数可以提升
        // var y = function add(){
        //     console.log(1);
        // }
        // y();

        // add();
    // })()

    //13.

    // var str = '10ss';
    //需要变量接收
    // str = str.split('').reverse().join('');
    // var num = 20;
    // console.log(str+num);
    // console.log(str);

    //14.
    // var k = 0;
    // for(i=0,j=0;i<10,j<6;i++,j++){

    // }
    // k = i+j;
    // console.log(k);


    //递归階乘
    // function rec(x){
    //     if(x==1){
    //         return 1
    //     }else{
    //         return x*rec(x-1)
    //     }

    // }
    // console.log(rec(2))

    // Array.prototype.rec = function(num,min,max){
    //     if(num==0){
    //         console.log(this.sort(function(a,b){
    //             return a>b;
    //         }));
    //         return this;
    //     }
    //     if(num>=10){
    //         num=10;
    //     }
    //     if(min+max){
    //         var rand = parseInt(Math.random()*(max-min+1)-min);
    //     }else{
    //         var rand = parseInt(Math.random()*10);
    //     }
        
    //     if(this.indexOf(rand)==-1){
    //         this.push(rand);
    //         this.rec(num-1,min,max)
            
    //     }else{
    //         this.rec(num,min,max);
    //     }
        
    // }
    // var nums = [];
    // nums.rec(8);
    // console.log(nums)

    



