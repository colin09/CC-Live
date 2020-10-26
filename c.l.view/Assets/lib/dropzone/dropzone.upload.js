
/* Dropzone上传插件配置 */
var IsServerError = false;//服务器获取配置出错
var fileList = new Array();
var fileList_Uploading = new Array();
var uploaded_filePaths = new Array();//已上传的文件在服务器的路径集合；用于遇到异常时删除已上传的文件。（相当于回滚）
var arr_file = new Array();
var arr_xhr = new Array();

var dropzoneOptions = {
    url: "/Mgr/Sys/FileSave",
    paramName: "MyFile", //上传字段名 filedName
    maxFiles: 10, //最大上传数量
    maxFilesize: 1000, // MB 单个文件大小上限
    filesizeBase: 1000,
    acceptedFiles: ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.7z,.txt,image/*,application/pdf,.psd",
    addRemoveLinks: true,
    clickable: true,
    autoProcessQueue: false, // true:自动上传，一次性上传parallelUploads个文件，上传成功后后面排队的其他队伍也会继续排队上传。false:关闭自动上传, 手动调度 ,但每次需要点击“上传”按钮才会触发上传，排队的其他文件不会自动上传。
    parallelUploads: 10, //最大并行处理量（一次同时上传的个数，不设置的话，默认：2个）


    /* 插件消息翻译 */
    /*  dictDefaultMessage: '<i class="fa fa-cloud-upload"></i>拖拉文件上传<br />或 <i class="fa fa-thumbs-down"></i>点此上传', */
    dictInvalidFileType: '仅支持以下格式文件：.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.7z,.txt,image/*,application/pdf,.psd',
    dictFileTooBig: '文件超出最大10M约束',
    dictMaxFilesExceeded: '超出最大上传数量',
    dictCancelUpload: '取消上传',
    dictRemoveFile: '删除',
    dictCancelUploadConfirmation: '确认取消上传',
    dictResponseError: "文件上传失败!",
    dictDefaultMessage: "<span class='bigger-150 bolder'><i class='icon-caret-right red'></i>拖动文件</span>上传\ <span class='smaller-80 gre'>(或者点击上传)</span> <br /> \ <i class='upload-icon icon-cloud-upload blue icon-3x'></i>",

    /* 上传缩略图预览模板 */
    //previewTemplate: ' <div id="viewer" class="dz-preview dz-file-preview">    <div class="dz-details" onClick="viewFile(this)" name="">  <div style="display:none;" class="fileId"></div>   <div class="dz-filename"><span data-dz-name></span></div>       <div class="dz-size" data-dz-size></div>    <img data-dz-thumbnail />    </div>    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>   <div class="dz-success-mark"><span>?</span></div>                           <div class="dz-error-mark"><span>?</span></div>                             <div class="dz-error-message"><span data-dz-errormessage>""</span></div>                          </div>                       ',
    /*accept: function(file, done) {
        fileList_Accepted.push(file)
        done();
    }, */
    init: function () {
        var self = this;
        // 非自动上传。点击上传按钮开始ajax上传
        //this.element.querySelector("button#uploadBtn").addEventListener("click", function (e) {
        //    e.preventDefault();
        //    e.stopPropagation();
        //    self.processQueue();
        //});
        $("button#btnUpload").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.processQueue();
        });


        /*var accept = this.getAcceptedFiles();//所有接受的文件（合法）
        var reject = this.getRejectedFiles();//所有拒绝的文件（非法）
        var uploading = this.getQueuedFiles();//所有上传中的文件
        var queued = this.getRejectedFiles(); //所有排队中的文件
        */
        var this_ = this;
        fileList = this.getAcceptedFiles();//所有接受的文件（合法）
        this.on("addedfile", function (file) {  //新添加的文件，每添加一个新文件都会触发一次该函数，可以使用alert测试一下
            //alert("addedfile:"+file.name)  
            //fileList.push(file); 
        })
        this.on("canceled", function (file, response) {  //当取消文件上传式调用
            //单个文件点击“取消上传”并确认后执行该函数，将该文件从上传列队中移除。
            for (var i in arr_file) {
                if (arr_file[i].name.trim() == file.name.trim()) {
                    var xhr = arr_xhr[i];
                    xhr.abort();
                }
            }

        })
        this.on("sending", function (file, xhr, formData) {  //文件上传前调用 
            arr_file.push(file);
            arr_xhr.push(xhr);
            formData.append("fileSize", file.size);
            formData.append("fileName", file.name);
            formData.append("sourceType", $("#hdSourceType").val());
            formData.append("businessId", $("#hdBusinessId").val());
        })
        this.on("uploadprogress", function (file, progress, bytesSent) {  //文件上传监听器（file：文件、progress：上传进度n%、bytesSent：）

        })

        this.on("complete", function (file, response) { //当上传完成，成功或者出现错误时调用.
            //alert("complete:"+response)

        })
        this.on("success", function (file, response) {  //文件已经成功上传，获得服务器返回信息作为第二个参数
            //每个文件上传成功后有以下处理
            //1.该文件会自动将UI拼接到上传区域，我们需要将文件的服务器路径隐藏到该UI中。为移除等操作提供便利。
            IsServerError = !response.success;
            var File_PhysicalPath = "";
            //var list = response.data;
            //for (var k in list) {
            //    var file0 = list[k];
            //    //alert(file0.fileName.trim()+":"+file.name+"\n"+file0.fileSize+":"+file.size)
            //    if (file0.fileName.trim() == file.name && file0.fileSize == file.size) {
            //        File_PhysicalPath = file0.physical_path;
            //    }
            //}
            $(".dz-filename span").each(function () {
                if ($(this).text().trim() == file.name.trim()) {
                    $(this).parent().parent().find(".fileId").text(File_PhysicalPath);
                    uploaded_filePaths.push(File_PhysicalPath);
                }
            })

        });
        this.on("queuecomplete", function (file, response) { //当上传队列中的所有文件上传完成时调用.
            //alert("任务完成！") 
            if (IsServerError) {
                alert("服务器获取文件夹配置失败！即将回滚上传操作");//若提示该警告，请查看com.nbc.demok.io.Upload.multi_upload()方法中的PropertiesUtils.getProperty("")获取配置是否为空。为空的话，请及时在配置文件中添加该配置

                //1.后台：遇到服务器异常，删除已上传的服务器上的文件 
                var filePaths = "";
                for (var i in uploaded_filePaths) {
                    var path = uploaded_filePaths[i];
                    if (path != "") {
                        filePaths = (filePaths == "") ? path : (filePaths + "¤¤¤¤¤" + path);
                    }
                }
                if (filePaths.trim() != "") {
                    removeFiles_From_Server(filePaths);//服务器：移除所有未遇到错误之前的刚刚上传了的文件
                }

                //2.前端：移除所有显示的附件
                this.removeAllFiles(true);

            }
        });
        /*
        this.on("removedfile", function (file) { //删除单一文件 
            //alert("removedfile:"+file.name+"\npath:"+$(file.previewElement).find(".fileId").text()) 
            
            //文件在服务器上的路径
            var filePath = $(file.previewElement).find(".fileId").text().trim();
            //删除文件操作有以下步骤：
            //1.使用ajax删除在服务器上的该文件
            if (filePath != "") {
                removeFiles_From_Server(filePath);
            }
            
            console.log(file.name);
            //2.删除文件在前端的显示
            this.removeFile(file);

        });*/
        this.on("error", function (file, errorMessage) { //不接受该文件（非定义的可接受类型）或上传失败
            //alert("error:"+file.name+"    "+errorMessage+"\nIsServerError:"+IsServerError)
            //this.removeFile(file); 
        });
    }
}

