## 数组去重

---

!> new Set  

ES6中新增了Set数据结构，类似于数组，但是它的成员都是唯一的，其构造函数可以接受一个数组作为参数  

```js
let arr1 = [1,2,1,4,5,4];
let set = new Set(arr1);
console.log(set) // => Set(length) {1,2,4,5}  
```

!> Array.from  

ES6中Array新增了一个静态方法Array.from，可以把类似数组的对象转换为数组  

```js
let arr1 = [1,2,1,4,5,4];
let set = new Set(arr1);
let arr2 = Array.from(set);
console.log(arr2) //=> [1,2,4,5]
```

### ES6方法

借用上面的例子可实现一行代码去重  

```js
let array = Array.from(new Set([1,2,2,2,1,3]));
console.log(array) //[1,2,3]
```

### ES5方法

Es5实现数组去重（过滤NaN）

```js
//为了便于阅读，就多个var了
var arr1 = [0,'3',1,5,2,2,3,NaN,NaN,{}]
Array.prototype.uniq = function(){
    var arr = [];
    var flag = true;
    this.forEach(function(item){
        //排除NaN
        if(item != item){
            flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
            //阻止重复的NaN进入条件
            flag = false;
        }else{
            arr.indexOf(item) === -1 ? arr.push(item) : '';
        }
    })
    return arr;
}
arr1.uniq();
```

### ES6 数据对象去重

---

```javascript
//领取列表去重

let obj = {};

let arr = [{name:'male',id:1},{name:'lala',id:1},{name:'luce',id:0},{name:'lucced',id:5}];
let newarr = arr.reduce((cur, next) => {
    obj[next.task_id] ? "" : (obj[next.task_id] = true && cur.push(next));
    return cur;
    }, []);
console.log(newarr, "去重后的数据");
```

<!-- ## 数组交集

---

### ES6

!> filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素 true保留，false则不保留

```js
let a = new Set([1,1,12,0,3]);
let b = new Set([3,5,0,1]);
let result = [..a].filter(item=>b.has(item));
console.log(result); //[1,0,3]
``` -->
