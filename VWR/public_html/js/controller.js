// var presidentAppCtrl = angular.module('presidentApp',[]);
presidentApp.controller('homeCtrl', function($scope, $http) {

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

alert("s");
/*$data.Entity.extend("$org.types.LocData", {
    compCode: { type: "int"},
    lastUpdateUser: { type: "string", required: true },
    lastUpdated: { type: "string" },
     targetSystem: { type: "string" },
      validationCode: { type: "string" },
       validationDesc: { type: "string" },
        validationField: { type: "string" },
         validationSeq: { type: "string" }
});

$data.EntityContext.extend("$org.types.OrgContext", {
    LocData: { type: $data.EntitySet, elementType: $org.types.LocData }
   
});

$org.context = new $org.types.OrgContext({ name: "webSql", databaseName: "OrgDB" });
$org.context.onReady(function() {
  //manage data only after the context has been initialized
 });
*/

    $http({method: 'GET', url: 'http://lifecycle-dev.elasticbeanstalk.com/resource/validation/?validationField=location', type:'json'}).
            then(function(data, status, headers, config) {
                console.log(data);
                // $scope.location = data;
               
                LocData.removeAll();
                angular.forEach(data.data,function(loc,i){
                	 LocData.save(loc);

              /*  	 var emp = new $org.types.LocData(loc);
					$org.context.LocData.add(emp);
					$org.context.saveChanges();*/




                });

                		 LocData.readAll().then(function (loc) {
				            $scope.$apply(function () {
				                $scope.location = loc;
				            });
      					  });
               

             

               


            });



          /*  $.get("http://lifecycle-dev.elasticbeanstalk.com/resource/validation/?validationField=location",function(data){

            	console.log(data);
            },"json");*/

	

});

