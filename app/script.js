var app = angular.module('ngRouteExample', ['ngRoute'])
    .controller('MainController',
        function ($scope, $route, $routeParams, $location) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            $scope.pepe = "fadfadf";
        })
    .controller('BookController',
        function ($scope, $routeParams) {
            $scope.name = 'BookController';
            $scope.params = $routeParams;
        })
    .controller('ChapterController',
        function ($scope, $routeParams) {
            $scope.name = 'ChapterController';
            $scope.params = $routeParams;
        })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'Views/Home/book.cshtml',
                controller: 'BookController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'Views/Home/chapter.cshtml',
                controller: 'ChapterController'
            });

        // configure html5 to get links working on jsfiddle
       
        $locationProvider.html5Mode(true);
    });

/*
Copyright 2023 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/