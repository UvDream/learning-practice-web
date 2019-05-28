/**
 * 参数
 */
// 雷达图数据
const mData = [{
        titleList: ['爱心传递至', '3个城市'],
        score: 3,
        fullScore: 5
    },
    {
        titleList: ['帮助了8人'],
        score: 5,
        fullScore: 10
    },
    {
        titleList: [`收到5感谢`],
        score: 5,
        fullScore: 10
    },
    {
        titleList: ['获得', '15人点赞'],
        score: 15,
        fullScore: 15
    },
    {
        titleList: [`可赠送10件闲置`],
        score: 10,
        fullScore: 20
    }
]
// 多边形边数
const mCount=mData.length;
// 最外层多边形边长
const prismW = 200
// 需要多少个多边形线框
const polygonCount = 5


/**
 * 画布
 */
const canvas = document.getElementById('canvas')
const ctx=canvas.getContext('2d')
// 画布长宽
const canvasW= canvas.clientWidth;
const canvasH=canvas.clientHeight;
/**
 * 公共参数
 */
const sAngle = (90 / mCount) / 180 * Math.PI
// 旋转度数
const rotateAngle = mCount % 2 === 0 ? 0 : (sAngle * (mCount % 4 === 3 ? -1 : 1))
/**
 * 背景画布
 */
const bgCanvas = document.createElement('canvas')
const bgCtx = bgCanvas.getContext('2d')
// 背景画布和画布长宽应该相等
bgCanvas.width=canvasW
bgCanvas.height=canvasH
// 画布中心
// 最外层多边形外接圆半径
const mRadius = prismW / 2 / Math.cos(108 / 2 / 180 * Math.PI)
// 多边形的内角角度
const mAngle = Math.PI * 2 / mCount
// 保存最外层多边形各个顶点的坐标
const polygonPoints = []
bgCtx.translate(canvasW / 2, canvasH / 2)
bgCtx.rotate(-rotateAngle)

drawPolygon()
function drawPolygon(){
      const r = mRadius / polygonCount
      let currentRadius = 0
      for (let i = 0; i < polygonCount; i++) {
          bgCtx.beginPath()
          currentRadius = r * (i + 1)
          for (let j = 0; j < mCount; j++) {
              const x = currentRadius * Math.cos(mAngle * j)
              const y = currentRadius * Math.sin(mAngle * j)
              // 记录最外层多边形各个顶点的坐标
              if (i === polygonCount - 1) {
                  polygonPoints.push([x, y])
              }
              j === 0 ? bgCtx.moveTo(x, y) : bgCtx.lineTo(x, y)
          }
          bgCtx.closePath()
          bgCtx.stroke()
      }
      // #endregion
      // #region 绘制多边形对角连线
      for (let i = 0; i < polygonPoints.length; i++) {
          bgCtx.moveTo(0, 0)
          bgCtx.lineTo(polygonPoints[i][0], polygonPoints[i][1])
      }
      bgCtx.stroke()
      ctx.drawImage(bgCanvas, 0, 0)
}