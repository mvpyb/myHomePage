/**
 * Created by Administrator on 2017/10/26.
 */
window.onload = function(){
    (function(){
        var wrap = document.getElementById("wrap");
        var topTime = document.querySelector('#wrap .topTime a');//标题当前日期
        var bottomTimeY = document.querySelector('#now-date');
        var prev = document.querySelector('.leftTitle .prev');
        var next = document.querySelector('.leftTitle .next');
        var weekBox = document.querySelector('.left .week');
        var dateBox = document.querySelector('.left .date');//日历内容
        var cutBox = document.querySelector('.left .cut');//日历月份内容
        var cutP = document.querySelector('.left .cutP');//日历月份内容
        var footerBtn = document.querySelector('.footer a');
        var timeTitle1 = document.querySelector('.leftTitle .timeTitle1');
        var aLis1 = cutBox.getElementsByTagName("li");
        var cutLis = cutBox.querySelectorAll('.cutLi');
        var cutLiH = css(cutLis[0],"height");
        var timeTitle = document.querySelector('.leftTitle .timeTitle');//左边标题时间
        var bottomClockBtn = document.querySelector('.panel .clock1');
        var nowTimeShow = bottomClockBtn.querySelectorAll('span')[0];
        var nowDateShow = bottomClockBtn.querySelectorAll('span')[1];
        bottomClockBtn.addEventListener("click",function(e){
            wrap.style.display = 'block';
            wrap.style.right = 0;
            wrap.style.bottom = 0;
            e.stopPropagation();
            e.preventDefault();
        });

        var clockHandle = wrap.querySelector('.handle');
        var clockMin = clockHandle.querySelector('.minimize');
        var clockClose = clockHandle.querySelector('.close');

        clockMin.addEventListener("click",min);
        clockClose.addEventListener("click",close);
        function min(e){
            wrap.style.right = -9999+'px';
            wrap.style.bottom = -9999+'px';
            e.stopPropagation();
            e.preventDefault();
        };

        function close(e){
            wrap.style.display = 'none';
            e.stopPropagation();
            e.preventDefault();
        }

        document.addEventListener("click",function(e){
            // wrap.style.display = 'none';
            // e.stopPropagation();
        });
        var str = '';
        var isOff = true;//开关判断
        var isMove = false;//记录是否在动画
        /*底部提示功能*/
        footerBtn.onclick = function(){
            alert('后续功能，敬请期待!');
            return false;
        };

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var dateDay = date.getDate();
//      var nowYear = year + '年' + (month + 1) + '月' + dateDay + '日';
//      topTime.innerHTML = nowYear;
        var m = date.getMonth()+1;
        var y =  date.getFullYear();
        topTime.innerHTML = y + '年' + m + '月' + dateDay + '日';
        bottomTimeY.innerHTML = y + '年' + m + '月' + dateDay + '日';
        timeTitle.innerHTML = y + '年' + m + '月';

        /*生成日历内容1*/
        for(var i = 0; i < 6; i++) {
            str += "<ul class='clearFix'>" +
                "<li></li>" +
                "<li></li>" +
                "<li></li>" +
                "<li></li>" +
                "<li></li>" +
                "<li></li>" +
                "<li></li>" +
                "</ul>";
        }

        showGetTime();
        function showGetTime() {
            dateBox.innerHTML = str;
            var aLis = dateBox.getElementsByTagName("li");
            var allLis = wrap.getElementsByTagName("li");
            var firstDay = new Date(year, m-1, 1);
            /*移入改变字体颜色*/

            for(var a = 0; a < allLis.length; a++){

                allLis[a].onmouseover = function(){
                    // cutP.style.left = "-290px";
                    for(var a =0;a<allLis.length;a++){
                        allLis[a].style.fontWeight = 'normal';
                        allLis[a].style.fontSize = '20px';
                    }
                    this.style.fontWeight = 'bold';
                    this.style.fontSize = '30px';

                };
                allLis[a].onmouseout = function(){
                    this.style.fontWeight = 'normal';
                    this.style.fontSize = '20px';

                };
            }

            /*生成日历表内容*/
            for(var i = 0; i < aLis.length; i++) {
                aLis[i].onclick = function (){
                    for(var i = 0; i < aLis.length; i++){
                        aLis[i].style.backgroundColor = "";
                    }
                    this.style.backgroundColor = "#CCCCFF";
                };
                var thisDay = new Date(year, m-1 , i + 1 - firstDay.getDay());
                var thisDayS = getDate(thisDay);
                aLis[i].innerText = thisDay.getDate();
                if(thisDayS == getDate(new Date())) {
                    //打印出当月所有天数，然后用当前日期和所有天数对比
                    aLis[i].className = 'currentDay';
                }else if(thisDayS.substr(0, 6) == getDate(firstDay).substr(0, 6)) {
                    aLis[i].className = 'currentMonth';
                }else {
                    aLis[i].className = 'otherMonth';
                }
            }

            /*日期转化为字符串， 4位年+2位月+2位日*/
            function getDate(date) {
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var d = date.getDate();
                month = (month > 9) ? ("" + month) : ("0" + month);
                d = (d > 9) ? ("" + d) : ("0" + d);
                return year + month + d;
            }
        }

        /*点击上个月翻页*/
        prev.onclick = auto2;
        function auto2(){
            if(isOff) {
                m --;
                if(m<1){
                    m=12;
                    y =y -1;
                }
                timeTitle.innerHTML = y + '年' + m + '月';
            }else{
                y --;
                timeTitle.innerHTML = y + '年';
                if(isMove){
                    return;
                }
                css(cutBox,"top",-cutLiH);
                startMove(cutBox,{top:0},300,"easeOut",function(){
                    isOff = false;
                });
            }
            showGetTime();
        };
        /*点击下个月翻页*/
        next.onclick = auto1;
        function auto1(){
            if(isOff){
                m++;
                if(m > 12){
                    m=1;
                    y =y +1;
                }
                timeTitle.innerHTML = y + '年' + m + '月';
            }else{
                y ++;
                timeTitle.innerHTML = y + '年';
                if(isMove){
                    return;
                }
                css(cutBox,"top",0);
                startMove(cutBox,{top:-cutLiH},300,"easeOut",function(){
                    isOff = false;
                });
            }
            showGetTime();
        }

        /*点击标题 只显示月份 直接切换年份*/
        // var cutPw = css(cutP  ,"left");
        timeTitle.onclick = function(){
            isOff = false;
            if(!isOff){
                timeTitle.innerHTML = y + '年' ;
            }
            dateBox.style.display = 'none';
            weekBox.style.display = 'none';
            startMove(cutBox,{opacity:1},300,'easeOut');
            // startMove(cutP,{left:25},500,"easeOut");
        };

        /*点击月份切换*/
        for(var i =0;i<aLis1.length;i++){
            aLis1[i].index = i;
            aLis1[i].onclick = function(){
                isOff = true;//把左右切换状态转换为年份+月份共同切换
                m = this.index+1;
                timeTitle.innerHTML = y + '年' + m + '月';
                dateBox.style.display = 'block';
                weekBox.style.display = 'block';
                startMove(cutBox,{opacity:0},300,'easeOut');
            };
        }
        /*点击抬头日期，回到当前日期*/
        topTime.onclick = function (){
            isOff = true;
            dateBox.style.display = 'block';
            weekBox.style.display = 'block';
            startMove(cutBox,{opacity:0},1000,'easeOut');
            cutBox.style.width = 0;
            cutBox.style.height = 0;
            date = new Date();
            year = date.getFullYear();
            month = date.getMonth();
            dateDay = date.getDate();
            m = month+1;
            y =  date.getFullYear();
            timeTitle.innerHTML = y + '年' + m + '月';
            showGetTime();
            return false;
        }
    })();
    /* 生成表盘 */
    (function(){
        var list = document.querySelector('#list');
        var inner = "";
        for(var i = 0; i < 60; i++){
            inner += '<li style="transform:rotate('+i*6+'deg)"></li>';
        }
        list.innerHTML = inner;
    })();
    /* 时钟 */
    (function(){
        var hours = document.querySelector('#hours');
        var minutes = document.querySelector('#minutes');
        var seconds = document.querySelector('#seconds');
        var time1 = document.querySelector('.rightTime .time1');
        var week1 = document.querySelector('.rightTime .week1');
        var nowTimeBottom1 = document.querySelector('#bottomTime');
        toTime();
        setInterval(toTime,1000);
        function toTime(){
            var data1 = ['日','一','二','三','四','五','六'];
            var time = new Date();
            var timeSeconds = time.getSeconds();
            var timeMinutes = time.getMinutes() + timeSeconds/60;
            var timeHours = time.getHours() + timeMinutes/60;
            var minutes1 = time.getMinutes();
            var hours1 = time.getHours();
            var nowTimeRight = toZero(hours1) +':' +toZero( minutes1) +':' + toZero(timeSeconds);
            var nowTimeBottom = toZero(hours1) +':' +toZero( minutes1);
            var nowWeek =time.getDay();
            seconds.style.transform = "rotate("+timeSeconds*6+"deg)";
            minutes.style.transform = "rotate("+timeMinutes*6+"deg)";
            hours.style.transform = "rotate("+timeHours*30+"deg)";
            /*补零函数*/
            function toZero(n) {
                return n < 10?'0'+n:''+n;
            }
            time1.innerHTML = nowTimeRight;
            nowTimeBottom1.innerHTML = nowTimeBottom;
            week1.innerHTML = "星期" + data1[nowWeek];
        }
    })();
};
