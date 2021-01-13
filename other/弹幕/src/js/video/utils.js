function isObject (value){
    const type=Object.prototype.toString.call(value)
    return type==='[object Object]';
}
function isArray(value){
    return Array.isArray(value)
}
function getTextWidth(content,fontSize){
    const _span=document.createElement('span')
    _span.innerText=content
    _span.style.fontSize=fontSize+'px';
    _span.style.position='absolute'
    document.body.appendChild(_span)
    let width=_span.offsetWidth;
    document.body.removeChild(_span)
    return width
}
function getTextPosition(canvas,fontSize,ctx){
    let X=canvas.width,Y=canvas.height*Math.random()
    Y<fontSize&&(Y=fontSize);
    Y>canvas.height-fontSize&&(Y=canvas.height-fontSize)
    ctx.X=X
    ctx.Y=Y
}
export {
    isObject,isArray,getTextWidth,getTextPosition
}