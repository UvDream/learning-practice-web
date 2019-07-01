export default class Dep{
    constructor(){
        this.subs=[]
    }
    addSub(sub){
        this.subs.push(sub)
    }
    removeSub(){
        this.removeSub(this.subs,sub)
    }
    depend(){
        if(window.target){
            this.addSub(window.target)
        }
    }
    notify(){
        const subs=this.subs.slice()
        for(let i=0;i<subs.length;i++){
            subs[i].update()
        }
    }
   
}
function remove(arr,item) {
        if(arr.length){
            const index=arr.indexOf(item)
            if(index>-1){
                return arr.splice(index,1)
            }
        }
}