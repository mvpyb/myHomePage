/**
 * Created by Administrator on 2017/11/27.
 */
var allCopyElement = [];
var iIndex = 0;
var dataSet = [
    {
        id: 1,
        pid: 0,
        type: 'folder',
        name: '设备管理器'
    },{
        id: 2,
        pid: 0,
        type: 'folder',
        name: '远程设置'
    },{
        id: 3,
        pid: 0,
        type: 'folder',
        name: '系统保护'
    },{
        id: 4,
        pid: 0,
        type: 'folder',
        name: '高级系统设置'
    },{
        id: 5,
        pid: 1,
        type: 'folder',
        name: '处理器'
    },{
        id: 6,
        pid: 1,
        type: 'folder',
        name: '便携式设备'
    },{
        id: 7,
        pid: 1,
        type: 'folder',
        name: 'IDE 控制器'
    },{
        id: 8,
        pid: 1,
        type: 'folder',
        name: '磁盘驱动器'
    }, {
        id: 9,
        pid: 1,
        type: 'folder',
        name: '存储控制器'
    },{
        id: 10,
        pid: 2,
        type: 'folder',
        name: '计算机名称'
    },{
        id: 11,
        pid: 2,
        type: 'folder',
        name: '硬件'
    },{
        id: 12,
        pid: 2,
        type: 'folder',
        name: '高级'
    },{
        id: 13,
        pid: 2,
        type: 'folder',
        name: '远程'
    },{
        id: 14,
        pid: 3,
        type: 'folder',
        name: '计算机保护'
    },{
        id: 15,
        pid: 4,
        type: 'folder',
        name: '邀请远程协助'
    },{
        id: 16,
        pid: 4,
        type: 'folder',
        name: '设备邀请时间'
    },{
        id: 17,
        pid: 5,
        type: 'folder',
        name: '智能处理器'
    },{
        id: 18,
        pid: 5,
        type: 'folder',
        name: '非智能处理器'
    },{
        id: 19,
        pid: 5,
        type: 'folder',
        name: '单核处理器'
    },{
        id: 20,
        pid: 5,
        type: 'folder',
        name: '双核处理器'
    },{
        id: 21,
        pid: 5,
        type: 'folder',
        name: '双核智能处理器'
    },{
        id: 22,
        pid: 20,
        type: 'folder',
        name: '酷睿双核'
    },{
        id: 23,
        pid: 20,
        type: 'folder',
        name: '奔腾双核'
    },{
        id: 24,
        pid: 24,
        type: 'folder',
        name: 'T2140'
    },{
        id: 25,
        pid: 22,
        type: 'folder',
        name: 'T8600'
    },{
        id: 26,
        pid: 22,
        type: 'folder',
        name: 'T9600'
    },{
        id: 27,
        pid: 22,
        type: 'folder',
        name: 'P系列高性能处理器'
    }
];

var tableData = [
    {
        id: 1,
        pid: 0,
        type: 'computer',
        name: 'My-Computer'
    },{
        id: 2,
        pid: 0,
        type: 'setting',
        name: 'Setting'
    },{
        id: 3,
        pid: 0,
        type: 'recycleBox',
        name: 'Recycle'
    },{
        id: 4,
        pid: 0,
        type: 'mb',
        name: 'Microblog'
    },{
        id: 5,
        pid: 0,
        type: 'folder',
        name: '设备管理器'
    },{
        id: 6,
        pid: 0,
        type: 'doc',
        name: 'DOC'
    },{
        id: 7,
        pid: 0,
        type: 'pdf',
        name: 'PDF'
    },{
        id: 8,
        pid: 0,
        type: 'jpg',
        name: 'JPG'
    },{
        id: 9,
        pid: 5,
        type: 'folder',
        name: '处理器'
    },{
        id: 10,
        pid: 5,
        type: 'pdf',
        name: 'PDF1'
    },{
        id: 11,
        pid: 9,
        type: 'folder',
        name: '智能处理器'
    },{
        id: 12,
        pid: 9,
        type: 'folder',
        name: '非智能处理器'
    },{
        id: 13,
        pid: 9,
        type: 'pdf',
        name: 'PDF1'
    },{
        id: 14,
        pid: 11,
        type: 'pdf',
        name: 'PDF2'
    },{
        id: 15,
        pid: 11,
        type: 'pdf',
        name: 'PDF2'
    },{
        id: 16,
        pid: 11,
        type: 'pdf',
        name: 'PDF3'
    },{
        id: 17,
        pid: 11,
        type: 'pdf',
        name: 'PDF4'
    }
];

