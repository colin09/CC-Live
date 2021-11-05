
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
        const httpOptions = { headers: { 'Content-Type': 'application/json' } };
        $http.post(apiUrls.mongo_media_search, { key: $scope.key, pIndex: 1, pSize: 20 }, httpOptions).then(function (result) {
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



cvApp.controller('clashCtr', function ($scope, $http) {

    $scope.proxiesData = {};
    $scope.proxies = [];
    $scope.version = "";
    $scope.config = {};

    $scope.getProxies = function () {
        $http.get("http://127.0.0.1:9090/proxies").then(function (response) {
            $scope.proxiesData = response.data.proxies
        })
    }

    $scope.getProviders = function () {
        $http.get("http://127.0.0.1:9090/providers/proxies").then(function (response) {
            $.each(response.data.providers.Proxy.proxies, function (index, item) {
                $scope.proxies.push({ id: index, name: item.name, type: item.type, delay: -1, style: "", cursor: "cursor-pointer" });
            });

        });
    }

    $scope.getVersion = function () {
        $http.get("http://127.0.0.1:9090/version").then(function (response) {
            $scope.version = response.data.version;
        });
    }
    $scope.getConfig = function () {
        $http.get("http://127.0.0.1:9090/configs").then(function (response) {
            $scope.version = response.data;
        });
    }

    $scope.getDelay = function (proxy) {
        $http.get("http://127.0.0.1:9090/proxies/" + proxy.name + "/delay?timeout=5000&url=http://www.gstatic.com/generate_204").then(function (response) {
            console.log(proxy + " - " + response.data.delay);
            proxy.delay = response.data.delay;
            proxy.style = response.data.delay > 2000 ? "background-color: rgb(255, 62, 94);" : response.data.delay > 1000 ? "background-color: rgb(255, 154, 40);" : response.data.delay > 1 ? "background-color: rgb(0, 197, 32);" : "";
            proxy.cursor = response.data.delay > 0 && response.data.delay < 1000 ? "cursor-pointer" : "cursor-pointer error";
        }, function (response) {
            proxy.style = "";
            proxy.cursor = "cursor-pointer error";
        });
    }
    $scope.checkDelay = function () {
        $.each($scope.proxies, function (index, item) {
            $scope.getDelay(item);
        });
    }

    $scope.putProxy = function (proxy) {
        var data = { name: proxy.name };
        var config = "application/json";
        $http.put("http://127.0.0.1:9090/proxies/Proxy", data, config).then(function () {
            if (proxy.cursor.indexOf("tags-selected") < 0)
                proxy.cursor += " tags-selected";
            // This function handles success
        }, function (response) {
            // this function handles error
        });
    }


    $scope.getProxies();
    $scope.getVersion();
    $scope.getConfig();
    $scope.getProviders();
});