console.log("%c-----------ES6 Array.of()语法探究-----------------", "color: blue;font-size:20px");
/**
 * Array.of()将一组值转换为数组,弥补数组构造函数Array()的不足
 */
console.log("Array.of()",Array.of(2,3,4))
//ES5模拟
function ArrayOf(){
    return [].slice.call(arguments)
}
console.log("ES5模拟",ArrayOf(1,4,5))