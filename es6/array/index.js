/**
 * 数组根据字段Boolean值/数字排序
 */
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
]
console.log('排序前', arr)
this.arr.sort((a, b) => b.read - a.read)
console.log('排序后', arr)
/**
 * 按字母升序排序
 */
var j = ["f", "b", "a", "d"]
console.log("按照字母升序排序", j.sort())

/**
 * 合并两个数组
 */
var a = ["迈凯伦"]
var b = ["篮球"]
var c = ["足球"]
var d = a.concat(b, c)
console.log("合并数组", d)


/**
 * 删除数组最后一个元素
 */
var f = ["1", "2", "3"]
console.log("删除最后一个的元素", f.pop())
console.log("删除后的数组", f)
/**
 * 删除数组第一个元素
 */
console.log("删除第一个的元素", f.shift())
console.log("删除后的数组", f)
/**
 * 数组末尾添加新元素
 */
d.push("新加元素")
console.log("数组尾部添加新元素", d)
/**
 * 数组顺序反转,并非排序
 */
var g = ["1", "2", "4", "3"]
console.log("数组顺序反转", g.reverse())
/**
 * 从数组中选取一个元素
 */
console.log("数组选定特定元素", g.slice(1, 2))
/**
 * 在元素第二个位置添加一个元素
 */
g.splice(2, 0, "新增")
console.log("在数组第二位置新增", g)
/**
 * 将数组变成字符串
 * join()和toSting()区别在于join()可以特定字符分割
 */
console.log("数组转换为字符串toString", g.toString())
console.log("数组变字符串join", g.join(":"))