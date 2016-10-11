module.exports = function (){
  return {
    add: function(num1, num2) { 
         var total = num1 + num2;
         return total;  
       },
    multiply: function(num1, num2) {
         var total = num1*num2;
         return total; 
       },
    square: function(num) {
      var total = num*num; 
      return total; 
    },

    random: function(num1, num2) {
      return Math.floor(Math.random() * 35) + 1;
    }
  };
}