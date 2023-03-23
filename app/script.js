var app = angular.module('ngRouteExample', ['ngRoute',
    'moduleControllers',
    'moduleService',
    'moduleDirective'



                                            
]) .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/carritoCompra', {
                templateUrl: '/render/GetHtml?view=carritoCompra',
                controller: 'carritoControlador',

            }).when('/calculadora', {
                templateUrl: '/render/GetHtml?view=calculadora',
                controller: 'divController',

            }).when('/formulario', {
                templateUrl: '/render/GetHtml?view=formulario',
                controller: 'CustomerController',

            })
            .when('/directivaPers', {
                templateUrl: '/render/GetHtml?view=directivaPers',
              

            }).when('/textSize', {
                templateUrl: '/render/GetHtml?view=fontSize',


            })
            .when('/ejemplo', {
                templateUrl: '/render/GetHtml?view=ejemploTexto',
                

            })
            .when('/ejemploLogin', {
                templateUrl: '/render/GetHtml?view=ejemploLogin',


            })
            .when('/seleccionCoche', {
                templateUrl: '/render/GetHtml?view=seleccionCoche',
                controller: 'CustomerController',

            }).when('/reloj', {
                templateUrl: '/render/GetHtml?view=reloj',
                controller: 'timeController',

            }).when('/formula1', {
                templateUrl: '/render/GetHtml?view=formula1',
                controller: 'CustomerController',

            }).when("/formula1", {
                templateUrl: "partials/drivers.html",
                controller: "driversController",
            }).
                when("/drivers/:id", {
                    templateUrl: "partials/driver.html",
                    controller: "driverController",
                })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: '/render/GetHtml?view=chapter',
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