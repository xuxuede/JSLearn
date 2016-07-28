//function changeStyle(obj, arr, iTarget, func) 
function changeStyle(obj, json, func) {


    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        for(var arr in json){   //即现在没有itarget了，需要换成json[arr]
        var cur = 0;

        if (arr == "opacity") {

            cur = parseFloat(getStyle(obj, arr)) * 100;

        } else {

            cur = parseInt(getStyle(obj, arr));

        }

        var speed = (json[arr] - cur) / 6;

        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (json[arr] == cur) {

            clearInterval(obj.timer);

            if (func) {
                func();
            }

        } else {

            if (arr == "opacity") {

                obj.style.filter = "alpha(opacity:'+(cur+speed)+')";
                obj.style.opacity = (cur + speed) / 100;

                //document.getElementById("txt1").value = obj.style.opacity;

            } else {

                obj.style[arr] = cur + speed + "px";
            }
        }
        }
    }, 30)
}

function getStyle(obj, name) {

    if (obj.currentStyle) {


        return obj.currentStyle[name];

    } else {

        return getComputedStyle(obj, false)[name];

    }
}