var theDropzone;

function ShowUploaderModal(element) {
    var businessId = $(element).data("id");
    var sourceType = $(element).data("type");
    $("#hdBusinessId").val(businessId);
    $("#hdSourceType").val(sourceType);

    Dropzone.autoDiscover = false;

    IsServerError = false;//服务器获取配置出错
    fileList = new Array();
    fileList_Uploading = new Array();
    uploaded_filePaths = new Array();//已上传的文件在服务器的路径集合；用于遇到异常时删除已上传的文件。（相当于回滚）
    arr_file = new Array();
    arr_xhr = new Array();

    if (!theDropzone)
        theDropzone = new Dropzone("div#divUploader", dropzoneOptions);

    $('.bs-source-modal-lg').modal({
        keyboard: false
    });

    $('.bs-source-modal-lg').on('hidden.bs.modal', function (e) {
        theDropzone.removeAllFiles(true);
        //theDropzone.destroy();
        //theDropzone.reset();
    })
    $("div#divUploader").addClass("dropzone");
}



function removeFiles_From_Server(filePaths) {
    var path = $("#basePath").val();
    if (path == undefined) {
        alert("获取工程根目录出错");//请查看页面是否有id="basePath"的输入框，并且该输入框存放项目根目录
        return;
    }
    $.ajax({
        type: "POST",
        timeout: 60000,
        dataType: "json",
        url: path + "/backend/upload.jsp?method=remove",  //后台url请求，处理传递的参数
        async: false,
        data: {
            filePaths: escape(escape(filePaths))
        },
        beforeSend: function (xhr) {
            $("#loading_").css("display", "block");    // 数据加载成功之前，使用loading组件（使用加载中的图片，显示图片gif即可） 
        },
        success: function (data) {
            //ajax请求成功执行该函数
            $("#loading_").css("display", "none");  	 //关闭加载中图片  
            //alert("删除成功，数量："+data.count+"个")
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#loading_").css("display", "none") // 
            if (textStatus == "timeout") {
                alert(" 请求超时，可能是网络较慢，请重新加载")
            } else {
                alert("XMLHttpRequest.status:" + XMLHttpRequest.status + "\n" + "XMLHttpRequest.readyState:" + XMLHttpRequest.readyState + "\n"
                    + "textStatus:" + textStatus);
            }
        }
    });
}

function viewFile(obj) {
    var filePath = $(obj).find(".fileId").text();

    if (filePath.trim().length > 0) {
        p = filePath.split(".");
        var suffix = "." + p[p.length - 1];   //后缀为 [.doc .docx .xls .xlsx .ppt .pptx]可以转pdf在线浏览
        //alert(suffix);
        var IsOffice = false;
        var arr = new Array(".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx")
        for (var i in arr) {
            if (suffix == arr[i].trim()) {
                IsOffice = true;
            }
        }
        if (IsOffice) {
            Open_Office_File(filePath)
        } else {
            Open_Not_Office_File(filePath);
        }
    }
}

function Open_Office_File(path) {
    alert("查看文件处理:" + path)
}

function Open_Office_File(path) {
    alert("查看文件处理:" + path)
}



/*
 * 
————————————————
版权声明：本文为CSDN博主「Demonor_」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/A13432421434/java/article/details/87860661
*/


function showTabs(index) {
    //通过controller来获取Angular应用
    var appElement = document.querySelector('[ng-controller=carCtl]');
    //获取$scope变量
    var $scope = angular.element(appElement).scope();
    $scope.tabIndex = index;
    $scope.$apply();
    //$scope.showTabs(index);

    switch (index) {
        case 1:
            $scope.showResource(11);
            break
        case 2:
            $("#hdSourceType").val(11)
            break
        case 3:
            $scope.showResource(12);
            break
        case 4:
            $("#hdSourceType").val(12)
            break
    }
}




