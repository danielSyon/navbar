angular.module('moduleService', []).factory('calculatorService', function () {
    var service = {};

    service.divide = function (a, b) {
        return a / b;
    };

    return service;
})
    .factory('f1Service', function ($http) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function () {
        return $http({
            method: 'JSONP',
            url: 'https://ergast.com/api/f1/2012/driverStandings.json?callback=JSON_CALLBACK'
        });
        }

        ergastAPI.getDriverDetails = function (id) {
            return $http({
                method: 'JSONP',
                url: 'https://ergast.com/api/f1/2012/drivers/' + id + '/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getDriverRaces = function (id) {
            return $http({
                method: 'JSONP',
                url: 'https://ergast.com/api/f1/2012/drivers/' + id + '/results.json?callback=JSON_CALLBACK'
            });
        }


    return ergastAPI;
});


