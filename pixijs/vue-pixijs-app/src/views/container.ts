import * as PIXI from "pixi.js";
import logo from "@/assets/logo.png";

/**
 * 基本示例
 */
export default class PIXIContainer {
    public app: PIXI.Application | undefined;

    constructor(selector: string) {
        const appDom = document.querySelector<HTMLElement>(selector)
        this.app = new PIXI.Application({
            //长
            width: 800,
            //宽
            height: 600,
            //背景色
            backgroundColor: 0x1099bb,
            //透明背景
            transparent: true,
            resolution: window.devicePixelRatio || 1,
        })
        appDom?.appendChild(this.app.view)
        //容器
        const container = new PIXI.Container()
        this.app.stage.addChild(container)
        const texture = PIXI.Texture.from(logo)
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(texture);
            //设置锚点
            bunny.anchor.set(0.5);
            bunny.x = (i % 5) * 100;
            bunny.y = Math.floor(i / 5) * 100;
            container.addChild(bunny);
        }
        container.x = this.app.screen.width / 2
        container.y = this.app.screen.height / 2
        container.pivot.x = container.width / 2
        container.pivot.y = container.height / 2
        this.app.ticker.add(delta => {
            container.rotation -= 0.01 * delta
        })

    }
}
