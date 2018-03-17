window.onload = function () {
    var oEnlargeBox= document.getElementById('enlarge-box');
    var oSmallBox  = document.getElementById('small-box');
    var aSmallImg  = Array.from(oSmallBox.children);
    var oMiddleImg = document.getElementById('middle-img');
    var oLargeImg  = document.getElementById('large-img');
   
    // 选项开效果
    aSmallImg.forEach((v) => {
        v.addEventListener('mouseenter', (() => {
            aSmallImg.forEach((m) => {
                m.className = '';
            });
            v.className = 'active';
            oMiddleImg.src = v.src;
            oLargeImg.src  = v.src;
        }).bind(v));
    });

};