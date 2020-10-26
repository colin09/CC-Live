var cvApp = angular.module('cvApp', ['ngRoute', 'ngSanitize']);


cvApp.config(function ($routeProvider) {
    $routeProvider
        .when('/dashboard', { templateUrl: "./views/dashboard.html", controller: "dashboardCtr" })
        .when('/videos', { templateUrl: "./views/resource/video.html", controller: "videoCtr" })
        .otherwise({ redirectTo: "/dashboard" });
});


cvApp.filter('filterPId', function () {
    return function (items, pId) {
        // console.log(pId);
        // console.log(items);
        var result = [];
        $.each(items, function (index, item) {
            if (item.pId == pId)
                result.push(item);
        });
        // console.log(result);
        return result;
    }
});

