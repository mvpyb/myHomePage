
function render(data, container) {
    isOpenOff = false;
    // 计算当前可视区域一排能放置的文件的总个数
    var count = 0;
    count = Math.floor(document.documentElement.clientWidth / 90);
    container.innerHTML = '';
    data.forEach(function (item,index) {
        var li = document.createElement('li');
        li.className = 'shortcuts-list';
        li.classList.add(item.type);
        li.dataset.tid = item.id;
        tablePidNum = item.pid;
        li.dataset.tpid = item.pid;
        // li.setAttribute('_originalNum', item.pid);

        li.dataset.type = item.type;
        if (item.pid == 0) {
            li.style.top = 90 * (index % count) + 5 + 'px';
            li.style.left = 90 * Math.floor(index / count) + 5 + 'px';
        }
        li.style.left = 90 * (index % count) + 5 + 'px';
        li.style.top = 90 * Math.floor(index / count) + 5 + 'px';

        var clickX = 0;
        var clickY = 0;
        document.addEventListener("mousedown",getDiv);
        function getDiv(e){
            li.style.backgroundColor = '';
            // li.removeAttribute('_checked', 'checked');

            //TODO  框选拖拽有问题
            /*var isCheckedLis = document.querySelectorAll('.isChecked');
            if(isCheckedLis.length > 0){
                // console.info(e.target);
                if(e.target.tagName == 'A' ){
                    for(var i=0;i<isCheckedLis.length;i++){
                        // drag(e.target.parentNode,isCheckedLis[i]);
                        li.style.backgroundColor = '';
                        console.info(isCheckedLis[i])
                    }

                }
                if(e.target.tagName == 'INPUT' ){
                    for(var i=0;i<isCheckedLis.length;i++){
                        // drag(e.target.parentNode.parentNode,isCheckedLis[i]);
                        li.style.backgroundColor = '';
                    }
                }
            }
*/
            li.classList.remove('isChecked');

            if(e.target.tagName == 'A' ||e.target.tagName == 'INPUT' ){
                return;
            }

            div = document.createElement('div');
            div.className = 'choose';
            div.style.display = 'none';
            //加入四个span 是为了阻值div左右晃动问题
            div.innerHTML = '<span class="left"></span><span class="top"></span><span class="right"></span><span class="bottom"></span>';
            document.body.appendChild(div);
            clickX = e.clientX;
            clickY = e.clientY;
            css(div,"left",clickX);
            css(div,"top",clickY);
            document.addEventListener("mousemove",move1);
            document.addEventListener("mouseup",up1);
        }
        function move1(e){
            nowX = e.clientX;
            nowY = e.clientY;
            disX = Math.abs(nowX - clickX);
            disY = Math.abs(nowY - clickY);
            if(nowX >= 10 ||nowY>=10){
                div.style.display = 'block';
                if(collision(div,li)){
                    li.style.backgroundColor = '';
                    li.style.backgroundColor = 'rgba(0,0,0,0.2)';
                    // li.setAttribute('_checked', 'checked');
                    li.classList.add('isChecked');
                }
            }
            if(nowX<=clickX&&nowY<=clickY){
                css(div,"left",nowX);
                css(div,"top",nowY);
            }else if(nowX<clickX&&nowY>=clickY){
                css(div,"left",nowX);
            }else if(nowX>=clickX&&nowY<clickY){
                css(div,"top",nowY);
            }
            css(div,"width",disX);
            css(div,"height",disY);
        }
        function up1(e){
            div.style.display = 'none';
            document.removeEventListener("mousemove",move1);
            document.removeEventListener("mouseup",up1);
        }
        li.setAttribute('_contextmenu', item.type);
        var a = document.createElement('a');
        a.setAttribute('_contextmenu', 'folder');
        a.href='#';

        var input = document.createElement('input');
        input.setAttribute('_contextmenu', 'folder');
        input.className = 'fileNameInp';
        input.value = item.name;

        if(item.pid == 3){
            li.setAttribute('_contextmenu', 'recycle');
            input.setAttribute('_contextmenu', 'recycle');
            a.setAttribute('_contextmenu', 'recycle');
        }

         li.addEventListener("dblclick",function(e){
             if (item.pid == 0) {
                 _ID = item.id;
                 nowPidNum = item.id;
                 createTableFileExplorer(item,item.id);
             }else {
                 _ID = item.id;
                 nowPidNum = item.id;
                 switch (explorerOpenType.value) {
                     case '1':
                     createTableFileExplorer(item,item.id);
                     break;
                     case '2':
                     render( getChildren(item.id), container );
                     break;
                 }
             }
             e.stopPropagation();
         });

        a.appendChild(input);
        li.appendChild(a);
        container.appendChild(li);

        if (item.pid == 0) {
            var par = li.parentNode.children;

            drag(
                li,
                li,
                function(){},
                function(e) {
                    for(var j=0;j<par.length;j++){
                        if(collision(li,par[j])){
                            if(li == par[j]){
                                continue;
                            }else{
                                par[j].style.backgroundColor = "rgba(0,0,0,0.2)";
                                li.style.backgroundColor = "rgba(0,0,0,0.2)";
                            }
                        }else{
                            par[j].style.backgroundColor = "";
                            li.style.backgroundColor = "";
                        }
                    }
                },

                function(e) {
                    for(var i=0;i<par.length;i++){
                        par[i].index = i;
                        if(collision(li,par[i])){
                            if(li == par[i]){
                                continue;
                            }else{
                                par[i].style.backgroundColor = "rgba(0,0,0,0.2)";
                                li.style.backgroundColor = "rgba(0,0,0,0.2)";
                                if(par[i].dataset.type == 'folder' && li.dataset.type != 'recycleBox'|| par[i].dataset.type == 'recycleBox' && li.dataset.type != 'recycleBox' ){
                                    var liIdNum = Number(par[i].dataset.tid);
                                    var liPIdNum = Number(par[i].dataset.tpid);
                                    var nowLiIdNum = Number(li.dataset.tid);
                                    var nowLiPIdNum = Number(li.dataset.tpid);
                                    tableData.forEach(function(item){
                                        if(item.id == nowLiIdNum){
                                            item.pid = liIdNum;
                                        }
                                    });
                                    if(liPIdNum == 0){
                                        render(getChildren(0),shortcuts);
                                        var shortcutsList1 = shortcuts.getElementsByTagName('li');
                                        auto1(shortcutsList1,6,90,90,5);
                                    }else{
                                        render(getChildren(nowLiPIdNum),li.parentNode);
                                    }
                                    //console.info(liIdNum,nowLiIdNum)
                                }
                            }
                        }else{
                            par[i].style.backgroundColor = "";
                            li.style.backgroundColor = "";
                        }
                    }
                }
            );
        }

    });


}

