presidentApp.service('getService', function($http) {

    var LocData = $data.define("LocData", {
        compCode: String,
        lastUpdateUser: String,
        lastUpdated: String,
        targetSystem: String,
        validationCode: String,
        validationDesc: String,
        validationField: String,
        validationSeq: String

    });

    this.getAjax = function(callBack) {

        $http({method: 'GET', url: 'http://lifecycle-dev.elasticbeanstalk.com/resource/validation/?validationField=location', type: 'json'}).
                then(function(data, status, headers, config) {
                    console.log(data);

                    LocData.removeAll();
                    angular.forEach(data.data, function(loc, i) {
                        LocData.save(loc);

                    });

                    callBack("DONE");
                });

    };

    this.getDatafromDb = function(callBack) {

        LocData.readAll().then(function(loc) {
            callBack(loc);
        });
    };

});
