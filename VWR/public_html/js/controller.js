// var presidentAppCtrl = angular.module('presidentApp',[]);
presidentApp.controller('homeCtrl', function($scope, $http, getService, limitToFilter) {
    var FulUsers = [];
    $scope.curLoc = "10";

    getService.getDatafromDb(function(loc) {
        $scope.$apply(function() {
            $scope.location = loc;
        });
    });

    getService.getUserdatafromDb(function(response) {

        $scope.$apply(function() {
//            $scope.users = response;
//            console.log($scope.users);
            FulUsers = response;
            var slide = "<ul>";
            $.each(response, function(i, user) {
                slide += '<li>' + '<img src="' + user.pic + '" alt ="pic"/>' + '</li>';

            });
            slide += " </ul>";
            $("#container").html('<div class="flipster">' + slide + '</div>');
        });
//        $('.carousel').carousel({carouselWidth: 930, carouselHeight: 330, directionNav: true, shadow: true, buttonNav: 'bullets'});
        $(function() {
            $(".flipster").flipster({
                itemContainer: 'ul', // Container for the flippin' items.
                itemSelector: 'li', // Selector for children of itemContainer to flip
                style: 'carousel', // Switch between 'coverflow' or 'carousel' display styles
                start: 1, // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

                enableKeyboard: true, // Enable left/right arrow navigation
                enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
                enableTouch: true, // Enable swipe navigation for touch devices

                enableNav: false, // If true, flipster will insert an unordered list of the slides
                enableNavButtons: false, // If true, flipster will insert Previous / Next buttons

                onItemSwitch: function() {
                }, // Callback function when items are switches
            });
        });


    });

    $scope.changeLoc = function() {

        var sortedUsers = [];
        angular.forEach(FulUsers, function(user, i) {
            if (user.loc == $scope.curLoc) {
                sortedUsers.push(user);
            }
        });
        $(".flipster").html("");
        var slide = "<ul>";
        $.each(sortedUsers, function(i, user) {
            slide += '<li>' + '<img src="' + user.pic + '" alt ="pic"/>' + '</li>';

        });
        slide += " </ul>";
        $("#container").html('<div class="flipster">' + slide + '</div>');
//        $scope.users = sortedUsers;
//        console.log($scope.users);
        $(function() {
            $(".flipster").flipster({
                itemContainer: 'ul', // Container for the flippin' items.
                itemSelector: 'li', // Selector for children of itemContainer to flip
                style: 'carousel', // Switch between 'coverflow' or 'carousel' display styles
                start: 1, // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

                enableKeyboard: true, // Enable left/right arrow navigation
                enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
                enableTouch: true, // Enable swipe navigation for touch devices

                enableNav: false, // If true, flipster will insert an unordered list of the slides
                enableNavButtons: false, // If true, flipster will insert Previous / Next buttons

                onItemSwitch: function() {
                }, // Callback function when items are switches
            });
        });

    };

    $scope.cities = function(userName) {
        $scope.filterUser = [];
        angular.forEach(FulUsers, function(user, i) {
            if (user.name.indexOf(userName) > -1) {
                $scope.filterUser.push(user);
            }
        });
        return limitToFilter($scope.filterUser, 15);
//    return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK &filter=US&q="+cityName).then(function(response){
//      return limitToFilter(response.data, 15);
//    });
    };

    $scope.selUser = function() {
        var slide = "<ul>";
        $.each($scope.filterUser, function(i, user) {
            slide += '<li>' + '<img src="' + user.pic + '" alt ="pic"/>' + '</li>';

        });
        slide += " </ul>";
        $("#container").html('<div class="flipster">' + slide + '</div>');
        $(function() {
            $(".flipster").flipster({
                itemContainer: 'ul', // Container for the flippin' items.
                itemSelector: 'li', // Selector for children of itemContainer to flip
                style: 'carousel', // Switch between 'coverflow' or 'carousel' display styles
                start: 1, // Starting item. Set to 0 to start at the first, 'center' to start in the middle or the index of the item you want to start with.

                enableKeyboard: true, // Enable left/right arrow navigation
                enableMousewheel: true, // Enable scrollwheel navigation (up = left, down = right)
                enableTouch: true, // Enable swipe navigation for touch devices

                enableNav: false, // If true, flipster will insert an unordered list of the slides
                enableNavButtons: false, // If true, flipster will insert Previous / Next buttons

                onItemSwitch: function() {
                }, // Callback function when items are switches
            });
        });
    };

});

presidentApp.controller('videoCtrl', function($scope) {
    $scope.videoSrcType1 = 'http://video-js.zencoder.com/oceans-clip.mp4';
    $scope.videoSrcType2 = 'http://video-js.zencoder.com/oceans-clip.webm';
    $scope.videoSrcType3 = 'http://video-js.zencoder.com/oceans-clip.ogv';
});

presidentApp.controller('indexCtrl', ['$scope', 'getService', function($scope, getService) {

        $scope.isLoading = true;
        getService.getAjax(function(res) {
            $scope.isLoading = false;
//            alert("finish");
        });
    }]);
