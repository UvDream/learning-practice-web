import * as PIXI from "pixi.js";

export default class Dynamic {
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
        this.app.stage.interactive = true
        appDom?.appendChild(this.app.view);
        const thing = new PIXI.Graphics();
        thing.lineStyle(2, 0xfffff)
        thing.moveTo(0, 0)
        thing.lineTo(500, 500)
        thing.endFill()
        this.app.stage.addChild(thing);
        // thing.x = 800 / 2;
        // thing.y = 600 / 2;
        // let count = 0;
        // this.app.ticker.add(() => {
        //     count += 0.1;
        //     thing.clear();
        //     thing.lineStyle(10, 0xff0000, 1);
        //     thing.beginFill(0xffFF00, 0.5);
        //     thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        //     thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
        //     thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
        //     thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
        //     thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        //     thing.closePath();
        //     thing.rotation = count * 0.1;
        // });
    }

    drawLine(source: { x: number; y: number },
             target: { x: number; y: number }, dashWidth?: number, spaceWidth?: number) {
        //竖向的线条

    }
}
