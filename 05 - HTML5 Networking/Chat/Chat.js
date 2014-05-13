$(function () {

    $.connection.hub.start();

    var chatHub = $.connection.chatHub;

    $("#send").click(function() {
        var msg = $("#msg").val();
        chatHub.server.sendMessage(msg);
    });

    chatHub.client.broadcast = function(e) {
        $("<li>").text(e).appendTo("#msgs");
    };
});