// $(document).ready(function(){
// 	$("body").on("click", "button", function(){
// 	alert('success');
// 	$("button").css("background-color", "green");
// 	});
// 	$("body").on("mouseenter", "button", function(){
// 		$("button").css("background-color", "red");
// 	});
// 	$("body").on("mouseout", "button", function(){
// 		$("button").css("background-color", "blue");
// 	});
// 	$(document).keypress(function(e){
// 		$("div").append("<button style='background-color:blue; color:white;'>Clickable</button>")
// 	});
// });

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
  	var button = document.getElementsByTagName('button');
	console.log(button[0]);
	button[0].addEventListener("click", whatToDoOnClick);
	// here we define the whatToDoOnClick function
	function whatToDoOnClick() {
	  button[0].style.backgroundColor='red';
	}
  }
};


