$(document).ready(function() {
    var user = prompt("Please enter your name:");
    if (!user) {
        $('#container').html(`<h1 id="login">Please enter a valid name.</h1>`);
    } else {
        var socket = io.connect();

        socket.emit('user_connect', { name: user });
        $('#send').click(function() {
            if ($('#message').val()) {
                socket.emit("add_message", { message: $('#message').val() });
            }
            $('#message').val('');
        });

        socket.on('send_full_chat', function(data) {
            $('#chat-wrapper').html(data.chat);
        });
        socket.on('send_chat_update', function(data) {
            $('#chat-wrapper').append(data.content);
        });
    }
});