var menuList = {
    common: [],
    table: [//桌面  TODO
        /*{
            name: '查看',
            new:[
                    {
                        childrenName:'大图标',
                        exe: function(e1,e2) {
                            console.log(e1.target,e2.target);
                            e1.target.parentNode.parentNode.parentNode.style.display = 'none';
                            var lis = e2.target.children[1].getElementsByTagName('li');
                            var inp = e2.target.children[1].getElementsByTagName('input');
    
                            for(var i=0;i<lis.length;i++){
                                css(lis[i],"width",160);
                                css(lis[i],"height",160);
                                css(lis[i].children[0],"width",160);
                                lis[i].children[0].style.backgroundSize = '100px 100px';
                                css(lis[i].children[0],"height",160);
                                lis[i].children[0].children[0].style.width = '150px';
                            }
                            auto1(shortcutsList1,3,170,170,10);
                        }
                    },{
                        childrenName:'中图标',
                        exe: function(e1,e2) {
                            e1.target.parentNode.parentNode.parentNode.style.display = 'none';
                            var lis = e2.target.children[1].getElementsByTagName('li');
                            var inp = e2.target.children[1].getElementsByTagName('input');
    
                            for(var i=0;i<lis.length;i++){
                                css(lis[i],"width",100);
                                css(lis[i],"height",100);
    
                                css(lis[i].children[0],"width",100);
                                lis[i].children[0].style.backgroundSize = '60px 60px';
                                css(lis[i].children[0],"height",100);
                                lis[i].children[0].children[0].style.width = '90px';
                            }
                            auto1(shortcutsList1,5,110,110,10);
                        }
                    },{
                        childrenName:'小图标',
                        exe: function(e1,e2) {
                            e1.target.parentNode.parentNode.parentNode.style.display = 'none';
                            render( getChildren(0),shortcuts);
                            var shortcutsList1 = shortcuts.getElementsByTagName('li');
                            auto1(shortcutsList1,6,90,90,5);
                        }
                    }
            ]
        },*/
        //新建  完成
        {
            name: '新建',
            new:[
                {
                    childrenName:'新建文件夹',
                    exe: function() {
                        addNewData({
                            pid: 0,
                            name: '',
                            type: 'folder'
                        });
                        render( getChildren(0),shortcuts);
                        var shortcutsList1 = shortcuts.getElementsByTagName('li');
                        contentRightMenu.style.display = 'none';
                        auto1(shortcutsList1,6,90,90,5);
                    }
                },{
                    childrenName:'新建DOC文档',
                    exe: function() {
                        addNewData({
                            pid: 0,
                            name: '',
                            type: 'doc'
                        });
                        render( getChildren(0),shortcuts);
                        var shortcutsList1 = shortcuts.getElementsByTagName('li');
                        contentRightMenu.style.display = 'none';
                        auto1(shortcutsList1,6,90,90,5);
                    }
                },{
                    childrenName:'新建PDF文档',
                    exe: function() {
                        addNewData({
                            pid: 0,
                            name: '',
                            type: 'pdf'
                        });
                        render( getChildren(0),shortcuts);
                        var shortcutsList1 = shortcuts.getElementsByTagName('li');
                        contentRightMenu.style.display = 'none';
                        auto1(shortcutsList1,6,90,90,5);
                    }
                },{
                    childrenName:'新建JPG图片',
                    exe: function() {
                        addNewData({
                            pid: 0,
                            name: '',
                            type: 'jpg'
                        });
                        render( getChildren(0),shortcuts);
                        var shortcutsList1 = shortcuts.getElementsByTagName('li');
                        contentRightMenu.style.display = 'none';
                        auto1(shortcutsList1,6,90,90,5);
                    }
                }
            ]
        }
        ,{//桌面  TODO
            name: '刷新',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                shortcuts.innerHTML = '';
               var time = null;
               time = setInterval(function(){
                   clearInterval(time);
                   render( getChildren(0),shortcuts);
                   var shortcutsList1 = shortcuts.getElementsByTagName('li');
                   auto1(shortcutsList1,6,90,90,5);
               },300)
            }
        },
        {//桌面  TODO
            name: '排序',
            new:[
                {
                    childrenName:'名称',
                    exe:function (e1,e2) {
                        e1.target.parentNode.parentNode.parentNode.style.display = 'none';
                        var lis = e2.target.children[1].getElementsByTagName('li');
                        var inp = e2.target.children[1].getElementsByTagName('input');
                        var liData = [];
                        autoSort(liData);
                        function autoSort(data){
                            for(var i=0;i<inp.length;i++){
                                data.push(Number(lis[i].dataset.tid));
                            }
                            tableData1 = tableData.filter(function (item) {
                                return data.indexOf(item.id) != -1;
                            });
                            tableData = tableData.filter(function (item) {
                                return data.indexOf(item.id) == -1;
                            });
                            tableData1.sort(function(a,b){
                                return a.name.localeCompare(b.name);
                            });
                            tableData = tableData.concat(tableData1);
                            render( getChildren(0),shortcuts);
                            var shortcutsList1 = shortcuts.getElementsByTagName('li');
                            auto1(shortcutsList1,6,90,90,5);
                        }
                    }
                },{
                    childrenName:'类型',
                    exe:function (e1,e2) {
                        e1.target.parentNode.parentNode.parentNode.style.display = 'none';
                        //console.info(e2.target.children[1]) //ul
                        var lis = e2.target.children[1].getElementsByTagName('li');
                        var inp = e2.target.children[1].getElementsByTagName('input');
                        var liData = [];
                        autoSort(liData);
                        function autoSort(data){
                            for(var i=0;i<inp.length;i++){
                                // data.push(lis[i]);
                                data.push(Number(lis[i].dataset.tid));
                            }
                            tableData1 = tableData.filter(function (item) {
                                return data.indexOf(item.id) != -1;
                            });
                            tableData = tableData.filter(function (item) {
                                return data.indexOf(item.id) == -1;
                            });
                            tableData1.sort(function(a,b){
                                return a.type.localeCompare(b.type);
                            });
                            tableData = tableData.concat(tableData1);
                            render( getChildren(0),shortcuts);
                            var shortcutsList1 = shortcuts.getElementsByTagName('li');
                            auto1(shortcutsList1,6,90,90,5);
                        }
                    }
                }
            ]
        },

        {
            name: '粘贴',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';


                sticky(0,e2,allCopyElement,shortcuts);
                auto1(shortcutsList1,6,90,90,5);

            }
        }
    ],
    global: [
        //新建 完成
        {
            name: '新建',
            new:[
                {
                    childrenName:'新建文件夹',
                    exe: function(e1,e2) {
                        // console.log(e2.target.parentNode.dataset._nowpidnum);
                        addNewData({
                            pid: nowPidNum,
                            name: '',
                            type: 'folder'
                        });
                        render( getChildren(nowPidNum),newFileBoxList);
                        contentRightMenu.style.display = 'none';
                    }
                },{
                    childrenName:'JPG',
                    exe: function(e1,e2) {
                        addNewData({
                            pid: nowPidNum,
                            name: '',
                            type: 'jpg'
                        });
                        render( getChildren(nowPidNum),newFileBoxList);
                        contentRightMenu.style.display = 'none';
                    }
                },{
                    childrenName:'PDF',
                    exe: function(e1,e2) {
                        addNewData({
                            pid: nowPidNum,
                            name: '',
                            type: 'pdf'
                        });
                        render( getChildren(nowPidNum),newFileBoxList);
                        contentRightMenu.style.display = 'none';
                    }
                },{
                    childrenName:'新建DOC',
                    exe: function(e1,e2) {
                        // console.info(e1.target,e2.target.parentNode,nowPidNum)
                        addNewData({
                            pid: nowPidNum,
                            name: '',
                            type: 'doc'
                        });
                        render( getChildren(nowPidNum),newFileBoxList);
                        contentRightMenu.style.display = 'none';
                    }
                }
            ]
        },{
            name: '粘贴',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';

                var currentType = e2.target.parentNode.dataset.type;

                var __id = Number(e2.target.parentNode.getAttribute('_nowpidnum'));

                sticky(__id,e2,allCopyElement,e2.target.children[2]);

            }
        }
    ],
    folder: [
        {
            name: '打开',
            exe:function(e1,e2){
                e1.target.parentNode.style.display = 'none';
                console.log(11,e2.target.parentNode);
                createTableFileExplorer(get(e2.target.parentNode.dataset.tid),e2.target.parentNode.dataset.tid);
            }
        },
        {
            name: '复制',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                var removeId = Number(e2.target.parentNode.dataset.tid);
                var nowShouPidNum = Number(e2.target.parentNode.dataset.tpid);
                var currentType = e2.target.parentNode.dataset.type;

                console.log(removeId,nowShouPidNum);

                console.log(e2.target.parentNode);

                if(removeId == 3||removeId == 1||removeId == 2||removeId == 4 && nowShouPidNum ==0){
                    return;
                }


                var newDatas = copy(e2.target.parentNode,removeId,nowShouPidNum);//li id pid

                function copy(obj,copyId,copyPid){
                    var newCopyData = [];
                    newCopyData = get1(copyId).concat(getAllChildren(copyId));
                    
                    return newCopyData;
                }
                allCopyElement = changeCopyPids(clone(newDatas));

            }
        },

        {
            name: '重命名',
            exe:function(e1,e2){
                e1.target.parentNode.style.display = 'none';
                var removeId = Number(e2.target.parentNode.dataset.tid);
                var nowShouPidNum = Number(e2.target.parentNode.dataset.tpid);
                var currentType = e2.target.parentNode.dataset.type;
                // e2.target.children[0].className ='fileNameInp select';
                // e2.target.children[0].select();
                var info = content.querySelector('.content .info');
                changeName( e2.target.children[0],nowShouPidNum,currentType,info,removeId);
            }
        },
        {
            name: '删除',
            exe: function(e1,e2) {
                e1.target.parentNode.style.display = 'none';
                //var oldPidNum;
                var removeId = Number(e2.target.parentNode.dataset.tid);
                var nowShouPidNum = Number(e2.target.parentNode.dataset.tpid);
                if(removeId == 3||removeId == 1||removeId == 2||removeId == 4 && nowShouPidNum ==0){
                    return;
                }
                tableData.find(function (item){
                    if(item.id == removeId){
                        item.pid = 3;
                        oldPidNum = nowShouPidNum;
                    }
                });
                if(nowShouPidNum == 0){
                    render(getChildren(0),shortcuts);
                    var shortcutsList1 = shortcuts.getElementsByTagName('li');
                    auto1(shortcutsList1,6,90,90,5);
                }else{
                    render(getChildren(nowShouPidNum),e2.target.parentNode.parentNode);
                }
                //  删除改变需要删除子项的pid == 3
            }
        }
    ],
    recycle:[
        {
            name:'还原',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                var removeId = Number(e2.target.parentNode.dataset.tid);
                tableData.find(function (item){
                    if(item.id == removeId){
                        item.pid = oldPidNum;
                    }
                });
                if(oldPidNum == 0){
                    render(getChildren(0),shortcuts);
                    render(getChildren(3),e2.target.parentNode.parentNode);
                    var shortcutsList1 = shortcuts.getElementsByTagName('li');
                    auto1(shortcutsList1,6,90,90,5);
                }else{
                    render(getChildren(3),e2.target.parentNode.parentNode);
                    render(getChildren(oldPidNum),e2.target.parentNode.parentNode);
                }
            }
        },
        {
            name:'彻底删除',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                var removeId = Number(e2.target.parentNode.dataset.tid);
                var removePId = Number(e2.target.parentNode.dataset.tpid);
                console.info(e2.target.parentNode,removeId,removePId);
                removeData([removeId]);
                render(getChildren(3),e2.target.parentNode.parentNode);
            }
        }
    ],
    explorer: [
        {
            name: '还原',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                if(css(e2.target.parentNode.parentNode.parentNode,'width') >= document.documentElement.clientWidth && css(e2.target.parentNode.parentNode.parentNode,'height') >= document.documentElement.clientHeight){
                    startMove(e2.target.parentNode.parentNode.parentNode,{
                        width:780,
                        height:400,
                        left:0,
                        top:0
                    },100,"easeOut",function(){
                        autoPlace(e2.target.parentNode.parentNode.parentNode);
                    });
                }

            }

        },{
            name: '最小化',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                startMove(e2.target.parentNode.parentNode.parentNode,{top:1000},300,"easeOut");
            }

        },
        {
            name: '最大化',
            exe:function (e1,e2) {
                e1.target.parentNode.style.display = 'none';
                if(css(e2.target.parentNode.parentNode.parentNode,'width') < document.documentElement.clientWidth ||css(e2.target.parentNode.parentNode.parentNode,'height') < document.documentElement.clientHeight){
                    startMove(e2.target.parentNode.parentNode.parentNode,{
                        width:document.documentElement.clientWidth,
                        height:document.documentElement.clientHeight,
                        left:0,
                        top:0
                    },300,"easeOut");
                }
            }
        },
        {
            name: '关闭',
            exe: function(e1, e2) {
                e1.target.parentNode.style.display = 'none';
                e2.target.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    ]
};


