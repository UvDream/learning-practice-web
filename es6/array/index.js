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
console.log('排序前', this.arr)
this.arr.sort((a, b) => b.read - a.read)
console.log('排序后', this.arr)