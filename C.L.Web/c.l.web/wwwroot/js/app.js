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
});