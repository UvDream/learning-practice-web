import * as PIXI from "pixi.js"

export default class Line {
    public app: PIXI.Application | undefined;

    init(selector: string) {
        const appDom = document.querySelector<HTMLElement>(selector)
        this.app = new PIXI.Application({
            width: 1000,
            height: 1000,
            antialias: true,
            backgroundAlpha: 2,
            resolution: 1,
        })
        appDom?.appendChild(this.app.view);

        const graphics = new PIXI.Graphics();

        /**
         * 绘制圆
         */
        graphics.beginFill(0xffffff)
        /**
         * drawCircle(x,y,r)
         * x:圆心x
         * y:圆形y
         * r:半径
         */
        graphics.drawCircle(50, 50, 50)
        /**
         * 绘制边框圆
         */
        graphics.lineStyle(1, 0xfffff, 1)
        graphics.beginFill()
        graphics.drawCircle(500, 50, 50)
        /**
         * 绘制椭圆
         */
        graphics.drawEllipse(700, 50, 100, 50)
        graphics.endFill()
        /**
         * 绘制矩形
         */
        //填充色
        graphics.beginFill(0xff2ff1)
        /**
         * drawRect(x,y,w,h)
         * w:宽度
         * h:长度
         */
        graphics.drawRect(100, 10, 100, 100)
        graphics.endFill()
        /**
         * 绘制边框矩形
         */
        graphics.beginFill()
        graphics.lineStyle(1, 0xfffff, 1)
        graphics.drawRect(210, 10, 200, 100)
        graphics.endFill()
        /**
         * 绘制圆角矩形
         */
        graphics.lineStyle(2, 0xff00ff, 1)
        /**
         * drawRoundedRect(x,y,w,h,radius)
         * radius:边款圆半径
         */
        graphics.drawRoundedRect(10, 150, 150, 100, 10)
        graphics.endFill()
        /**
         * 绘制多边形
         */
        const path = [100, 170, 200, 300, 600, 100, 500, 800]
        graphics.lineStyle(0)
        graphics.beginFill(0x3500FA, 1);
        graphics.drawPolygon(path);
        graphics.endFill()
        /**
         * 绘制线段
         */
        graphics.lineStyle(2, 0xfffff)
        graphics.moveTo(0, 0)
        graphics.lineTo(500, 500)
        graphics.endFill()
        /**
         *  绘制弧形
         */
        graphics.arc(600, 600, 50, Math.PI, 2 * Math.PI)
        this.app.stage.addChild(graphics)
        /**
         * 绘制贝斯尔曲线
         */
            //线条颜色
        const bessel = new PIXI.Graphics();
        bessel.lineStyle(5, 0xAA0000, 1);
        //绘制贝塞尔曲线
        bessel.bezierCurveTo(100, 200, 200, 200, 240, 100);
        bessel.position.x = 50;
        bessel.position.y = 50;
        this.app.stage.addChild(bessel)
    }
}
