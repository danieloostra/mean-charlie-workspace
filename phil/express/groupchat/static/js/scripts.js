$(document).ready(function() {
    var user = prompt("Please enter your name:");
    if (!user || user.length>10) {
        $('#container').html(`<h1 id="login">Please enter a valid name.</h1>`);
    } else {
        var socket = io.connect();
        var chatbox = $('#chat-wrapper');

        socket.emit('user_connect', { name: user });

        $('#send').click(function() {
            if ($('#message').val()) {
                socket.emit("add_message", { message: $('#message').val() });
            }
            $('#message').val('').focus();
        });

        socket.on('send_full_chat', function(data) {
            chatbox.html(data.chat);
            chatbox.scrollTop(chatbox.prop('scrollHeight'));
        });
        socket.on('send_chat_update', function(data) {
            chatbox.append(data.content);
            chatbox.scrollTop(chatbox.prop('scrollHeight'));
        });
    }
});
