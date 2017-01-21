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
    $scope.videoPlaying = false;
    $scope.currentTime;
    $scope.totalTime;



    $scope.initPlayer = function() {
        $scope.currentTime = 0;
        $scope.totalTime = 0;
        $scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
        $scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true);
    }

    $scope.updateTime = function(e) {
        $scope.currentTime = e.target.currentTime;
        $scope.updateLayout();
    }

    $scope.updateData = function(e) {
        $scope.totalTime = e.target.duration;
    }

    $scope.updateLayout = function() {

        if(!$scope.$$phase) {
            $scope.$apply();
        }
    }


    $scope.togglePlay = function() {
        if($scope.videoDisplay.paused){
            $scope.videoDisplay.play();
            $scope.videoPlaying = true;
            $('#playBtn').children("span").toggleClass("glyphicon-play", false);
            $('#playBtn').children("span").toggleClass("glyphicon-pause", true);
        }else{
            $scope.videoDisplay.pause();
            $scope.videoPlaying = false;
            $('#playBtn').children("span").toggleClass("glyphicon-play", true);
            $('#playBtn').children("span").toggleClass("glyphicon-pause", false);
        }
    }

    $scope.toggleMute = function() {
        if($scope.videoDisplay.volume == 0.0){
            $scope.videoDisplay.volume = 1.0;
            $('#muteBtn').children("span").toggleClass("glyphicon-volume-up", true);
            $('#muteBtn').children("span").toggleClass("glyphicon-volume-off", false);
        }else{
            $scope.videoDisplay.volume = 0.0;
            $('#muteBtn').children("span").toggleClass("glyphicon-volume-up", false);
            $('#muteBtn').children("span").toggleClass("glyphicon-volume-off", true);
        }
    }


    $scope.initPlayer();

}])