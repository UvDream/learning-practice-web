class Drag{
    // 传入dom元素
    constructor(el){
        this.el=el;
        ['strX','strY','strT','curL','curT'].forEach(item=>{
            this[item]=null;
        })
        this.DOWN=this.down.bind(this);
        this.el.addEventListener('mousedown',this.DOWN)
    }
    // 点击事件
    down(ev){
        console.log('鼠标点击到浏览器最左边距离',ev.clientX)
        console.log('元素到浏览器最左边的距离',this.el.offsetLeft)
        let el=this.el;
        this.strX = ev.clientX;//鼠标点击处到浏览器窗口最左边的距离
        this.strY = ev.clientY;//鼠标点击处到浏览器窗口最上边的距离
        this.strL = el.offsetLeft;//元素到浏览器窗口最左边的距离
        this.strT = el.offsetTop;//元素到浏览器窗口最上边的距离

        this.MOVE = this.move.bind(this);
        document.addEventListener('mousemove', this.MOVE);
    }
    // 移动事件
    move(ev){
        let el=this.el;
        this.curL=ev.clientX-this.strX+this.strL
        this.curT = ev.clientY - this.strY + this.strT;
        el.style.left=this.curL+'px';
        el.style.top=this.curT+'px';
    }
}