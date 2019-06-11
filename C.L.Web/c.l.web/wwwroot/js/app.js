//var module = angular.module('LiveApp', ["ngSanitize"]);
var module = angular.module('LiveApp', []);

module.controller('VideoCtl', function ($scope, $http) {
    $scope.pager = { pageIndex: 1, pageSize: 50, totalPage: 1 };
    $scope.searchKey = "";
    $scope.ResourceList = [];

    //initVideo();

    $scope.btnSearch = function () {

        $http.get("/Resource/search?pageIndex=" + $scope.pager.pageIndex + "&pageSize=" + $scope.pager.pageSize + "&key=" + $scope.searchKey).then(function (result) {
            var response = result.data;
            if (response.success)
                $scope.ResourceList = response.data;
        }).catch(function (result) { //捕捉错误处理
            console.write(result);
        });
    }
    $scope.modifVodieInfo = function(item){
        $scope.currentVideo=item;
    }
    $scope.saveVodieInfo = function(){


    }
    $scope.btnSearch();

    $scope.showVideoModel = function (item) {
        $("#videoModalCenter").modal({
            backdrop: false,
            keyboard: false
        }).on('show.bs.modal', function () {
            console.log("show");
        }).on('shown.bs.modal', function () {
            videojs('my-video').play();
            console.log("shown");
        }).on('hide.bs.modal', function () {
            videojs('my-video').pause();
            console.log("hide");
        }).on('hidden.bs.modal', function () {
            //videojs('my-video').dispose();
            console.log("hidden");
        });

        $scope.currentVideo = item;
        setVideo(item.url);
    }


    function initVideo() {
        var options = {
            autoplay: false,
            loop: false,
            poster: "",
            preload: "auto",
            sources: [{
                src: "",
                type: "video/mp4"
            }]
        };
        var player = videojs('my-video', options, function () {
            videojs.log("video player is ready");
            // this.player();  //播放
            // this.pause();   //暂停
            // this.dispose(); //销毁
            this.on('ended', function () {
                videojs.log("video player is over.");
            });
        });

    }

    function setVideo(url) {
        var myPlayer = videojs("my-video");  //初始化视频
        myPlayer.src(url);  //重置video的src
        myPlayer.load(url);  //使video重新加载
    }

    $scope.SetVideoLevel = function (id, level) {
        var url = "/Resource/SetState";
        $http.post(url, { id: id, option: 99, value: level }).then(function (result) {
            var response = result.data;
            if (response.success)
                $scope.btnSearch();
        });
    }

});