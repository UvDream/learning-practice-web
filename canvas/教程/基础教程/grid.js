/*
 * @Author: wangzhongjie
 * @Date: 2019-07-04 10:38:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-07-04 10:43:30
 * @Description: 绘制canvas网格图
 * @Email: uvdream@163.com
 */
function drawGrid(color, stepx, stepy, context) {
  context.save();
  context.fillStyle = "white";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.lineWidth = 0.5;
  context.strokeStyle = color;
  for (var i = stepx; i < context.canvas.width; i += stepx) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, context.canvas.height);
    context.closePath();
    context.stroke();
  }
  for (var j = stepy; j < context.canvas.height; j += stepy) {
    context.beginPath();
    context.moveTo(0, j);
    context.lineTo(context.canvas.width, j);
    context.closePath();
    context.stroke();
  }
  context.restore();
}
