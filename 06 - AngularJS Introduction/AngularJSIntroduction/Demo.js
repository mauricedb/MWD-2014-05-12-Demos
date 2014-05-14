var other = angular.module("otherModule", []);

other.service("mySvc", function () {
});




var module = angular.module("myApp", ["otherModule"]);


module.controller("MyFirstController", ["$scope", "mySvc", function ($scope, mySvc) {

    console.log("MyFirstController");

    var model = {
        name: "Maurice",
        books: [
            { title: "Book 1" },
            { title: "Book 2" },
            { title: "Book 3" },
            { title: "Book 4" }
        ],
        now: new Date(),
        number: 1.23
    };

    $scope.model = model;

    $scope.showModel = function () {
        alert(model.name);
    };

    $scope.addBook = function () {
        model.books.push({ title: "A new book" });
    };
}]);