function createTableFileExplorer(item,pidNum) {
    var content = document.querySelector('.content');
    var newFileBox = document.createElement('div');

    newFileBox.setAttribute('_nowPidNum', pidNum);

    newFileBox.className = 'newFileBox';
    newFileBox.style.display = 'block';
    newFileBox.style.zIndex = windowZIndex++;
    newFileBox.onmousedown = function() {
        this.style.zIndex = windowZIndex++;
    };
    var newFileBoxSec = document.createElement('section');
    newFileBoxSec.className = 'newFileBox-sec';
    var settingTop = document.createElement('div');
    settingTop.className = 'setting-top clearFix';
    var newItemTitle = document.createElement('h3');
    pull({el:newItemTitle,el2:newFileBox});
    newItemTitle.className = 'fl item-title';
    newItemTitle.innerHTML = item.name;
    newItemTitle.setAttribute('_contextmenu', 'explorer');
    var newHandle = document.createElement('div');
    newHandle.className = 'fr handle';
    var span1 = document.createElement('span');
    span1.className = 'fl minimize';
    var span2 = document.createElement('span');
    span2.className = 'fl maximize';
    var span3 = document.createElement('span');
    span3.className = 'fl close';
    newHandle.appendChild(span1);
    newHandle.appendChild(span2);
    newHandle.appendChild(span3);
    var newFileBoxPath = document.createElement('div');
    newFileBoxPath.className = 'newFileBox-path clearFix';
    explorerOpenType = document.createElement('select');//定义全局变量
    explorerOpenType.innerHTML = '<option value="1">新窗口打开</option><option value="2">当前窗口打开</option>';
    explorerOpenType.className = 'explorerOpenType';
    var newBackParent = document.createElement('span');
    newBackParent.className = 'new-backParent fl';
    newBackParent.innerHTML = '返回上一级';
    var newFilePath = document.createElement('div');
    newFilePath.className = 'file-path fl';

    var paths = getParents( item.id ).concat(item).map( function(item) {
        return '<a _id="'+item.id+'" href="">'+item.name+'</a>';
    } ).join(' > ');

    newFilePath.innerHTML = '';
    newFilePath.innerHTML = paths;

    newFileBoxList = document.createElement('ul');
    newFileBoxList.setAttribute('_nowIdNum',  _ID);
    newFileBoxList.className = 'newFileBox-list clearFix';

    newFilePath.addEventListener("click",function(e){

        var _id = e.target.getAttribute('_id');
        render( getChildren(_id), newFileBoxList );

        var paths = getParents( _id ).concat(item).map( function(item) {
            return '<a _id="'+item.id+'" href="">'+item.name+'</a>';
        } ).join(' > ');

        newFilePath.innerHTML = '';
        newFilePath.innerHTML = paths;

        e.stopPropagation();
        e.preventDefault();
    });

    newBackParent.addEventListener("click",function(e){
        //e.target.parentNode.nextElementSibling.setAttribute('_nowIdNum',_ID);
        var _parent = getParent(_ID);
        _ID = _parent ? _parent.id : 0;
        if( _ID  == 0){
            return
        }
        render(getChildren(_ID), newFileBoxList);
        e.preventDefault();
        e.stopPropagation();
    });


    newFileBoxSec.appendChild(settingTop);
    settingTop.appendChild(newItemTitle);
    settingTop.appendChild(newHandle);

    newFileBoxSec.appendChild(newFileBoxPath);
    newFileBoxPath.appendChild(explorerOpenType);
    newFileBoxPath.appendChild(newBackParent);
    newFileBoxPath.appendChild(newFilePath);

    newFileBoxSec.appendChild(newFileBoxList);
    render( getChildren(item.id), newFileBoxList );

    newFileBox.appendChild(newFileBoxSec);
    content.appendChild(newFileBox);
    autoPlace(newFileBox);
    span1.addEventListener("click",function(e){
        min11(newFileBox);
        e.stopPropagation();
    });
    span2.addEventListener("mousedown",function(e){
        e.stopPropagation();
    });
    span2.addEventListener("mouseup",function(e){
        max11(newFileBox);
        e.stopPropagation();
    });
    span3.addEventListener("click",function(e){
        close11(newFileBox);
        e.stopPropagation();
    });
    window.onresize = function(){
        autoPlace(newFileBox);
    };
    parentSecW = newFileBox.offsetWidth;

}

