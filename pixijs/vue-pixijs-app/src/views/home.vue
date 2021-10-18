<template>
    图片
  <div ref="appDom"></div>
</template>

<script setup lang="ts">
import * as PIXI from "pixi.js";
import logo from "@/assets/logo.png";
import {ref, onMounted, Ref} from "vue";

let appDom: Ref<HTMLElement> = ref(null) as unknown as Ref<HTMLElement>;
const app = new PIXI.Application({
  width: 400,
  height: 400,
  antialias: true,
  backgroundAlpha: 2,
  resolution: 1,
})
//start
const bunny = PIXI.Sprite.from(logo)
bunny.anchor.set(0.5)
bunny.x = app.screen.width / 2
bunny.y = app.screen.height / 2
app.stage.addChild(bunny)
// end
app.renderer.backgroundColor = 0x061639;
onMounted(() => {
  appDom.value.appendChild(app.view);
});
</script>

<style scoped>

</style>
