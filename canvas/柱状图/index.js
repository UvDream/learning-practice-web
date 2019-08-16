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
  this.canvassWidth = canvas.width = Div.offsetWidth;
  this.canvasHeight = canvas.height = Div.offsetHeight;
  // 添加canvas进入div
  Div.appendChild(canvas);
  //   // 判断是否存在
  if (canvas && canvas.getContext) {
    this.ctx = canvas.getContext("2d");
  }
  //   图表信息
  //   图表距离canvas边缘距离
  this.cMargin = 30;
  this.cSpace = 60;
  //   图表高度
  this.cHeight = this.canvasHeight - this.cMargin * 2 - this.cSpace;
  //   图表宽度
  this.cWidth = this.canvassWidth - this.cMargin * 2 - this.cSpace;
  //   图表x,y轴交界点坐标
  this.originX = this.cMargin + this.cSpace;
  this.originY = this.cMargin + this.cHeight;
  // 绘制坐标轴
  this.drawLineLabelMarkers();
};
// 绘制坐标轴
Charts.prototype.drawLineLabelMarkers = function() {
  this.ctx.translate(0.5, 0.5);
  this.ctx.lineWidth = 1;
  // y轴
  this.drawLine(
    this.originX,
    this.originY,
    this.originX,
    this.cMargin,
    this.color.yColor
  );
  // x轴
  this.drawLine(
    this.originX,
    this.originY,
    this.originX + this.cWidth,
    this.originY,
    this.color.xColor
  );
  // 绘制标记
  this.drawMarkers();
  this.ctx.translate(-0.5, -0.5); // 还原位置
};
// 绘制直线
Charts.prototype.drawLine = function(x, y, X, Y, color) {
  this.ctx.strokeStyle = color;
  this.ctx.beginPath();
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(X, Y);
  this.ctx.stroke();
  this.ctx.closePath();
};

// 绘制标记
Charts.prototype.drawMarkers = function() {
  this.ctx.textAlign = "center";
  this.ctx.fillText(this.name[0], this.cMargin + this.cSpace - 2, this.cMargin);
};
