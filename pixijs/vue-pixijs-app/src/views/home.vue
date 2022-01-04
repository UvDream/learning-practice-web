<template>
  <div class="demo">
    <div ref="appDom" class="demo-block" id="appDom"></div>
    <!--    <div ref="appDom" class="demo-block" id="appDom2"></div>-->
    <!--    <div ref="appDom" class="demo-block" id="appDom3"></div>-->
    <!--    <div ref="appDom" class="demo-block" id="appDom4"></div>-->
    <!--    <div ref="appDom" class="demo-block" id="appDom5"></div>-->

  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import * as PIXI from "pixi.js"
import logo from "@/assets/logo.png";
import ppt from "@/assets/ppt.png";
import PIXILayer from "./layer"
import {EventSystem} from "@pixi/events"

onMounted(() => {
  new PIXILayer("#appDom")
  // delete PIXI.Renderer.__plugins.interaction;
  //
  // const app = new PIXI.Application({
  //   width:1960,
  //   height:1060,
  //   antialias: true,
  //   autoDensity: true,
  //   backgroundColor: 0x1099bb,
  //   resolution: devicePixelRatio,
  // });
  // if (!('events' in app.renderer)) {
  //   app.renderer.addSystem(EventSystem, 'events');
  // }
  // document.body.appendChild(app.view);
  //
  // app.stage.interactive=true
  // app.stage.hitArea = app.renderer.screen;
  //
  // const sprite=new PIXI.Sprite(PIXI.Texture.from(logo))
  // sprite.interactive = true;
  // const wrapper=new PIXI.Container()
  // wrapper.addChild(sprite)
  // const bunny=app.stage.addChild(wrapper)
  // app.stage.interactive = true;
  // console.log(bunny)
  //
  // bunny.on("click",(e)=>{
  //   console.log("单击1",e);
  //   console.log(sprite.containsPoint({x:e.client.x,y:e.client.y}))
  // })
  //
  // bunny.on("mousedown",e=>{
  //   let x=e.client.x, y=e.client.y,elementX=sprite.x,elementY=sprite.y
  //   app.stage.on("mousemove",ev=>{
  //     console.log("移动")
  //     sprite.x=elementX+ev.client.x-x
  //     sprite.y=elementY+ev.client.y-y
  //   })
  // })
  // bunny.on("mouseup",e=>{
  //   console.log("移除")
  //   app.stage.off("mousemove")
  // })




  // bunny.on("mouseupoutside",e=>{
  //   console.log("鼠标松下")
  // })
  // bunny.on("mouseout",(e)=>{
  //   console.log("鼠标移开",e);
  // })
  // app.renderer.render(app.stage)

});
</script>

<style scoped>
.demo {
  display: flex;
  flex-wrap: wrap;
}

.demo-block {
  outline: 1px solid red;
}
</style>
