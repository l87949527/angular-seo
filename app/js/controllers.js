'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.expanders = [
            {
                title: "click one",
                text: "text one \n test one"
            },
            {
                title: 'click two',
                text: 'text two \n test two'
            },
            {
                title: 'click three',
                text: 'text three \n three three'
            }
        ]
        $scope.title = "Click me to expand";
        $scope.text = "Hi there folks, I am the content that was hidden but is now shown.";

        $scope.callMe = function callMe(message) {
            alert(message);
        }
    }])
    .controller('MyCtrl2', [function () {

    }]);