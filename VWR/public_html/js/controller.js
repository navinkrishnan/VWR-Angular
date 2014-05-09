// var presidentAppCtrl = angular.module('presidentApp',[]);
presidentApp.controller('homeCtrl', function($scope, $http, getService) {
    var FulUsers = [];
    $scope.curLoc = "10";

    getService.getDatafromDb(function(loc) {
        $scope.$apply(function() {
            $scope.location = loc;
        });
    });

    getService.getUserdatafromDb(function(response) {

        $scope.$apply(function() {
            $scope.users = response;
            FulUsers = response;
        });
        $('.carousel').carousel({carouselWidth: 930, carouselHeight: 330, directionNav: true, shadow: true, buttonNav: 'bullets'});
    });

//    $scope.changeLoc = function() {
//
//        var sortedUsers = [];
//        angular.forEach(FulUsers, function(user, i) {
//            if (user.loc == $scope.curLoc) {
//                sortedUsers.push(user);
//            }
//        });
//        $scope.users = sortedUsers;
//        $('.carousel').carousel({carouselWidth: 930, carouselHeight: 330, directionNav: true, shadow: true, buttonNav: 'bullets'});
//
//    };

});


presidentApp.controller('indexCtrl', ['$scope', 'getService', function($scope, getService) {

        $scope.isLoading = true;
        getService.getAjax(function(res) {
            $scope.isLoading = false;
            alert("finish");
            alert($scope.isLoading);
        });
    }]);
