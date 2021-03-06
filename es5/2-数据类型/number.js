/*
 * @Author: wangzhongjie
 * @Date: 2020-05-22 06:31:58
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-05-22 06:35:04
 * @Description: Number
 * @Email: UvDream@163.com
 */ 
        // 数值转换
      //Number(),parseInt(),parseFloat()
      // Number()
      // 1.Boolean=>true(1),false(0)
      console.log("bool=>", Number(true));
      // 2.number=>number
      // 3.null=>0
      console.log("null=>", Number(null));
      // 4.undefined=>NAN
      console.log("undefined=>", Number(undefined));
      // 5.字符串
      //5.1只包含数据(包括带正负号)=>十进制
      console.log("字符串数字=>", Number(021));
      //5.2包含浮点数=>浮点数
      console.log("浮点数=>", Number(1.11));
      //5.3空=>0
      console.log("空=>", Number(""));
      //5.4除以上外=>NAN
      //parseInt(参数,进制)两个参数,忽略字符串前面的空格,直到找到第一个非空字符串,如果第一个自负不是数字字符或者负号就返回NAN,直到解析完或者遇到一个非数字字符
      //1.
      console.log(parseInt("123blue1")); //123
      //2
      console.log(parseInt("")); //NAN
      //3
      console.log(parseInt("0XA")); //10(十六进制)
      //4
      console.log(parseInt(22.5)); //22.5
      //5
      console.log(080); //80(八进制)
      //6
      console.log(parseInt(70)); //70(十进制)
      //7
      console.log(parseInt("0xf")); //15(十六进制)
      //第二个参数
      console.log(parseInt("10", 2)); //2
      console.log(parseInt("10", 8)); //8
      console.log(parseInt("10", 10)); //10
      console.log(parseInt("10", 16)); //16
      //parseFloat()类似parseInt()不同的是解析到第一个小数点,第二个小数点无效
      console.log(parseFloat("123blue222")); //123
      console.log(parseFloat("0XA")); //0
      console.log(parseFloat("22.5")); //22.5
      console.log(parseFloat("22.5.35")); //22.5
      console.log(parseFloat("00022.5.35")); //22.5
      console.log(parseFloat("3.125e7")); //31250000