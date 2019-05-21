//var module = angular.module('LiveApp', ["ngSanitize"]);
var module = angular.module('LiveApp', []);

module.controller('VideoCtl', function ($scope, $http) {
    $scope.pager = { pageIndex: 1, pageSize: 50, totalPage: 1 };
    $scope.searchKey = "库存";
    $scope.ResourceList = [];

    $scope.btnSearch = function () {

        $http.get("/Resource/search?pageIndex=" + $scope.pager.pageIndex + "&pageSize=" + $scope.pager.pageSize + "&key=" + $scope.searchKey).then(function (result) {
            var response = result.data;
            if (response.success)
                $scope.ResourceList = response.data;
        }).catch(function (result) { //捕捉错误处理
            console.write(result);
        });
    }

    $scope.showVideoModel = function (url) {
        $("#videoModalCenter").modal({
            keyboard: false
        });
        initVideo();
    }


    function initVideo(url) {
        url = "https://vjs.zencdn.net/v/oceans.mp4";
        var options = {
            autoplay: false,
            loop: false,
            poster: "",
            preload: "auto",
            sources: [{
                src: url,
                type: "video/mp4"
            }]
        };
        var player = videojs('my-video', options, function onPlayerReady() {
            videojs.log("video player is ready");
            this.player();  //播放
            // this.pause();   //暂停
            // this.dispose(); //销毁
            this.on('ended', function () {
                videojs.log("video player is over.");
            });
        });

    }


});