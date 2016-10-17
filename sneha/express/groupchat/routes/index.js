var users = [];

var messages = [];

// function to determine if the user already exits by comparing first names
var user_exist = function(user) {
  var users_count = users.length;
  for (var i = 0; i < users_count; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}

module.exports = function Route(app, server) {
  var io = require("socket.io").listen(server)

  io.sockets.on("connection", function(socket){
    socket.on("page_load", function(data){
      if(user_exist(data.user) === true) {
        socket.emit("existing_user", {error: "This user already exits"})
      } else {
        users.push(data.user);
        socket.emit("load_messages", {current_user: data.user, messages: messages})
      }
    })

    socket.on("new_message", function(data){
      messages.push({name: data.user, message: data.message})
      io.emit("post_new_message", {new_message: data.message, user: data.user})
    })
  })

  app.get("/", function(request, response){
    response.render("index")
  })
}