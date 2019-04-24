## 基础

---

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)：闭包是函数和声明该函数的词法环境的组合；不好理解，看代码

```javascript
function sidle(){
    //定义局部变量
    let name = "Male";
    function writeName(){
        //使用父级函数声明的变量
        console.log(name);
    }
    writeName();
}
sidle(); //Male
```

这个例子解释：引擎是如何解析函数嵌套中的变量的。再深点，看代码

```javascript
function sidle() {
    //定义局部变量

    let name = "Male";

    function writeName() {

        //使用父级函数声明的变量

        alert(name);

    }

    return writeName;

}
let myFunc = sidle();
myFunc();//Male
```

内部函数writeName在执行前，被外部函数返回。
