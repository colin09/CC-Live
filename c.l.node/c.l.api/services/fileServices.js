const fs = require('fs');
const path = require('path');
var esearch = require('../esearch/client');

var ROOT_PATH = path.resolve(__dirname);
console.log('ROOT_PATH: ' + ROOT_PATH);


async function scanDirctory(directory) {
    //解析需要遍历的文件夹，我这以E盘根目录为例
    var filePath = path.resolve(directory);

    //调用文件遍历方法
    var fileList = await fileDisplay1(filePath, 0);
    console.log('fileDisplay1 over');
    return fileList;
}



async function indexDirctory(directory) {
    //解析需要遍历的文件夹，我这以E盘根目录为例
    var filePath = path.resolve(directory);
    var fileList = await fileDisplay1(filePath, 0);
 
    var files = fileList.filter(m => m.type == 'file');
    var totalCount = files.length;
    var pageSize = 1000;
    var pageCount = Math.ceil(totalCount / pageSize);
    for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        var offset = pageIndex * pageSize;
        var pageData = (offset + pageSize >= totalCount) ? files.slice(offset, totalCount) : files.slice(offset, offset + pageSize);
        esearch.bulk('resource', 'dir', pageData);
    }

    return files.length;
}














function fileDisplay1(filePath, depth = 0) {
    //根据文件路径读取文件，返回文件列表
    var files = fs.readdirSync(filePath);
    var list = [];
    if (!files || files.length < 1)
        return list;
    depth++;
    //遍历读取到的文件列表
    files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        var fileState = fs.statSync(filedir);
        var isFile = fileState.isFile();//是文件
        var isDir = fileState.isDirectory();//是文件夹

        list.push({ depth: depth, type: isFile ? 'file' : 'dir', name: filename, dir: filedir, date: Date() });

        if (isFile) {
        }
        if (isDir) {
            var subList = fileDisplay1(filedir, depth);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            if (subList && subList.length > 0)
                subList.forEach((file) => { list.push(file); });
        }
    });
    return list;
}


/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath, depth = 0) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err);
        } else {
            depth++;
            fileList.push({ depth: 901, name: '----', date: Date() });
            //遍历读取到的文件列表
            files.forEach(function (filename) {
                fileList.push({ depth: 902, name: '----', date: Date() });
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, async function (eror, stats) {
                    fileList.push({ depth: depth, name: '----', date: Date() });
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if (isFile) {
                            var curFile = filedir.replace(filePath, '');
                            //console.log('>'.padStart(depth * 4, '-') + curFile + Date());
                            fileList.push({ depth: depth, name: filename, date: Date() });
                        }
                        if (isDir) {
                            var curDir = filedir.replace(filePath, '');
                            fileList.push({ depth: depth, name: filename, date: Date() });
                            //console.log('>'.padStart(depth * 4, '-') + curDir);
                            await fileDisplay(filedir, depth);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
    console.log(fileList.length + ' | ' + depth);
    fileList.push({ depth: 903, name: '----', date: Date() });
    //return fileList;
}


module.exports = {
    scan: scanDirctory,
    index: indexDirctory,
}