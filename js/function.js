/**
 * Created by Administrator on 2018/2/26.
 */

(function(){
    toSize();
    window.addEventListener('resize',toSize);//屏幕大小改变的时候，重新计算一下 rem的基准值
    function toSize(){
        var html = document.documentElement;//获取html
        var width = html.clientWidth; //获取到html的宽度
        var nub = 13;//把rem的基准值(也就是html的字体大小)，设置成屏幕宽度的多少分之一
        html.style.fontSize = width / nub + "px";//设置html的字体大小
    }
})();


var Emblem = {
    init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            var span = document.createElement('span');
            var node = document.createTextNode(letter);

            console.log(node);

            var r = (360/text.length)*(i);
            var x = (Math.PI/text.length).toFixed(0) * (i);
            var y = (Math.PI/text.length).toFixed(0) * (i);
            span.appendChild(node);
            span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            element.appendChild(span);
        }
    }
};


