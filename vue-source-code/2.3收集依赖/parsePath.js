/*
 * @Author: wangzhongjie
 * @Date: 2019-07-01 14:13:34
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-07-01 14:21:15
 * @Description: 解析简单路径
 * @Email: uvdream@163.com
 */
const bailRE=/[^\w.$]/
export function parsePath(path){
    if(bailRE.test(path)){
        return
    }
    const segments=path.split('.')
    return function(obj){
        for(let i=0;i<segments.length;i++){
            if(!obj) return
            obj=obj[segments[i]]
        }
        return obj;
    }
}