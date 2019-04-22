function startMove(obj,json,fn){
clearInterval(obj.timer);
obj.timer=setInterval(function(){
    var bStop=true;
for(attr in json){
var iCur=0;
if(attr=='opacity'){
var iCur=parseInt((parseFloat(getStyle(obj,attr))*100).toFixed(0));
}
else{
var iCur=parseInt(getStyle(obj,attr))
}
var iSpeed=(json[attr]-iCur)/5
iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
if(iCur!=json[attr]){
    bStop=false;
}
if(attr=='opacity'){
    obj.style.opacity=(iCur+iSpeed)/100
    obj.style.filter="alpha(opacity:"+(iCur+iSpeed)+")"
}
else{
        if(attr=='zIndex'){
            obj.style[attr]=iCur+iSpeed
        }
        else{
            obj.style[attr]=iCur+iSpeed+"px";
        }   
}
}
if(bStop){
    clearInterval(obj.timer);
    if(fn){
        fn()
    }
}
},20)
}
function getStyle(obj,attr){
if(obj.currentStyle){
return obj.currentStyle[attr]
}
else{
return getComputedStyle(obj,false)[attr]
}
}
