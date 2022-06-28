function style(obj, name) {
    return getComputedStyle(obj, null)[name];
}

function move(obj, target, speedDir, mode, callbackA,callbackB) {
    clearInterval(obj.timer);
    var current = parseInt(style(obj, mode));
    // console.log(current+"px");
    if (target < current) {
        speedDir = -speedDir;
    }
    obj.timer = setInterval(function () {
        var oldstyle = parseInt(style(obj, mode));

        var newstyle = oldstyle + speedDir;
        // console.log(newstyle);
        if ((target >= current) && (newstyle >= target) || (target <= current) && (newstyle <= target)) {
            obj.style[mode] = target + "px";
            // console.log("obj.style[mode]:"+obj.style[mode]);
        }
        else {
            obj.style[mode] = newstyle + "px"
        }


        if (parseInt(style(obj, mode)) == target) {
           clearInterval(obj.timer);
            callbackA && callbackA();
            callbackB && callbackB();
        }
        // console.log("obj.style.left:"+obj.style.left);
    }, 18);


}