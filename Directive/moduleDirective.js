 angular.module('moduleDirective', [])
.directive('colorDirective', function ($interpolate) {
    return function (scope, elem) {
        var exp = $interpolate(elem.html()),
            watchFunc = function () { return exp(scope); };

        scope.$watch(watchFunc, function (html) {
            elem.html(html);
        });
    };
})
     .directive("textSizeSlider", [
         "$document",
         function ($document) {
             setStyleRule = function (selector, rule) {
                 var stylesheet = document.styleSheets[document.styleSheets.length - 1];

                 

                 if (stylesheet.addRule) {
                     stylesheet.addRule(selector, rule);
                 } else if (stylesheet.insertRule) {
                     stylesheet.insertRule(
                         selector + " { " + rule + " }",
                         stylesheet.cssRules.length
                     );
                 }
             };

             var ctrl = [
                 "$scope",
                 "$element",
                 function ($scope, $element) {
                     $scope.position = 0;
                     
                     
                    
                 }
             ];

             return {
                 controller: ctrl,
                 restrict: "E",
                 template:
                     '<div class="text-size-slider"><span class="pointer" style="left:{{position}}px;"><span>{{textSize}}</span></span><span class="small-letter" ng-style="{ fontSize: min + unit }"><small>T</small>T</span> <input type="range" min="{{ min }}" max="{{ max }}" step="{{ step || 0 }}" ng-model="textSize" class="slider" value="{{ value }}" " /> <span class="big-letter" ng-style="{ fontSize: max + unit }"><small>T</small>T</span></div>',
                 scope: {
                     min: "@",
                     max: "@",
                     unit: "@",
                     value: "@",
                     step: "@"
                 },
                 link: function (scope, element, attr) {
                     scope.textSize = scope.value;

                     scope.$watch("textSize", function (size) {
                         $document[0].body.style.fontSize = size + scope.unit;

                        
                     });
                 }
             };
         }
     ]);

