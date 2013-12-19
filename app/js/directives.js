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

appDirective.directive('accordion',[function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function(){
            var expanders = [];
            this.gotOpened = function(selectedExpender){
                angular.forEach(expanders,function(expander){
                    if(selectedExpender != expander){
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function(expander){
                expanders.push(expander);
            }
        }
    }
}]);

appDirective.directive('expander',[function(){
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: function(){
            this.addExpander = function(){

            }
        },
        require: '?^accordion',
        scope: {
            title: '=expanderTitle',
            call : '&'
        },
        template: '<div>' +
            '<div class="title" ng-click="toggle()">{{title}}</div>' +
            '<div class="body" ng-show="showMe" ng-transclude></div>'+
            '<input ng-model="value"/>'+
            '<button ng-click="call({message:value})">call me</button>' +
            '</div>',
        link: function(scope, element, attrs, accordionController){
            scope.showMe = false;
            accordionController.addExpander(scope);

            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
}]);
