console.log("%c-----------ES6 Array.of()语法探究-----------------", "color: blue;font-size:20px");
/**
 * Array.of()将一组值转换为数组,弥补数组构造函数Array()的不足
 */
console.log("Array.of()", Array.of(2, 3, 4))
//ES5模拟
function ArrayOf() {
    return [].slice.call(arguments)
}
console.log("ES5模拟", ArrayOf(1, 4, 5))

console.log("%c-----------ES6 数组实例的copyWithin语法探究-----------------", "color: orange;font-size:20px");
/**
 * copyWithin:在当前数组内部指定位置的成员复制到其他位置
 * 三个参数:
 * target(必需):从该位置开始替换数据
 * start(可选):从该位置开始读取数据,默认位0,如果为负数的话表示倒数
 * end(可选): 从该位置停止读取数据, 默认等于数组长度, 如果为负数的话表示倒数
 */
// 从3号位置开始把数组复制到1号位置
console.log([1, 2, 3, 4, 5].copyWithin(0, 3)) // [4, 5, 3, 4, 5]
// 将3号位置数据复制到1号位置
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)) // [4, 2, 3, 4, 5]
// -2相当于3号位置,-1相当于5好位置
console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)) // [4, 2, 3, 4, 5]

console.log("%c-----------ES6 数组实例的find()/findIndex()语法探究-----------", "color: orange;font-size:20px");
/**
 * find()用于找出第一个符合条件的数组成员,参数为回调函数
 * 回调函数三个值
 * value:数值
 * index:序号
 * arr:原数组
 */
// 找出第一个小于0的成员
console.log("find():找出小于0的成员", [1, -4, 10].find((x) => x < 0))
let find = [1, 5, 10, 12].find(function (value, index, arr) {
    console.log(value, index, arr)
    return value > 9
})
console.log(find)
/**
 * findIndex()和find方法很类似,返回第一个符合条件的成员的位置
 */
let findIndex = [1, 5, 10, 12].findIndex(function (value, index, arr) {
    console.log(value, index, arr)
    return value > 9
})
console.log("findIndex():返回符合条件第一个成员位置", findIndex)