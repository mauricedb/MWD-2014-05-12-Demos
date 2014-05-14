
var app = angular.module("myApp", ["ngResource"]);

app.factory("Books", function ($resource) {
    return $resource("/api/books/:id");
});

//app.controller("booksCtrl", function ($scope, $http) {
//    $scope.books = [
//    ];


//    $http.get("/api/books").then(function (e) {
//        console.log(e);

//        $scope.books = e.data;
//    });


//    $scope.addBook = function() {
//        var newBook = { title: "The new book", author:"Me" };
//        $http.post("/api/books", newBook);


//    }
//});


app.controller("booksCtrl", function ($scope, Books) {
    $scope.books = Books.query();
    console.log($scope.books.length);
    $scope.books.$promise.then(function() {
        console.log($scope.books.length);
    });

    $scope.addBook = function () {
        var newBook = { title: "The new book", author: "Me" };
        Books.save(newBook);
    };
});