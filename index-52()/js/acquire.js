/**
 * Created by Administrator on 2017/11/27.
 */

/*根据指定的pid获取对应的子级*/
function getChildren(pid) {
    return tableData.filter( function (item) {
        return item.pid == pid;
    } );
}

/* 获取所有子级*/
function getAllChildren(pid) {
    var allChildren = [];
    allChildren = getChildren(pid);
    allChildren.forEach(function (item) {
        var children = getAllChildren(item.id);
        allChildren = allChildren.concat(children);
    });
    return allChildren;

}

/*根据指定id获取对应的数据*/
function get(id) {
    return tableData.find( function (item) {
        return item.id == id;
    } )
}

/* 根据指定id获取对应的数据*/
function get1(id) {
    return tableData.filter( function (item) {
        return item.id == id;
    } )
}

/*获取指定父级 */
function getParent(id) {
    var info = get( id );
    if (info) {
        return get( info.pid );
    }
}

/* 根据指定id获取所有父级*/
function getParents(id) {
    var parents = [];
    var i = getParent(id);
    if (i) {
        parents.push( i );
        parents = getParents(i.id).concat( parents );
    }
    return parents;
}

/* 添加新数据*/
function addNewData(newData) {
    // 获取要添加的新数据的pid，然后根据pid获取子级
    var children = getChildren(newData.pid);
    if (newData.name !== '') {
        // 重名检测：如果pid、type、name都一致，则表示重名了
        var isSameName = false;
        children.forEach( function (item) {
            if (newData.type == item.type && newData.name == item.name) {
                isSameName = true;
            }
        } );
        if (isSameName) {
            return false;
        }
    } else {
        // 当前要检测的文件名称
        if(newData.type == 'folder'){
            newData.name = '新建文件夹';
        }else if(newData.type == 'doc'){
            newData.name = '新建DOC';
        }else if(newData.type == 'pdf'){
            newData.name = '新建PDF';
        }else if(newData.type == 'jpg'){
            newData.name = '新建JPG';
        }
        var i = 0;
        while(true) {
            // 判断是否有重名
            var isSameName = false;
            children.forEach( function (item) {
                if (newData.type == item.type && newData.name == item.name) {
                    isSameName = true;
                }
            } );
            // 判断isSameName为真还是为假：真：有重名的，为假：没有
            if (isSameName) {
                i++;
                if(newData.type == 'folder'){
                    newData.name = '新建文件夹('+ i +')';
                }else if(newData.type == 'doc'){
                    newData.name = '新建DOC('+ i +')';
                }else if(newData.type == 'pdf'){
                    newData.name = '新建PDF('+ i +')';
                }else if(newData.type == 'jpg'){
                    newData.name = '新建JPG('+ i +')';
                }
            } else {
                break;
            }
        }
    }
    newData.id = ++MAXID;
    tableData.push(newData);
    return true;
}

//点击打开按钮
function addFileBtn(){
    _ID = setListItem[_Index].dataset.index;
    createFile(getChildren(_ID));
}

/*获取数据中最大的id值 */
function getMaxId() {
    return tableData.sort(function (a, b) {
        return a.id - b.id;
    })[tableData.length - 1].id;
}

/*删除文件夹、文件 */
function removeData(ids) {  //[2,3]
    var allids = [];
    ids.forEach(function (id) {
        allids.push(id);
        allids = allids.concat( getAllChildren(id).map( function (item) {
            return item.id;
        } ) );
    });
    tableData = tableData.filter(function (item) {
        return allids.indexOf(item.id) == -1;
    });
}

/*交换位置 */
function exchange(a, b) {
    var dataA = get(a);
    var dataB = get(b);
    var posa = tableData.indexOf(dataA);
    var posb = tableData.indexOf(dataB);
    tableData.splice(posa, 1);
    tableData.splice(posb, 0, dataA);
}


//修改复制内容的pid

function getCopyPid(arr){
    var maxIdNum = getMaxId() +1;
    if(!arr.length){
        return;
    }
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[i].pid == arr[j].id){
                // arr[i].id = maxIdNum;
                arr[i].pid = j +maxIdNum ;
            }
        }
    }
    console.info(maxIdNum);
    return arr;
}

//修改复制内容的id

function changeCopyId(arr){
    if(!arr.length){
        return;
    }

    newCopyPid = getCopyPid(arr);
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[i].pid == arr[j].pid){
                arr[i].pid = j + (MAXID);
            }
        }
    }
}


