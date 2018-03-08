
//点击消失
function clickNone(target,obj1) {
    target.addEventListener("click",function(e){
        obj1.style.display = 'none';
        e.stopPropagation();
        e.preventDefault();
    });
}

//实现li定位
//横向排列
function auto(li,len,w,h,edge){
    for(var j=0;j<li.length;j++){
        var x = j%len;
        var y = parseInt(j/len);
        li[j].style.left = edge+x*w + 'px';
        li[j].style.top =  edge + y*h + 'px';
    }
}
//纵向排列
function auto1(li,len,w,h,edge){
    for(var j=0;j<li.length;j++){
        var x = j%len;
        var y = parseInt(j/len);
        li[j].style.top = edge+x*h + 'px';
        li[j].style.left =  edge + y*w + 'px';
    }
}

//最小化，最大化、关闭
function min1(son,par,title){
    son.addEventListener("click",function(e){
        startMove(par,{top:1000},300,"easeOut");
        e.stopPropagation();
        e.preventDefault();
    })
}

function min(son,par,title){
    son.addEventListener("click",function(e){
        startMove(par,{top:1000},300,"easeOut");
        e.stopPropagation();
        e.preventDefault();
    })
}

function min11(par){
    startMove(par,{top:1000},300,"easeOut");
}

function max(son,par){
    var isMaxOff = false;

    if(css(par,'width') < document.documentElement.clientWidth || css(par,'height') < document.documentElement.clientHeight&&!isMaxOff){

        son.addEventListener("mousedown",function(e){
            e.stopPropagation();
            e.preventDefault();
        });
        son.addEventListener("mouseup",function(e){
            startMove(par,{
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight,
                left:0,
                top:0
            },100,"easeOut");
            isMaxOff = true;
            e.stopPropagation();
            e.preventDefault();
        })
    }else if(css(par,'width') >= document.documentElement.clientWidth && css(par,'height') >= document.documentElement.clientHeight&&isMaxOff){

        son.addEventListener("mousedown",function(e){
            e.stopPropagation();
            e.preventDefault();
        });
        son.addEventListener("mouseup",function(e){
            startMove(par,{
                width:780,
                height:400
            },100,"easeOut",function(){
                autoPlace(par);
            });
            isMaxOff = false;
            e.stopPropagation();
            e.preventDefault();
        })

    }

}

function max11(par){
    // var isMaxOff = false;

    console.log(Math.ceil(css(par,'width')),document.documentElement.clientWidth);
    console.log(Math.ceil(css(par,'height')),document.documentElement.clientHeight);

    if(Math.ceil(css(par,'width')) < document.documentElement.clientWidth || Math.ceil(css(par,'height')) < document.documentElement.clientHeight){
        startMove(par,{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
            left:0,
            top:0
        },100,"easeOut");

    }else if(Math.ceil(css(par,'width')) >= document.documentElement.clientWidth || Math.ceil(css(par,'height')) >= document.documentElement.clientHeight){
        console.log(1);
        startMove(par,{
            width:725,
            height:400
        },100,"easeOut",function(){
            autoPlace(par);
        });
    }

}
function close(son,par,off){
    son.addEventListener("click",function(e){
        par.style.display = 'none';
        off = false;
        e.stopPropagation();
        e.preventDefault();
    })
}


function close11(par){
    par.style.display = 'none';
}

//碰撞函数
function collision (el,el2){
    var rect = el.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();
    if(rect.bottom < rect2.top
        || rect.top > rect2.bottom
        || rect.right < rect2.left
        || rect.left > rect2.right){
        return false;
    }
    return true;
}

//拖拽函数
function pull(init){
    var _zIndex = 0;
    var el = init.el;
    var el2 = init.el2;
    el.onmousedown =function(e){

        var first = {
            x : e.clientX,
            y : e.clientY
        };
        var startEl = {
            x: el2.offsetLeft,
            y: el2.offsetTop
        };
        el2.style.zIndex = windowZIndex++;
        el2.style.opacity = 1;

        init.start&&init.start();
        document.onmousemove = function(e){
            var now = {
                x : e.clientX,
                y : e.clientY
            };
            var dis = {
                x:now.x - first.x,
                y:now.y - first.y
            };
            var coord = {
                x:dis.x + startEl.x,
                y:dis.y + startEl.y
            };
            // console.info(dis);
            el2.style.left = coord.x + 'px';
            el2.style.top = coord.y + 'px';
            el2.style.opacity = 0.6;
            e.stopPropagation();
            init.move&&init.move();
        };
        document.onmouseup = function(e){
            e.stopPropagation();
            document.onmousemove = null;
            document.onmouseup = null;
            _zIndex = 0;
            el2.style.opacity = 1;
            init.end&&init.end();
        };
        e.stopPropagation();
        return false;
    };
}

//窗口大小发生改变,已经打开的窗口位置也随之变化
function autoPlace(el){
    if(window.innerHeight < el.offsetHeight){
        el.style.top = 0;
    }
    if(window.innerWidth < el.offsetWidth){
        el.style.left = 0;
    }
    el.style.top = (window.innerHeight - el.offsetHeight)/2 + 'px';
    el.style.left = (window.innerWidth - el.offsetWidth)/2 + 'px';
}

//定义一个计算函数
function calculate(num1, num2, oper) {
    switch (oper.toString()) {
        case "+":
            result = floatAdd(num1, num2);
            break;
        case "-":
            result = floatSub(num1, num2);
            break;
        case "*":
            result = floatMul(num1, num2);
            break;
        case "/":
            result = floatDiv(num1, num2);
            break;
        case "%":
            result = num1%num2;
            break;
    }
    return result;
}

//加法运算
function floatAdd(arg1,arg2){
    return (arg1 + arg2);
}
//减法运算
function floatSub(arg1,arg2){
    return (arg1 - arg2);
}
//乘法运算
function floatMul(arg1,arg2){
    return (arg1*arg2);
}
//除法运算
function floatDiv(arg1,arg2) {
    return (arg1/arg2);
}