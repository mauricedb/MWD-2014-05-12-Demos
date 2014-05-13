
$(function () {

    //$("li").css("color", "green");


    $("#root > li:gt(3)").css("color", "green");

    $("ul> ul > li")
        .css('background-color', 'red')
        .text('Demo')
        .css('color', 'yellow');


    $("<li>").text("new element").appendTo("#root");


    //$("#btn").click(function () {

    //    //$("#root").slideToggle(5000);
    //    $("#root").toggleClass("demo");
    //});

    $("#btn").bind('click', function () {
        console.log("button clicked");
        return false;
    });

    $("body").bind('click', function () {
        console.log("body clicked");
    });

    $("ul").css("display", "block");

    $("#load").click(function () {
        $("#placeholder").load("/NestedPage.html p:eq(1)");
    });
});