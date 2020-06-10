/**
 * sort
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
];
console.log('排序前', arr);
arr.sort((a, b) => b.read - a.read);
console.log('排序后', arr);

/**
 * sort
 * 按字母升序排序
 */
var j = ["f", "b", "a", "d"];
console.log("按照字母升序排序", j.sort());

/**
 * concat
 * 合并两个数组
 */
var a = ["迈凯伦"];
var b = ["篮球"];
var c = ["足球"];
var d = a.concat(b, c);
console.log("合并数组", d);

/**
 * pop
 * 删除数组最后一个元素
 */
var f = ["1", "2", "3"];
console.log("删除最后一个的元素", f.pop());
console.log("删除后的数组", f);

/**
 * shift
 * 删除数组第一个元素
 */
console.log("删除第一个的元素", f.shift());
console.log("删除后的数组", f);
/**
 * unshift
 * arr.unshift(element1, ..., elementN)
 * 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组),并且返回新的长度
 */
console.log(f)
console.log("数组开头添加元素",f,f.unshift("呵呵"))
/**
 * push
 * 数组末尾添加新元素
 */
d.push("新加元素");
console.log("数组尾部添加新元素", d);

/**
 * reverse
 * 数组顺序反转,并非排序
 */
var g = ["1", "2", "4", "3"];
console.log("数组顺序反转", g.reverse());

/**
 * splice
 * 在元素第二个位置添加一个元素
 */
g.splice(2, 0, "新增");
console.log("在数组第二位置新增", g);
console.log("**********************访问器方法***********************")

/**
 * every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
 *every() 方法使用指定函数检测数组中的所有元素：
 *如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
 *如果所有元素都满足条件，则返回 true。
 *every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
 *some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
 */
let ev = arr.every(item => {
    console.log("every方法");
    console.log(item);
    return item.read;
});
console.log(ev);
/**
 * concat() 
 * 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 */
const arr1=["a","b"]
const arr2=["c","d"]
const arr3=arr1.concat(arr2)
console.log("合并数组",arr1,arr2,arr3)
/**
 * includes() 
 * 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
 * arr.includes(valueToFind[, fromIndex])
 * 1.valueToFind:需要查找的元素值。
 * 2.fromIndex(可选):从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
 */
console.log("includes,包含",arr1.includes("a"))

/**
 * slice
 * 从数组中选取一个元素
 * arr.slice([begin[, end]])
 * 1.begin(可选):提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
 * 2.end(可选):提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
 */
console.log("数组选定特定元素", g.slice(1, 2));
/**
 * join
 * 将数组变成字符串
 * join()和toSting()区别在于join()可以特定字符分割
 */
console.log("数组转换为字符串toString", g.toString());
console.log("数组变字符串join", g.join(":"));
/**
 * indexOf()
 * 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 * lastIndexOf() 
 * 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
 * arr.lastIndexOf(searchElement[, fromIndex]) 
 * fromIndex:从哪个索引开始寻找
 */
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.lastIndexOf('bison'));
console.log("**********************迭代方法***********************")