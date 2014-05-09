var presidentApp = angular.module('presidentApp', []);

presidentApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
                	templateUrl: 'partials/home.html', 
                	controller: 'homeCtrl'
         }).when('/video', {
            templateUrl:'partials/video.html',
            controller: 'videoCtrl'
        });

    }]);
  