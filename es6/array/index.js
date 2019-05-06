/**
 * 数组根据字段Boolean值排序
 */
var arr = [
    {
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
 * 合并两个数组
 */
var a=["迈凯伦"]
var b=["篮球"]
var c =["足球"]
var d=a.concat(b,c)
console.log("合并数组",d)
/**
 * 将数组变成字符串
 */
var e=d.join(d)
console.log("数组变字符串",e)

/**
 * 删除数组最后一个元素
 */
var f=["1","2","3"]
console.log("删除最后一个的元素",f.pop())
console.log("删除后的数组",f)