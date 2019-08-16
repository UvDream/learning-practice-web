function Charts(params = {}) {
  console.log("传入参数", params);
  let p = Object.assign({}, params);
  //   挂载参数进入this
  Object.keys(p).forEach(k => {
    this[k] = p[k];
  });
}
// 初始化图标
Charts.prototype.initChart = function() {
  let Div = document.getElementById(this.el);
  let canvas = document.createElement("canvas");
  // 画布宽高
  let canvasWidth = (canvas.width = Div.offsetWidth);
  let canvasHeight = (canvas.height = Div.offsetHeight);
  // 添加canvas进入div
  Div.appendChild(canvas);
  // 判断是否
  if (canvas && canvas.getContext) {
    let ctx = canvas.getContext("2d");
  }
};
