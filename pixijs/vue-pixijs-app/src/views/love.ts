import * as PIXI from "pixi.js";

export default class Love {
    public app: PIXI.Application | undefined;
    init(selector:string){
        const appDom = document.querySelector<HTMLElement>(selector)
        this.app = new PIXI.Application({
            width: 1000,
            height: 1000,
            antialias: true,
            backgroundAlpha: 2,
            resolution: 1,
        })
        this.app.stage.interactive=true
        appDom?.appendChild(this.app.view);
        const bessel = new PIXI.Graphics();
        bessel.lineStyle(2, 0xAA0000);
        //绘制贝塞尔曲线
        bessel.moveTo(200,100)
        bessel.bezierCurveTo(150, 50, 50, 150, 200, 220);
        bessel.moveTo(200,100)
        bessel.bezierCurveTo(250, 50, 350, 150, 200, 220);
        this.app.stage.addChild(bessel)

    }
}
