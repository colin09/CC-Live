cvApp.controller('dashboardCtr', function ($scope, $http) {

})

cvApp.controller('videoCtr', function ($scope, $http) {
    $scope.pager = { index: 1, size: 20, total: 0 };
    $scope.list = [];

    $scope.search = function () {
        $scope.pager.total = 100;
    }
})
