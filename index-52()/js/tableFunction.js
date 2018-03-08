/*
/!* Created by Administrator on 2017/11/24*!/

/!*根据指定的pid获取对应的子级 *!/
function getChildren(pid) {
    return tableData.filter( function (item) {
        return item.pid == pid;
    } );
}

/!*获取所有子级*!/
function getAllChildren(pid) {
    var allChildren = [];
    allChildren = getChildren(pid);
    allChildren.forEach(function (item) {
        var children = getAllChildren(item.id);
        allChildren = allChildren.concat(children);
    });
    return allChildren;
}

/!*根据指定id获取对应的数据 *!/
function get(id) {
    return tableData.find( function (item) {
        return item.id == id;
    } )
}

/!*获取指定父级*!/
function getParent(id) {
    var info = get( id );
    if (info) {
        return get( info.pid );
    }
}

/!*根据指定id获取所有父级 *!/
function getParents(id) {
    var parents = [];
    var i = getParent(id);
    if (i) {
        parents.push( i );
        parents = getParents(i.id).concat( parents );
    }
    return parents;
}

/!* 添加新数据 *!/
/!*
function addNewData1(newData1) {
    var children1 = getChildren1(newData1.pid);
    if (newData1.name !== '') {
        var isSameName1 = false;
        children1.forEach( function (item) {
            if (newData1.type == item.type && newData1.name == item.name) {
                isSameName1 = true;
            }
        } );

        if (isSameName1) {
            return false;
        }
    } else {
        // newData1.name = '新建文件夹';
        newData1.name = newFileNames;
        console.info(newFileNames,newData1.name);

        var i = 0;
        while(true) {
            var isSameName1 = false;
            children1.forEach( function (item) {
                if (newData1.type == item.type && newData1.name == item.name) {
                    isSameName1 = true;
                }
            } );
            if (isSameName1) {
                i++;
                // newData1.name = '新建文件夹('+ i +')';
                newData1.name = newFileNames +'('+ i +')';
            } else {
                break;
            }
        }
    }
    newData1.id = ++MAXID1;
    tableData.push(newData1);
    return true;
}
*!/

/!*获取数据中最大的id值 *!/
function getMaxId() {
    return tableData.sort(function (a, b) {
        return a.id - b.id;
    })[tableData.length - 1].id;
}

/!*删除文件夹、文件 *!/
function removeData(ids) {
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

function addNewData(newConstrData) {
    var children = getChildren(newConstrData.pid);
    if (newConstrData.name !== '') {
        var isEqualName = false;
        children.forEach( function (item) {
            if (newConstrData.type == item.type && newConstrData.name == item.name) {
                isEqualName = true;
            }
        } );
        if (isEqualName) {
            return false;
        }
    } else {
        // newConstrData.name = newFileNames;
        //console.info(1,newConstrData.name);
        newConstrData.name = '新建文件夹';

        var i = 0;
        while(true) {
            var isEqualName = false;
            children.forEach( function (item) {
                if (newConstrData.type == item.type && newConstrData.name == item.name) {
                    isEqualName = true;
                }
            } );
            if (isEqualName) {
                i++;
                newConstrData.name = '新建文件夹('+ i +')';
                // newConstrData.name = newFileNames +'('+ i +')';
                //console.info(newConstrData.name);
            } else {
                break;
            }
        }
    }

    newConstrData.id = ++MaxId;
    //console.info(newConstrData);
    tableData.push(newConstrData);
    return true;
}
*/
