/*
 * @Author: wangzhongjie
 * @Date: 2021-01-12 16:07:23
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-01-13 17:05:34
 * @Description: 
 * @Email: UvDream@163.com
 */
import VideoDanmu from "./video/index"
//数据
 const danmuData=[{
    content:'我真的醉了',
    speed:2,
    runTime:0,
    color:'red'
},
{
    content:'11',
    speed:6,
    runTime:8,
    color:'#fff'
},
{
    content:'测试测试一下',
    speed:6,
    runTime:25,
    color:'#fff'
},
{
    content:'222',
    speed:4,
    runTime:2,
    color:'red'
}];
((doc)=>{
    // 获取元素节点
    const danmuVideo=doc.getElementById('video');
    const danmuCanvas=doc.getElementById('canvas')
    const danmuInput=doc.getElementsByClassName('danmu-input')[0]
    const danmuBtn=doc.getElementsByClassName('danmu-btn')[0]
    const colorInput=doc.getElementsByClassName('color-input')[0]
    
    const init=()=>{
        window.videoDanmu=new VideoDanmu(
            danmuVideo,
            danmuCanvas,
            { data:danmuData}
        )
        bindEvent()
    }
    // 绑定事件处理函数
    function bindEvent(){
        danmuVideo.addEventListener('play',handleVideoPlay,false)
        danmuVideo.addEventListener('pause',handleVideoPause,false)
        danmuVideo.addEventListener('seeked',handleVideoSeeked,false)
        danmuBtn.addEventListener('click',handleBtn,false)

    }
    function handleVideoPlay(){
        videoDanmu.danmuPaused=false
        videoDanmu.render()
    }
    function handleVideoPause(){
        videoDanmu.danmuPaused=true
    }
    function handleVideoSeeked(){
        videoDanmu.reset()
    }
    function handleBtn(){
        if(videoDanmu.danmuPaused){
            return
        }
        const inputVal=danmuInput.value.trim()
        if(!inputVal.length)return
        const colorValue=colorInput.value, currentTime=danmuVideo.currentTime;
        const _data={
            content:inputVal,
            color:colorValue,
            runTime:currentTime
        }
        videoDanmu.addDanmu(_data)
        danmuInput.value=""
    }
    init()
})(document);