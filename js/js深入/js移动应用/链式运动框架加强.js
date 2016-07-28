function changeStyle(obj, arr, iTarget,func) {


    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var cur = 0;

        if (arr == "opacity") {

            cur = parseFloat(getStyle(obj, arr)) * 100;

        } else {

            cur = parseInt(getStyle(obj, arr));

        }

        var speed = (iTarget - cur) / 6;

        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (iTarget == cur) {

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

    }, 30)
}

function getStyle(obj, name) {

    if (obj.currentStyle) {


        return obj.currentStyle[name];

    } else {

        return getComputedStyle(obj, false)[name];

    }
}