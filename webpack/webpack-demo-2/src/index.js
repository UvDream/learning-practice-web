import "./index.less"
import webpack from "./Webpack.png"
class Test {
    constructor() {
      // document.write('hello world')
      this.renderDiv()
    }
    renderDiv() {
      const div = document.createElement('div')
      div.className = 'test'
      div.innerHTML = 'hello world'
      document.body.appendChild(div)
      const img = document.createElement('img')
    img.src = webpack
    document.body.appendChild(img)
    }
  
  }
  
  new Test()
  