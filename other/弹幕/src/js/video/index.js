import {isObject,isArray} from "./utils"
import Danmu from "./danmu"
class VideoDanmu{
    constructor(video,canvas,options){
        console.log(video,canvas,options)
        // 判断参数
        if(!video || !canvas || !options|| !isObject(options) )return
        // 判断数据
        if(!options.data||!isArray(options.data))return
         this.video=video;
         this.canvas=canvas;
         this.canvasCtx=canvas.getContext('2d');
         this.canvas.width=video.offsetWidth;
         this.canvas.height=video.offsetHeight;
         this.danmuPaused=true;
         Object.assign(this,options,{
             speed:2,
             runTime:0,
             color:"#fff"
         })
         console.log(this)
         this.danmuPool=this.createDanmuPool()
         console.log(this.danmuPool)
         this.render()
    }
    createDanmuPool(){
        return this.data.map(element=>new Danmu(element,this));
    }
    render(){
        console.log("绘制",this.video.currentTime)
        this.clearRect()
        this.drawDanmu()
        !this.danmuPaused&&requestAnimationFrame(this.render.bind(this))
    }
    drawDanmu(){
        let currentTime=this.video.currentTime
        this.danmuPool.map(item=>{
            if(!item.StopDrawing&&currentTime>=item.runTime){
                if(!item.isInitialize){
                    item.initialize()
                    item.isInitialize=true
                }
                item.X-=item.speed
                item.draw()
                if(item.X<=item.width*-1){
                    item.StopDrawing=true
                }
            }
        })
    }
    reset(){
        this.clearRect()
        let currentTime=this.video.currentTime
        this.danmuPool.map(item=>{
            item.StopDrawing=false;
            if(currentTime<=item.runTime){
                item.isInitialize=false
            }else{
                item.StopDrawing=true
            }
        })
    }
    addDanmu(data){
        this.danmuPool.push(new Danmu(data,this))
    }
    clearRect(){
        this.canvasCtx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}
export default VideoDanmu;