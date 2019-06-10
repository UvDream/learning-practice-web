console.log("%c-----------ES5 String语法探究-----------------", "color: red;font-size:20px");
/**
 * charAt() 方法可返回指定位置的字符
 */
var str = "HELLO WORLD";
console.log("charat():", str.charAt(2))
/**
 * charCodeAt() 返回字符串第一个字符的 Unicode 编码
 */
console.log("charCodeAt():", str.charCodeAt(0))
/**
 * contact() 连接两个字符串
 */
var str1 = "!"
console.log("contact():", str.concat(str1))
/**
 * fromCharCode() 将 Unicode 编码转为一个字符
 */
console.log("fromCharCode():", String.fromCharCode(65))
/**
 * indexOf() 查找字符串 "HELLO"
 */
console.log("indexOf():", str.indexOf("HELLO"))
/**
 * lastIndexOf() 查找字符串 "WORLD"最后出现的位置
 */
console.log("lastIndexOf():", str.lastIndexOf("WORLD"))
/**
 * match() 在字符串中查找 "WORLD"
 */
console.log("match():", str.match(/WORLD/g))
/**
 * replace() 替换
 */
console.log("replace():", str.replace("WORLD", "BEAUTIFUL"))
/**
 * search() 查找位置
 */
console.log("search():",str.search("HELLO"))
/**
 * slice() 提取字符串的某个部分， 并以新的字符串返回被提取的部分
 */
console.log("slice():",str.slice(1,3))
/**
 * split() 把一个字符串分割成字符串数组
 */
console.log("split():",str.split(""))
/**
 * substr() 抽取指定数目的字符
 */
console.log("substr():", str.substr(2,3))
/**
 * substring() 方法用于提取字符串中介于两个指定下标之间的字符
 * 两个参数:
 * from(必需): 一个非负的整数， 规定要提取的子串的第一个字符在 string Object 中的位置
 * to(可选): 个非负的整数， 比要提取的子串的最后一个字符在 string Object 中的位置多 1,如果省略该参数,那么返回的子串会一直到字符串的结尾
 */
console.log(str.substring(3) + "<br>")
/**
 * toLowerCase() 把字符串转换为小写
 * toUpperCase() 把字符串转换为大写
 */
console.log("toLowerCase():",str.toLowerCase())
/**
 * valueOf() String 对象的原始值
 */
console.log("valueOf()", str.valueOf())