var app = angular.module("theApp", []);

app.controller("mainCtrl", function ($scope) {
    $scope.msg = "Hello";
});

app.directive("rbsAlertOnClick", function ($http) {
    var ddo = {
        restrict: "AE",
        scope: {
            myMsg: "=",
            myNow: "="
        },
        require:"ngModel",
        link: function(scope, element, attrs, ngModel) {
            element.bind("click", function () {
                scope.$apply(function() {
                    scope.myNow = new Date().toLocaleTimeString();

                    ngModel.$setViewValue("");
                });
                alert("I was clicked from " + scope.$id + " " + scope.myMsg);
            });
        }

    };

    return ddo;
});