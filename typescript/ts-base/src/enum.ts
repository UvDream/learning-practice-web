/*
 * @Author: wangzhongjie
 * @Date: 2020-04-03 10:46:30
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2020-04-03 14:03:37
 * @Description:枚举
 * @Email: UvDream@163.com
 */
// 数字枚举
enum Role {
  //   Reporter ,
  Reporter = 1, //自定义枚举起始值
  Development,
  Main,
  Footer,
  Owner,
  Guest
}
console.log(Role.Reporter); //0 //1
// 枚举的实现原理反向映射

// 字符串枚举
enum Message {
  Success = "成功了!",
  Filed = "失败了!"
}
console.log(Message.Success);

// 异构枚举
enum Answer {
  N,
  Y = "yes"
}

// 枚举成员,枚举成员只读
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  //   computed(表达式)
  d = Math.random(),
  e = "123".length
}

// 常量枚举(编译的时候被移除)
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = "apple",
  b = "banana"
}

let e: E = 3;
let f: F = 3;
// e===f 不能比较
let e1 = E.a;
let e2 = E.b;
let e3 = E.a;
e1 == e3; //同枚举类型可以比较
let g1: G;
let g2: G.a;
// g1==g2

// 接口
interface List {
  readonly id: number; // readonly可读属性,不可修改
  name: string;
  //   3.第三种
  //   [x: string]: any;
  age?: number; //可选属性
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}
let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" }
  ]
};
render(result);
// 类型断言
// 1.第一种
render({
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" }
  ]
} as Result);
// 2.第二种
render(<Result>{
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" }
  ]
});
// 索引签名
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["A", "B"];
interface Names {
  [x: string]: string;
  [z: number]: string;
}