function drag(element1, element2, startcallback,movecallback, endcallback) {
    var oldLeft = element2.offsetLeft;
    var oldTop = element2.offsetTop;
    element1.onmousedown = function (e) {
        if (typeof startcallback == 'function') {
            startcallback();
        }

        var disX = e.clientX - element2.offsetLeft;
        var disY = e.clientY - element2.offsetTop;
        document.onmousemove = function (e) {

            element2.style.left = e.clientX - disX + 'px';
            element2.style.top = e.clientY - disY + 'px';

            if (typeof movecallback == 'function') {
                movecallback(e);
            }
        };
        document.onmouseup = function (e) {
            document.onmousemove = null;
            //
            // console.log(e.target.parentNode.style.left,element2.style.top);
            //
            // if(Math.abs(e.clientX - disX - oldLeft) <= 10){
            //     element2.style.left = oldLeft + 'px';
            // }
            // if(Math.abs(e.clientY - disY - oldTop) <= 10){
            //     element2.style.top = oldTop + 'px';
            // }

            if (typeof endcallback == 'function') {
                endcallback();
            }
        };
        return false;
    }
}
/*function drag(element1, element2, startcallback,movecallback, endcallback) {
    element1.addEventListener("mousedown",down);

    function down(e){
        document.addEventListener("mousemove",move);
        document.addEventListener("mouseup",up);
        if (typeof startcallback == 'function') {
            startcallback();
        }
    }
    function move(e){
        var disX = e.clientX - element2.offsetLeft;
        var disY = e.clientY - element2.offsetTop;
        element2.style.left = e.clientX - disX + 'px';
        element2.style.top = e.clientY - disY + 'px';
        if (typeof movecallback == 'function') {
            movecallback(e);
        }
        e.stopPropagation();
    }
    function up(e){
        document.removeEventListener("mousemove",move);
        document.removeEventListener("mouseup",up);
        if (typeof endcallback == 'function') {
            endcallback();
        }
        e.stopPropagation();
    }
}*/
