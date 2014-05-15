describe("Our app", function () {

    it("should pass", function () {

        expect(1).toBe(1);
    });

});


describe("TheApp", function () {
    var scope;

    beforeEach(module("theApp"));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        var ctrl = $controller("mainCtrl", { $scope: scope });
    }));

    it("should add a message to the scope", function () {
        expect(scope.msg).toBe("Hello");
    });
})


describe("TheApp with AJAX", function () {
    var scope, httpBackend;

    beforeEach(module("theApp"));

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        var ctrl = $controller("ajaxCtrl", { $scope: scope });
    }));

    it("should add a message to the scope", function () {
        httpBackend.expect("GET", "/api/message/1").respond("AJAX result");
        httpBackend.flush();
        expect(scope.msg).toBe("AJAX result");
    });

    it("should add a fail message to the scope", function () {
        httpBackend.expect("GET", "/api/message/1").respond(500);
        httpBackend.flush();
        expect(scope.msg).toBe("Oops");
    });
})