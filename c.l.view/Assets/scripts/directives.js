cvApp.directive('mainHeader', function () {
    return {
        restrict: 'E',
        templateUrl: './views/common/mainHeader.html',
        replace: true,
        scope: false,
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
        }
    };
});
cvApp.directive('mainSidebar', function () {
    return {
        restrict: 'E',
        templateUrl: './views/common/sidebar.html',
        replace: true,
        scope: {},
        controller: function ($scope) {
            $scope.navs = navications
        },
        link: function (scope, element, attrs) {

        }
    };
});
cvApp.directive('mainFooter', function () {
    return {
        restrict: 'E',
        templateUrl: './views/common/footer.html',
        replace: true,
        scope: false,
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
        }
    };
});
cvApp.directive('pager', function () {
    return {
        restrict: 'E',
        templateUrl: './views/common/pager.html',
        replace: true,
        scope: false,
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
            scope.pageInfo = {
                from: 0,
                to: 0,
                totalPage: 0,
                items: []
            };

            var homePage = element.find(".homePage");
            var prevPage = element.find(".prevPage");
            var nextPage = element.find(".nextPage");
            var lastPage = element.find(".lastPage");
            var pageNum = element.find(".pageNumber");
            var pageGoto = element.find(".pageGoto");

            function setPageBtnStyle() {
                if (scope.pager.index > 1) {
                    homePage.addClass("homePageDark");
                    prevPage.addClass("prevPageDark");
                } else {
                    homePage.removeClass("homePageDark");
                    prevPage.removeClass("prevPageDark");
                }

                if (scope.pager.index < scope.pageInfo.totalPage) {
                    nextPage.addClass("nextPageDark");
                    lastPage.addClass("lastPageDark");
                } else {
                    nextPage.removeClass("nextPageDark");
                    lastPage.removeClass("lastPageDark");
                }
            }
            scope.$watch('pager.index', function (newVal, oldVal) {
                setPageBtnStyle();
            });
            scope.$watch('pager.total', function (newVal, oldVal) {
                if (scope.pager.total < 0) return;
                scope.pageInfo.totalPage = Math.ceil(scope.pager.total / scope.pager.size);
                scope.pageInfo.from = (scope.pager.index - 1) * scope.pager.size + 1;
                scope.pageInfo.to = scope.pageInfo.from + scope.pager.size;
                if (scope.pageInfo.to > scope.pageInfo.totalPage)
                    scope.pageInfo.to = scope.pageInfo.totalPage;
                for (var i = scope.pageInfo.from; i <= scope.pageInfo.to; i++)
                    scope.pageInfo.items.push(i);
                setPageBtnStyle();
            });
            // 首页
            homePage.on('click', function () {
                var index = 1;
                scope.pager.total = 0;
                scope.pageSearch(index);
            });
            // 尾页
            lastPage.on('click', function () {
                var maxPage = Math.ceil(scope.pager.total / scope.pager.size);
                var index = maxPage;

                scope.pager.total = 0;
                scope.pageSearch(index);
            });
            // 上一页
            prevPage.on('click', function () {
                if (scope.pager.index > 1)
                    scope.pager.index--;

                var maxPage = Math.ceil(scope.pager.total / scope.pager.size);
                if (scope.pager.index >= maxPage)
                    scope.pager.index = maxPage;

                var index = scope.pager.index;
                scope.pager.total = 0;
                scope.pageSearch(index);
            });
            // 下一页
            nextPage.on('click', function () {
                scope.pager.index++;
                var maxPage = Math.ceil(scope.pager.total / scope.pager.size);
                if (scope.pager.index >= maxPage)
                    scope.pager.index = maxPage;

                var index = scope.pager.index;
                scope.pager.total = 0;
                scope.pageSearch(index);
            });
            // 输入页面跳转
            pageGoto.on('click', function () {
                var index = $(this).data('index');
                console.log(index);
                
                if (scope.pager.index < 1) scope.pager.index = 1;
                var maxPage = Math.ceil(scope.pager.total / scope.pager.size);
                if (scope.pager.index >= maxPage)
                    scope.pager.index = maxPage;

                var index = scope.pager.index;
                scope.pager.total = 0;
                scope.pageSearch(index);
            });



        }
    };
});