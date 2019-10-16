/*
 * @Author: wangzhongjie
 * @Date: 2019-09-10 17:32:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-09-10 17:32:54
 * @Description:立体轮播图
 * @Email: UvDream@163.com
 */
window.onload = function() {
  var oLeft = document.getElementById("left");
  var oRight = document.getElementById("right");
  var oNext = document.getElementById("next");
  var oNext_txt = document.getElementById("next_txt");
  var oPrev = document.getElementById("prev");
  var oPrev_txt = document.getElementById("prev_txt");
  var oImg = document.getElementsByName("img1");
  var oLeige = document.getElementsByClassName("leige")[0];
  var oLi = oLeige.getElementsByTagName("li");
  var oFoo = document.getElementById("footer");
  var oBtn = document.getElementById("btn");
  var arr = [];
  var timer;
  for (var i = 0; i < oImg.length; i++) {
    arr.push([
      parseInt(getStyle(oImg[i], "left")),
      parseInt(getStyle(oImg[i], "top")),
      parseInt(getStyle(oImg[i], "width")),
      parseFloat(getStyle(oImg[i], "opacity")) * 100,
      parseInt(getStyle(oImg[i], "zIndex"))
    ]);
  }
  oLeft.onmouseover = oPrev.onmouseover = oPrev_txt.onmouseover = function() {
    startMove(oPrev_txt, { left: -20, opacity: 100 });
    startMove(oPrev, { left: -56 });
  };
  oLeft.onmouseout = oPrev.onmouseout = oPrev_txt.onmouseout = function() {
    startMove(oPrev_txt, { left: -10, opacity: 0 });
    startMove(oPrev, { left: -75 });
  };
  oRight.onmouseover = oNext.onmouseover = oNext_txt.onmouseover = function() {
    startMove(oNext_txt, { left: 413, opacity: 100 });
    startMove(oNext, { left: 480 });
  };
  oRight.onmouseout = oNext.onmouseout = oNext_txt.onmouseout = function() {
    startMove(oNext_txt, { left: 403, opacity: 0 });
    startMove(oNext, { left: 500 });
  };
  oPrev.onclick = oPrev_txt.onclick = function() {
    setTimeout(function() {
      clearInterval(timer);
      timer = setInterval(tab, 3000);
    }, 100);
    tab();
  };
  oNext.onclick = oNext_txt.onclick = function() {
    setTimeout(function() {
      clearInterval(timer);
      timer = setInterval(tab, 3000);
    }, 1000);
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    liTab();
    for (var i = 0; i < oImg.length; i++) {
      startMove(oImg[i], {
        left: arr[i][0],
        top: arr[i][1],
        width: arr[i][2],
        opacity: arr[i][3],
        zIndex: arr[i][4]
      });
    }
  };
  timer = setInterval(tab, 3000);
  for (var i = 0; i < oLi.length; i++) {
    oLi[i].ind = i;
    oLi[i].onclick = function() {
      oFoo.style.width = "50";
      oFoo.style.height = "0";
      oFoo.src = "images/" + (this.ind + 1) + ".jpg";
      startMove(oFoo, { height: 700 }, function() {
        startMove(oFoo, { width: 1366 });
        oBtn.style.display = "block";
      });
    };
    oBtn.onclick = function() {
      startMove(oFoo, { width: 50 }, function() {
        startMove(oFoo, { height: 0 });
      });
      oBtn.style.display = "none";
    };
  }
  function tab() {
    var temp = 0;
    arr.push(arr[0]);
    arr.shift();
    liTab();
    for (var i = 0; i < oImg.length; i++) {
      oImg[i].ind = i;
      startMove(oImg[i], {
        left: arr[i][0],
        top: arr[i][1],
        width: arr[i][2],
        opacity: arr[i][3],
        zIndex: arr[i][4]
      });
    }
  }
  function liTab() {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][1] == 0) {
        temp = i;
        for (var i = 0; i < oLi.length; i++) {
          oLi[i].style.background = "#fff";
        }
        oLi[temp].style.background = "green";
      }
    }
  }
};
