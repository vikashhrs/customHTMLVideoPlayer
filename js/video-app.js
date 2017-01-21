/**
 * Created by vikash on 21-Jan-17.
 */
var app = angular.module('VideoApp',[]);

app.controller('VideoController',['$scope','$window',function ($scope,$window) {
    $scope.message = "Hello, AngularJs";
    $scope.videoDisplay = document.getElementById("VideoElement");
    $scope.videoSource = $window.videoSource;
    $scope.titleDisplay = $window.titleDisplay;
    $scope.videoDescription = $window.videoDescription;
}])