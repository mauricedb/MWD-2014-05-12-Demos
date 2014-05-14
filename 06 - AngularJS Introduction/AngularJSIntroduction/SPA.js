var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/list", {
        controller: "ListCtrl",
        template: "The list <button ng-click='go()'>CLick me </button>"
    });

    $routeProvider.when("/details", {
        controller: "DetailsCtrl",
        template: "The details"
    });

    $routeProvider.otherwise({ redirectTo: "/list" });
});


app.controller("ListCtrl", function($scope, $location) {

    $scope.go = function() {
        $location.path("/details");
    };
})

app.controller("DetailsCtrl", function () {

  
})

