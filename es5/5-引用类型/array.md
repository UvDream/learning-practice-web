# Array

![Array](https://gitee.com/Uvdream/images/raw/master/images/20200612165828.png)

## 方法

### 修改器方法

#### `sort`

> 数组根据字段 Boolean 值/数字排序

```
   var arr = [{
   id: 1,

   read: true,

    name: "第一组"

  },

  {

    id: 2,

   read: false,

    name: "第二组"

  },

  {

   id: 3,

    read: true,

   name: "第三组"

  }

];

console.log('排序前', arr);

arr.sort((a, b) => b.read - a.read);

console.log('排序后', arr);
```

#### `sort`

> 按字母升序排序

```
var j = ["f", "b", "a", "d"];

console.log("按照字母升序排序", j.sort());
```

#### `concat`

> 合并两个数组

```
var a = ["迈凯伦"];

var b = ["篮球"];

var c = ["足球"];

var d = a.concat(b, c);

console.log("合并数组", d);
```

#### `pop`

> 删除数组最后一个元素

```
var f = ["1", "2", "3"];

console.log("删除最后一个的元素", f.pop());

console.log("删除后的数组", f);
```

#### `shift`

> 删除数组第一个元素

```
console.log("删除第一个的元素", f.shift());

console.log("删除后的数组", f);

```

#### `unshift`

> arr.unshift(element1, ..., elementN)

> 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组),并且返回新的长度

```
console.log(f)

console.log("数组开头添加元素",f,f.unshift("呵呵"))
```

#### `push`

> 数组末尾添加新元素

```
d.push("新加元素");

console.log("数组尾部添加新元素", d);
```

#### `reverse`

> 数组顺序反转,并非排序

```
var g = ["1", "2", "4", "3"];

console.log("数组顺序反转", g.reverse());
```

#### `splice`

> 在元素第二个位置添加一个元素

```
g.splice(2, 0, "新增");

console.log("在数组第二位置新增", g);
```

![image-20200611063835770](https://gitee.com/UvDream/images/raw/master/images/20200611063837.png)

### 访问方法

#### `slice`

> 从数组中选取一个元素

```
console.log("数组选定特定元素", g.slice(1, 2));
```

