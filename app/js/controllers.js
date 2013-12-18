'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
        $scope.titile = "Click me to expand";
        $scope.text = "Hi there folks, I am the content that was hidden but is now shown.";
  }])
  .controller('MyCtrl2', [function() {

  }]);