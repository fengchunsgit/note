// console.log("------------------------------------")
// var person = new Object();
// person.name = "Nike";
// console.log(person.name);//"Nike"

// var name="ad";
// name.age=23;
// console.log(name.age);//undefined

// console.log("------------基本对象---------------")

// var num1=5;
// var num2=num1;//num1 num2相互独立，操作一个变量不会影响另外一个变量的值
// console.log(num1,num2);
// num1=66;
// console.log(num1, num2);

// console.log("------------引用对象--------------")

// var obj1=new Object();
// var obj2=obj1;
// obj1.name="hello";
// console.log("obj2.name",obj2.name);//两个对象引用的都是同一个对象

// console.log("------------传递参数 基本数据类型--------------")

// function addTen(num){
//   num+=10;//num 实际上是局部变量，他和外部的count互不认识，仅仅具有相同的值
//   return num;
// }

// var count =20;
// var result=addTen(count);
// console.log(count); //20,没有变化
// console.log(result);//30

// console.log("------------传递参数 引用数据类型--------------")
// function setName(obj){
//   obj.name="Nikennnnn";
// }

// var person=new Object();
// setName(person);
// console.log(person.name);

// function setName(obj){
//   obj.name="nike";
//   obj=new Object();
//   obj.name="Greg";
// }
// var person = new Object();
// setName(person);
// console.log(person.name);//???

// var color="blue";
// function changeColor(){
//   if(color==="blue"){
//     color="red";
//   }else{
//     color="blue";
//   }
// }

// changeColor();
// console.log("color is now "+ color);


//查询标识符

var color="blue";
function getColor(){
  //添加局部color，
  // var color="red";
  return color;
}
console.log(getColor());
