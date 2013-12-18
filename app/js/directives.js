'use strict';

/* Directives */


var appDirective = angular.module('myApp.directives', []);


appDirective.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]);


appDirective.directive('aGreatEye', function () {
    return {
        transclude: true,
        template: '<h1>God! You are <span ng-transclude></span> times</h1>'
    };
});


appDirective.directive('myComment', function () {
    return {
        restrict: 'AE',
        replace:  false,
        templateUrl: '/app/partials/template.html'
    };
});

appDirective.directive('expander',[function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
            '<div class="title" ng-click="toggle()">{{title}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>'+
            '</div>',
        link: function(scope, element, attrs){
            scope.showMe = false;

            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
            }
        }
    }
}]);
