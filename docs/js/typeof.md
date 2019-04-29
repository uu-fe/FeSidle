## 内置类型
----------- 
JS中有七种内置类型，也是两大类型：基本类型()和对象（Object）。  
六种基础类型（原始类型）： 

- 空值 `null`
- 未定义 `undefined`
- 布尔值 `boolean`
- 数字 `number`
- 字符串 `string`
- 符号 `symbol`

一种引用类型（对象类型）： `object`  

?> 基础类型/原始类型，引用类型/对象类型   PS：叫法比较多，但是知道定义就不会乱了；

其中，NaN也属于 `number` 类型，并且 `NaN` 不等于自身（这个很关键哦！！！）
## Typeof
---------

typeof 对于基础类型，除了 `null` 都能正常判断。 

```js
typeof 1 //number  
typeof '1' //'string'  
typeof undefined //'undefined'
typeof true // 'boolean'
typeof Symbol() //'symbol'  
type name // 'undefined'
```  
`null` 比较特殊，typeof对它的处理有问题。据说这个bug存在20多年了，而且不回去修复它，因为牵一发而动全身。
```js
typeof null //'object'
```
正确判断`null`类型的方法  
```js
let m = null;
(!m && typeof m == "object"); //true
```  
!> 扫盲区  
```js
typeof function m(){/*..*/} // 'function'
```
(⊙o⊙)？，哪来的function类型呢？function类型实际上是对象类型里面的子类型。即函数是`可调用对象`  

```js
typeof [0,1,2] //'object'
```
What？难道说，数组也是对象？是的，数组也是 `object` 的一个子类型，颠覆了没？数组的元素按照顺序索引（对象通过字符串键值）  

下一节，更多方法区分数组和对象

## Instanceof
---------   
`instanceof` 可以正确的判断对象类型，原理：通过判断对象的原型链能否找到类型的 `prototype`。

?> 基础补充：表达式为：A instanceof B，如果A是B的实例，则返回true,否则返回false。 在这里需要特别注意的是：instanceof检测的是原型。  

```js
[0,1,2] instanceof Array //true  
new Date() instanceof Date //true
function(){} instanceof Function //true
```
?> 需要注意的是 `instanceof` 后面一定要是对象类型，区分大小写的哦。