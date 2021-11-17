import * as PIXI from "pixi.js";
import logo from "@/assets/logo.png";
import ppt from "@/assets/ppt.png";
import {Group, Stage, Layer} from "@pixi/layers";

/**
 * 基本示例
 */
export default class PIXILayer {
    public app: PIXI.Application | undefined;

    constructor(selector: string) {
        const appDom = document.querySelector<HTMLElement>(selector)
        this.app = new PIXI.Application({
            //长
            width: 1000,
            //宽
            height: 600,
            //背景色
            //透明背景
            // transparent: true,
            // resolution: window.devicePixelRatio || 1,
        })
        const greenGroup = new Group(0, true);
        greenGroup.on('sort', (sprite: any) => {
            sprite.zOrder = sprite.y;
        });
        const blueGroup = new Group(1, ((sprite: any) => {
            // blue bunnies go up
            sprite.zOrder = -sprite.y;
        }));
        const dragGroup = new Group(2, false);
        this.app.stage = new Stage();
        this.app.stage.sortableChildren = true;
        this.app.stage.addChild(new Layer(greenGroup));
        this.app.stage.addChild(new Layer(blueGroup));
        this.app.stage.addChild(new Layer(dragGroup));
        const blurFilter = new PIXI.filters.BlurFilter();
        blurFilter.blur = 0.5;
        const textureGreen = PIXI.Texture.from(logo);
        const textureBlue = PIXI.Texture.from(ppt);
        const bunniesEven = new PIXI.Container();

        this.app.stage.addChild(bunniesEven);


        //添加节点
        for (let i = 0; i < 5; i++) {
            const bunny = new PIXI.Sprite(i%2==0?textureGreen:textureBlue);
            bunny.width = 50;
            bunny.height = 50;
            bunny.position.set(100 + 20 * i, 100 + 20 * i);
            bunny.anchor.set(0.5);
            //关键点
            bunny.parentGroup = greenGroup;
            bunniesEven.addChild(bunny);
            subscribe(bunny);
        }



        function subscribe(obj: any) {
            obj.interactive = true;
            obj.on('mousedown', onDragStart)
                .on('touchstart', onDragStart)
                .on('mouseup', onDragEnd)
                .on('mouseupoutside', onDragEnd)
                .on('touchend', onDragEnd)
                .on('touchendoutside', onDragEnd)
                .on('mousemove', onDragMove)
                .on('touchmove', onDragMove);
        }



        function onDragStart(event: any) {
            if (!this.dragging) {
                this.oldGroup = this.parentGroup;
                this.parentGroup = dragGroup;
                this.dragging = true;
            }
        }
        function onDragMove() {
            if (this.dragging) {
                const newPosition = this.data.getLocalPosition(this.parent);
            }
        }
        function onDragEnd() {
            if (this.dragging) {
                this.dragging = false;
                this.parentGroup = this.oldGroup;
            }
        }



        appDom?.appendChild(this.app.view)
    }
}
