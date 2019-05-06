console.log("%cES6语法探究", "color: red;font-size:20px");
/**
 * Array.from()
 * 类对象转换为真数组
 */
let arrayLike={
    "0":"a",
    "1":"b",
    "2":"c",
    length:3
}
//ES5写法
console.log("ES5写法", [].slice.call(arrayLike))
//ES6写法
console.log("ES6写法",Array.from(arrayLike))