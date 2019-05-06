console.log("%c-----------ES6 Array.from()语法探究-----------------", "color: red;font-size:20px");
/**
 * Array.from()
 * 类对象转换为真数组
 * 或者扩展运算符
 */
let arrayLike = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
}
//ES5写法
console.log("ES5写法", [].slice.call(arrayLike))
//ES6写法
console.log("ES6写法", Array.from(arrayLike))
//扩展运算符
// 实际应用
let ps = document.querySelectorAll('p')
// 获取所有的p,这个ps就是一个伪数组
console.log(ps)
Array.from(ps).forEach(p => {
    console.log(p)
})

// 练习
// arguments 是一个对应于传递给函数的参数的类数组对象
// 遍历参数求和
function add() {
    var sum = 0,
        len = arguments.length;
    for (var i = 0; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
}

function add1() {
    [...arguments].forEach(element => {
        console.log(element)
    })
}
console.log("arguments", add(1, 2, 3))
// 扩展字符伪数组转真数组
add1(1, 2, 3)

// Array.from()第二个参数,类似于数组map方法,对数组每个数据处理,处理后的值返回数组
let arr1 = {
    "0": "1",
    "1": "2",
    "2": "3",
    length: 3
}
console.log(Array.from(arr1))
console.log("第二个参数", Array.from(arr1, x => x * x))
// 等同于map
console.log("map实现", Array.from(arr1).map(x => x * x))
let spans = document.querySelectorAll('span')
console.log("获取span NodeList", spans)
// map
let name1 = Array.prototype.map.call(spans, s => s.textContent)
console.log("map方法", name1)
// Array.from()
let name2 = Array.from(spans, s => s.textContent)
console.log("Array.from()", name2)

console.log("特别使用", Array.from({
    length: 2
}, () => "jack"))

// 可以测字符串长度