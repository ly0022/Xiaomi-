window.onload = function () {
    // 轮播图
    var banner = document.getElementById("banner");
    var imgs = document.getElementsByClassName("pir");
    var index = 0;
    var length = imgs.length * 1226;
    var alla = document.getElementsByClassName("po");
    var timer;
    alla[index].style.backgroundColor = "orange";
    banner.style.width = length + "px";
    banner.style.left = 0 + "px";

    for (var i = 0; i < alla.length; i++) {
        alla[i].num = i;
        alla[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            move(banner, -1226 * index, 70, "left", set, change);
        }
    }
    change();

    function change() {
        timer = setInterval(function () {
            index++;
            index %= imgs.length;

            move(banner, -1226 * index, 50, "left", set);
        }, 5000)
    }

    function set() {
        if (index == imgs.length - 1) {
            index = 0;
            banner.style.left = 0 + "px";
        }
        for (var j = 0; j < alla.length; j++) {
            alla[j].style.backgroundColor = "";
        }
        alla[index].style.backgroundColor = "orange";
        // change();
    }

    // 全部商品分类
    var leftgood = document.querySelectorAll(".left-good"),
        commodity = document.querySelectorAll(".commodity"),
        pointer = document.getElementById("pointer-wrapper");
    for (var i = 0; i < leftgood.length; i++) {
        leftgood[i].index = i;
        leftgood[i].onmouseover = function () {
            for (var i = 0; i < commodity.length; i++) {
                commodity[i].style.display = "none";
            }
            commodity[this.index].style.display = "block";
            pointer.style.display = "none";
        }
        leftgood[i].onmouseout = function () {
            commodity[this.index].style.display = "none";
            pointer.style.display = "block";
        }
    }

    //倒计时
var spans = document.querySelectorAll(".countdown span");
//先调用一次，防止刷新空白
// count();
// 定时器
var times = setInterval(count, 1000);

function count() {
    var date = new Date();

    var InDate = new Date("2022/6/28 19:00:00");
    var sInDate = (InDate.getTime() - date.getTime()) / 1000;
    //小时
    var hr = parseInt(sInDate / 60 / 60 % 24);
    //分钟
    var min = parseInt(sInDate / 60 % 60);
    //秒
    var sec = parseInt(sInDate % 60);
    //添加成为00
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    //给span赋值
    spans[0].innerHTML = hr;
    spans[1].innerHTML = min;
    spans[2].innerHTML = sec;
    //关闭定时器，使时间变为00：00：00
    if (sInDate <= 0) {
        clearInterval(times);
        spans[0].innerHTML = "00";
        spans[1].innerHTML = "00";
        spans[2].innerHTML = "00";
    }
}

//微信
var J_followWxImg = document.getElementById("J_followWxImg"),
    J_followWx = document.getElementById("J_followWx");
J_followWx.onmouseover = function () {
    J_followWxImg.style.display = "block";
}
J_followWx.onmouseout = function () {
    J_followWxImg.style.display = "none";
}

//底部图片切换
var J_safeAuth = document.querySelector(".J_safeAuth");
var img2 = document.querySelector(".J_safeAuth .img2")
setInterval(function () {
    J_safeAuth.classList.toggle("active");
}, 2000);

    //回顶部
    var J_atop = document.getElementById("J_atop");
    // 当网页向下滑动 854px 出现"返回顶部" 按钮
    window.onscroll = function () {
        scrollFun()
    };

    function scrollFun() {
        if (document.body.scrollTop > 854 || document.documentElement.scrollTop > 854) {
            J_atop.classList.add("active");
        } else {
            J_atop.classList.remove("active");
        }
    }

    function topFun() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //点击返回顶部
    J_atop.onclick = function () {
        topFun();
    }

    /*下拉框*/
    var headerNavMenu = document.querySelectorAll(".header-nav-menu"),
        down = document.querySelectorAll(".down");
    for (var i = 0; i < down.length; i++) {
        down[i].index = i;
        down[i].onmouseover = function () {
            for (var i = 0; i < headerNavMenu.length; i++) {
                headerNavMenu[i].style.display = "none";
            }
            headerNavMenu[this.index].style.display = "block";
            headerNavMenu[this.index].style.borderTop = "1px solid #e0e0e0";
            headerNavMenu[this.index].classList.add("menuHeight");
        }
        down[i].onmouseout = function () {
            headerNavMenu[this.index].classList.remove("menuHeight");
            headerNavMenu[this.index].style.border = "none";
        }
    }

    //小米秒杀
var swiper_slide = document.querySelectorAll(".swiper-slide"),
swiper_wrapper = document.querySelector(".swiper-wrapper"),
btn_left = document.querySelector(".swiper-controls .swiper-flashsale-prev"),
btn_right = document.querySelector(".swiper-controls .swiper-flashsale-next"),
iNow = 0, //记录当前位置，每4个一组
count = Math.ceil(13 / 4) - 1, //最大组位置下标
timers = null;
//动态生成ul的宽
var swiperLiWidth = swiper_slide[0].offsetWidth + 14;
swiper_wrapper.style.width = swiperLiWidth * (swiper_slide.length + 1) + "px";
// 启动定时器，自己进行滚动
timers = setInterval(function() {
iNow++;
if (iNow > count) {
iNow = 0;
}
tab();
}, 5000);
btn_right.onclick = function() {
clearInterval(timers);
iNow++;
// 设置index的范围
iNow = iNow >= count ? count : iNow;
tab();
console.log(iNow);
}
btn_left.onclick = function() {
clearInterval(timers);
iNow--;
// 设置index的范围
iNow = iNow <= 0 ? 0 : iNow;
tab();
}
tab(); //先调用一次，让箭头样式先改变

function tab() {
//设值箭头样式

iNow == 0 ? btn_left.classList.add("swiper-button-disabled") : btn_left.classList.remove("swiper-button-disabled");
iNow == count ? btn_right.classList.add("swiper-button-disabled") : btn_right.classList.remove("swiper-button-disabled");
//移动的距离
var iTarget = iNow == count ? -swiperLiWidth * 4 * 2 - swiperLiWidth : -(swiperLiWidth * 4 * iNow);
swiper_wrapper.style.transitionDuration = "1000ms";
swiper_wrapper.style.transform = 'translate3d(' + iTarget + "px" + ' ,0,0)';
}
}