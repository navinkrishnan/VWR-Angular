// var presidentAppCtrl = angular.module('presidentApp',[]);
presidentApp.controller('homeCtrl', function($scope, $http, getService) {

    getService.getDatafromDb(function(loc) {
        $scope.$apply(function() {
            $scope.location = loc;
        });
    });

});


presidentApp.controller('indexCtrl', function($scope, getService) {

    $scope.isLoading = true;
    getService.getAjax(function(data) {
        alert("finish");
        $scope.isLoading = false;
    });

});
