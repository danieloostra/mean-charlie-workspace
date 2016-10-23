// console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose') //require() is used to load and cache Javascript modules
var Friend = mongoose.model('Friend'); 
function FriendsController(){
  this.index = function(req,res){   
    //your code here
    Friend.find({}, function(err, results){ //find all friends

      res.json(results); //send a response with JASON
    })
  };
  this.create = function(req,res){
    //your code here
    Friend.create(req.body, function(err, result){ //create a friend 
      if(err){
        console.log(err) //log errors
      }else{
        res.json(result) //send a JSON response with result
      }
    })
  };
  this.update = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){ //find 
      if(err){
        console.log(err);
      }else{
        friend.name = req.body.name; //setting name to request body name
        friend.favoriteLanguage = req.body.favoriteLanguage; 
        friend.save(function(err, updatedFriend){ 
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
   this.delete = function(req,res){
    console.log("HIT")
    Friend.remove({_id:req.params.id}, function(err){
      if(err){
        console.log("ERRRORRR")
      }
      else{
        Friend.find({}, function(err,users){
          if(err){
            console.log('ERROR')
          }
          else{
            res.json(users)
          }
        })
      }
    })
  };
  this.show = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){ //find 
      if(err){
        console.log(err);
      }else{
        res.json(friend);
      }
    })
  };
}
module.exports = new FriendsController(); // xports controller 