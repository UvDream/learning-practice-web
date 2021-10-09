<template>
  <div ref="appDom" id="app"></div>
</template>
<script setup lang="ts">
import * as PIXI from "pixi.js";
import { ref, onMounted, Ref } from "vue";
let appDom: Ref<HTMLElement> = ref(null) as unknown as Ref<HTMLElement>;
const app = new PIXI.Application({
  width: 400,
  height: 400,
  antialias: true,
  backgroundAlpha: 2,
  resolution: 1,
});
app.renderer.backgroundColor = 0x061639;
onMounted(() => {
  appDom.value.appendChild(app.view);
});
</script>
