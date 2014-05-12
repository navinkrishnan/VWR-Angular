var presidentApp = angular.module('presidentApp', ['ui.bootstrap']);

presidentApp.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        }).when('/video', {
            templateUrl: 'partials/video.html',
            controller: 'videoCtrl'
        });
    }]);

//
//presidentApp.filter('myFilter', function() {
//    return function(items, search) {
//        var result = [];
//        angular.forEach(items, function(value, key) {
//            angular.forEach(value, function(value2, key2) {
//                if (value2.loc == search) {
//                    result.push(value2);
//                }
//            });
//        });
//        return result;
//
//    }
//});


presidentApp.filter('property', property);

function property() {
    function parseString(input) {
        return input.split(".");
    }

    function getValue(element, propertyArray) {
        var value = element;

        _.forEach(propertyArray, function(property) {
            value = value[property];
        });

        return value;
    }

    return function(array, propertyString, target) {
        var properties = parseString(propertyString);

        return _.filter(array, function(item) {
            return getValue(item, properties) == target;
        });
    }
}
