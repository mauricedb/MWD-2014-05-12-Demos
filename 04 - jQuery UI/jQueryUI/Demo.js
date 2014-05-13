$(function () {

    //$(".large").click(function () {
    //    //$(this).effect('puff');
    //    $(this).switchClass("large", "xlarge", 5000, "easeInOutQuad");
    //});


    //$(".small").draggable();

    //$(".large").droppable({
    //    drop: function() {
    //        console.log("Something was dropped");
    //    }
    //});

    $(".large").resizable();



    $.fn.makeYellow = function () {
        this.css('background-color', 'yellow');

        $("<p>").text("new data").appendTo(this);

        return this;
    };

    $(".large").makeYellow();
});