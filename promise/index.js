// Promise() 同步 executor 同步
// const p=new Promise((resolve,reject)=>{

// })
// p.then(res=>{

// })
// 异步程序
// var data=$.ajax({
//     url:"http://localhost:3000/data.json",
//     async:false
//     // success: function(data){
//     //     console.log(getName(data));
//     // }
// })
// console.log(data.responseJSON);
// console.log('打印一下');

function getName(data) {
    return data.map(function (item) {
        return item.name
    })
}

// 异步问题同步化解决方案
var p = new Promise((resolve, reject) => {
    $.ajax({
        url: "http://localhost:3000/data.json",
        success: function (data) {
            resolve(data)
        }
    })
})
p.then(res => {
    console.log(getName(res));
})
console.log('打印查看顺序');