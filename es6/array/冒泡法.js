// 冒泡法排序
var arrData2 = [7, 2, 4, 1, 9, 8]
function bubbleSort(arr) {
    console.time()
    // 外层arr.length-1去掉最后一个元素,第一次循环会找出最大的数放在最后一个元素
    for (let i = 0; i < arr.length - 1; i++) {
        // 内层arr.length-1去掉最后一个元素-i是去掉已经找出了几个一次排序的大数
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let max = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = max
            }
        }
    }
    console.timeEnd()
    return arr
}
function bubbleSort1(arr) {
    console.time()
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let max = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = max
            }
        }
    }
    console.timeEnd()
    return arr
}
console.log(bubbleSort(arrData2));
console.log(bubbleSort1(arrData2));
