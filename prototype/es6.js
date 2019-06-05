class RegCode{
    constructor(data){
        console.log("传入数据")
        console.log(data)
        this.data=data
        this.canvas=null;
        this.context=null;
    }
    draw(dom,callback=function(){}){
        console.log("开始画")
        if(!this.context){
            this.canvas=dom;
            if(!this.canvas) return;
            this.context=this.canvas.getContext('2d');
            if(!this.context) return
        }
        let colors=this.getColor(this.data.backgroundColor)
        this.context.fillStyle = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.arc()
    }
    arc(){
        for(let i=0;i<this.data.dotNum;i++){
            // 随机获取圆心
            let x=this.getRand(0,this.canvas.width)
            let y=this.getRand(0,this.canvas.height)
            this.context.beginPath();
            // 指定圆周路径
            this.context.arc(x,y,this.data.dotR,Math.PI*2,false)
            this.context.closePath();
            let colors=this.getColor(this.backgroundColor);
            this.context.fillStyle=`rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`
            this.context.fill()
        }
    }
    
    // 公用方法
    getColor(arr){
        let colors=new Array(3).fill("")
        colors=colors.map(r=>this.getRand(...arr))
        return colors
    }
    getRand(...arr){
        arr.sort((a,b)=>a-b);
        console.log(arr)
        return Math.floor(Math.random()*(arr[1]-arr[0]+arr[0]))
    }
    
}

