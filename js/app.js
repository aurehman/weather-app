var App = angular.module('weatherApp', []);
App.controller('weatherAppController', function($scope, $http) {
	$scope.submit = function formSubmitted (form) {

		var units = $scope.baseUnit;
		if ($scope.firstCity) 

{
  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ $scope.firstCity +'&mode=json&units='+units+'&cnt=4')
       .then(function(res){
          $scope.weatherRes = res.data;
          if (!res.data.name)
          {
          	alert ('Please enter valid city name');
          	$scope.view1 = false;
          	$scope.convBtn = false;
          }

          else {
          	$scope.view1 = true;
          	$scope.convBtn = true;
          }

            if (res.data) {
               if (res.data.main) {
               var currentTemp =  res.data.main.temp;
               var minTemp = res.data.main.temp_min;
               var maxTemp = res.data.main.temp_max;

               $scope.cityName = res.data.name + ", " + res.data.sys.country;    
               $scope.currentTemp = currentTemp;
               $scope.minTemp = minTemp;
               $scope.maxTemp = maxTemp;
               //$scope.cityName = res.data.main.name +", "+ res.data.main.country;
               }
                
            }
        });

        }// if first city

        if ($scope.secondCity)
        {
        	 $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ $scope.secondCity +'&mode=json&units='+units+'&cnt=4')
       .then(function(res){
          $scope.weatherRes = res.data;
          if (!res.data.name)
          {
          	alert ('Please enter valid city name');
          	$scope.view2 = false;
          }

          else {
          	$scope.view2 = true;
          }

            if (res.data) {
               if (res.data.main) {

               $scope.secondcityName = res.data.name + ", " + res.data.sys.country;    
               $scope.secondcurrentTemp = res.data.main.temp ;
               $scope.secondminTemp = res.data.main.temp_min ;
               $scope.secondmaxTemp = res.data.main.temp_max ;
               //$scope.cityName = res.data.main.name +", "+ res.data.main.country;
               }
                
            }
        });

        }; // if second city

        if ($scope.thirdCity) {

        	        	 $http.get('http://api.openweathermap.org/data/2.5/weather?q='+ $scope.thirdCity +'&mode=json&units='+units+'&cnt=4')
       .then(function(res){
          $scope.weatherRes = res.data;
          if (!res.data.name)
          {
          	alert ('Please enter valid city name');
          	$scope.view3 = false;
          }

          else {
          	$scope.view3 = true;
          }

            if (res.data) {
               if (res.data.main) {

               $scope.thirdcityName = res.data.name + ", " + res.data.sys.country;    
               $scope.thirdcurrentTemp = res.data.main.temp ;
               $scope.thirdminTemp = res.data.main.temp_min ;
               $scope.thirdmaxTemp = res.data.main.temp_max ;
               //$scope.cityName = res.data.main.name +", "+ res.data.main.country;
               }
                
            }
        });

        }; // if third city



    }; //func submit form end

}); // controller end



