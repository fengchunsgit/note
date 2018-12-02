# 第三章 基本概念

## 主要内容
- [语法](#3.1 语法)
- 关键字和保留字
- 变量
- 数据类型
- 操作符
- 语句
- 函数

## 3.1 语法

### 区分大小写
一切变量、函数名、操作符都区分大小写

### 标识符
标识符，是指变量、函数、属性的名字，或者函数的参数。
- 第一个字符必须是字母、下划线或者美元符号
- 其他字符可以是字母、下划线、美元符号或者数字

不能把关键字，保留字，true，false，null用作标识符。

惯例使用驼峰命名法,

```js
firstSecond
myCar
doSomeImportant
```

### 注释
```js
// 单行注释

/*
*这是一个多行注释
*第二行和第三行的*不是必须的，主要是为了提高可读性
*/
```
### 严格模式(strict mode)

要在整个脚本中开启严格模式，可以在顶部添代码`"use strict"`,这是一个编译提示(pragma).可以在函数内部上方包含这条编译提示，也可以指定函数在严格模式下执行

```js
function doSomething(){
  "use strict"
  //todo
}
```
### 语句
语句以分号结尾，如果省略分号，则由解析器确定语句的结尾。

建议任何时候不要省略它，
- 可以避免错误，可以通过删除多余空格来压缩代码
- 某些情况下增进代买的性能，解析器不必花时间推测应该在哪里插入分号了。

最佳实践是始终在控制语句中使用代码块，即使代码块只有一条语句。

## 3.2 关键字和保留字
使用关键字作为标识符，会导致`"Identifier Expected"`错误
- 关键字

- 保留字

## 变量
在所有函数之外声明的变量，叫做`全局变量`，因为它可被当前文档中的任何其他代码所访问。在`函数内部`声明的变量，叫做`局部变量`，因为它只能在该函数内部访问。

ECMAScript 6 之前的JavaScript没有 `语句块` 作用域；相反，`语句块`中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 x 的作用域是声明了 x 的那个函数（或全局范围），而不是 if 语句块。

```js
if (true) {
  var x = 5;
}
console.log(x); // 5
```
如果使用 ECMAScript 6 中的 let 声明，上述行为将发生变化。

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

```js
function test(){
  var message="hi";//函数内部生命，局部变量 
}
test();//输出undefined
console.log(message) //错误

function test2(){
  message2="hi";  //函数内部生命，省略了var 变成了一个全局变量。这种方法不推荐，在局部声明全局变量
}
test2();//输出undefined
console.log(message2);
```
```js
//可以在一条语句中定义多个变量
var message="hi",
    found=false,
    age=29

```

## 3.4 数据类型
最新的[规范](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types)有7中数据类型：
- 六种 原型 数据类型:
  - `Boolean`.  布尔值，`true` 和 `false`，都是小写False，True不正确.
  - `null`. 一个表明 `null` 值的特殊关键字。 JavaScript 是大小写敏感的，因此 `null` 与`Null`、`NULL`或其他变量完全不同。
  - `undefined`.  变量未定义时的属性。
  - `Number`.  表示数字，例如： `42` 或者 `3.14159`。
  - `String`.  表示字符串，例如：`"Howdy"`
  - `Symbol` ( 在 `ECMAScript 6` 中新添加的类型).。一种数据类型，它的实例是唯一且不可改变的。
- 以及` Object `对象

### typeof 操作符