function changeName(obj,newPId,newType,info,newId) {
    var oldName = obj.value;
    obj.select();

    var children = getChildren(newPId);
    obj.addEventListener("blur",function(e){
        if(obj.value ==''){
            obj.value = oldName;
            obj.select();
        }else{
            children.forEach(function (item){
                if (newType == item.type && obj.value == item.name && newId !=item.id) {
                    obj.value = oldName;
                    obj.select();
                    info.style.display = 'block';
                    info.style.zIndex = 999999;
                    return;
                }else{
                    tableData.find(function (item){
                        if(item.id == newId){
                            item.name = obj.value;
                        }
                    });
                }
            })
            if(newPId == 0){
                render(getChildren(0),shortcuts);
                var shortcutsList1 = shortcuts.getElementsByTagName('li');
                auto1(shortcutsList1,6,90,90,5);
            }else{
                render(getChildren(newPId),e.target.parentNode.parentNode.parentNode);
            }
        }
    });
    info.addEventListener("click",function(e){
        this.style.display = "none";
        this.style.zIndex = 0;
        obj.select();
        e.stopPropagation();
    })
}


/* 根据指定id获取对应的数据*/
function get1(id) {
    return tableData.filter( function (item) {
        return item.id == id;
    } )
}

function clone(Obj) {
    var newObj;
    if (Obj instanceof Array) {
        newObj = []; 
        var i = Obj.length;
        while (i--) {
            newObj[i] = clone(Obj[i]);
        }
        return newObj;
    } else if (Obj instanceof Object){
        newObj = {};  
        for (var k in Obj) {  
            newObj[k] = clone(Obj[k]);
        }
        return newObj;
    }else{
        return Obj;
    }
}
//更改复制元素的pid
function changeCopyPids(arr){
    var MaxId = getMaxId()+1;
    if(!arr.length){
        return;
    }

    for(var j = 0; j <arr.length;j++){
        for(var i = 0; i <arr.length; i++){
            if(arr[i].pid == arr[j].id){
                arr[i].pid = j + MaxId;
            }
        }
    }

    return arr;
}

function sticky(__id,e2,datas,par){

    if(!datas||!datas.length){
        return;
    }else{

        var MaxId = getMaxId() + 1;
        if(datas.length > 1){
            for(var i = 0; i < datas.length; i++) {
                datas[i].id = MaxId + i;
            }
        }else{
            datas[0].id = MaxId
        }

        var datasss = clone(datas);

        var children = getChildren(__id);

        iIndex ++;

        children.forEach(function (item){
            if (datasss[0].type == item.type && datasss[0].name == item.name ) {

                datasss[0].name = datas[0].name + '副本('+ iIndex +' )';

            }
        });

        tableData = tableData.concat(datasss);

        render(getChildren(__id),par);


    }
}