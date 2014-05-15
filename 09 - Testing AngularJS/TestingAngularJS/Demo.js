var app = angular.module("theApp", []);

app.controller("mainCtrl", function ($scope) {
    $scope.msg = "Hello";
});

app.controller("ajaxCtrl", function ($scope, $http) {
    $scope.msg = "Loading";

    $http.get("/api/message/1").then(function(e) {
        $scope.msg = e.data;
    }, function() {
        $scope.msg = "Oops";
    });
});


app.directive("myDirective", function() {
    return {
        link: function(scope, element) {
            element.bind("click", function() {
                scope.$apply(function() {
                    scope.msg = "I was clicked";
                });
            });
        }
    };
});

