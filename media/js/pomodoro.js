$(document).ready(function(){
  
  console.log("welcome to pomodoro");
  var startTime;
  var currentTime;
  var requestedLength = 25*60; //25 min, in seconds
  var elapsedTime = 0;
  var timeToDisplay = requestedLength;

  var startPomodoro = function(){
  	console.log("starting pomodoro");
  	startTime = $.now();
  	setInterval(function(){
        update();  
  		display();

  	}, 1000); //end setInterval

  };//end startPomodoro 

  $("#startButton").on("click",startPomodoro);

  var update = function(){
  	currentTime = $.now();
  	elapsedTime = (currentTime-startTime)/1000;
  	timeToDisplay = requestedLength - elapsedTime;//sec 
  	console.log("updating");
  };//end update

 

  var formatTime = function(timeInSec){
  	var roundTime = Math.round(timeInSec);
	var minutes = roundTime/60;
    var timeAsString = minutes;
    if(roundTime%60 === 0){
    	timeAsString= minutes + ":" + "00"
    }
    else if(roundTime%60 != 0 && roundTime%60>=10){
    	timeAsString= Math.floor(minutes) + ":" + roundTime%60
    } 	
    else if(roundTime%60 != 0 && roundTime%60<10){
    	timeAsString = Math.floor(minutes) + ":" + "0" + roundTime%60
    }
	return timeAsString
};//end formatTime


 var display = function(){
	console.log("displaying")
	

	$("#timeDisplay").html(formatTime(timeToDisplay));
  };//enddisplay
  display(); 

});//end ready



//cuando click empieza a correr el interval y se muestra el numero en el div
//cuando click empieza a correr el interval y se muestra el numero en el div
// $(document).ready(function(){

// var minutos= 25;
// var segundos = 60;
// var date = $.now();
// setInterval(function ()          
// {
// 	segundos -= 1

//   if(segundos===00){
//   	minutos-=1
//   	segundos=15
//   	 document.getElementById("session").innerHTML = minutos + ":" + "00";
  	 
//   }

//   else if(segundos<=59 && segundos>=10){
//   console.log(segundos)
//   	document.getElementById("session").innerHTML = minutos + ":" + segundos;

//   }
//   else if(segundos<10){
  
// document.getElementById("session").innerHTML = minutos + ":" + "0" + segundos;
//  }
//   //var date = $.now();
// var date1= $.now();
//  console.log(60-(Math.floor((date1-date)/1000)))

//   }, 1000);

// });