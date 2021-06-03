interface A { a: boolean }
interface B { b: number }
interface C { x: A }
interface D { x: B }
type AB = C & D
let abc: AB = {
    x: {
        a: false,
        b: 1
    }
}
console.log(abc);
