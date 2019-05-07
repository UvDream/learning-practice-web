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