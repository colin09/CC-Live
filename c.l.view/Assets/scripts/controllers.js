
/*
$http.get('/someUrl', config).then(successCallback, errorCallback);
$http.post('/someUrl', data, config).then(successCallback, errorCallback);
*/
cvApp.controller('dashboardCtr', function ($scope, $http) {

});

cvApp.controller('demoCtr', function ($scope, $http) {

});

cvApp.controller('videoCtr', function ($scope, $http) {
    $scope.pager = { index: 1, size: 20, total: 0 };
    $scope.key = 'vue';
    $scope.list = [];

    $scope.search = function () {


        $http.get("http://127.0.0.1:3000/m/msg/RabbitMQ_YKBLSupplier").then(function (response) { console.log(response); })

        /*
        $http({
            method: "POST",
            url: apiUrls.mongo_media_search,
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            data: { key: $scope.key, pIndex: 1, pSize: 20 }
        }).then(function (result) {
            var response = result.data;
            if (response.success) {
                $scope.list = response.data;
                $scope.pager.total = response.pager.totalCount;
            }
            else
                console.log(response);
        }, function error(err) {
            //数据请求失败
            console.log(err);
        });*/
        const httpOptions = {headers:{'Content-Type':'application/json'}};
        $http.post(apiUrls.mongo_media_search, { key: $scope.key, pIndex: 1, pSize: 20 },httpOptions).then(function (result) {
            var response = result.data;
            if (response.success) {
                $scope.list = response.data;
                $scope.pager.total = response.pager.totalCount;
            }
            else
                console.log(response);
        });
    }

    $scope.alert = function () {
        $('#staticBackdrop').modal('show');
        $('#staticBackdrop').on('hidden.bs.modal', function (e) {
            // do something...
        })

        var maxWidth = $(".page-inner").width() * 0.9;
        $('#staticBackdrop > .modal-dialog').css({ "max-width": maxWidth });
        $scope.setPlayer(maxWidth * 0.95);
    };



    $scope.setPlayer = function (maxWidth) {
        var options = {
            // width: ,
            // height: ,
            autoplay: false,
            controls: true,
            preload: 'auto',
            muted: false, //是否静音 
            sources: [{
                src: './Assets/lib/videos/oceans.mp4',
                type: 'video/mp4'
            }]
        };

        var player = videojs('my-player', options, function onPlayerReady() {
            videojs.log('Your player is ready!');
            this.play();

            let width = this.videoWidth();
            let height = this.videoHeight();
            let maxHeight = maxWidth / width * height;
            $('#staticBackdrop > .modal-dialog #my-player').css({ "width": maxWidth, "height": maxHeight });
            console.log('width:' + maxWidth + ' , height:' + maxHeight);


            // How about an event listener?
            this.on('ended', function () {
                videojs.log('Awww...over so soon?!');
            });
        });
    }





});
