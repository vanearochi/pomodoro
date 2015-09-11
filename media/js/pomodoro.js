$(document).ready(function(){
  
  console.log("welcome to pomodoro");
  var startTime;
  var currentTime;
  var requestedLength = 25*60; //25 min, in seconds
  var elapsedTime = 0;
  var timeToDisplay = requestedLength;
  var timerId;
  var timerState = "first run";

  var onTimeout = function(){
        update();  
  		display();
  	}

  var startPomodoro = function(){
  	console.log("starting pomodoro");
  	startTime = $.now();
  	timerState = "running";
  	timerId = setInterval(onTimeout	, 1000); //end setInterval
  	timeToDisplay = requestedLength
  	display();
  };//end startPomodoro 

  

  var update = function(){
  	currentTime = $.now();
  	elapsedTime = (currentTime-startTime)/1000;
  	timeToDisplay = requestedLength - elapsedTime;//sec 
  	if(timeToDisplay<=0){
 
  		stopInterval(timerId);
  		timerState = "stopped";
  		timeToDisplay = 0;

  	}//end if update
  	console.log(timeToDisplay);
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
	if(timerState==="stopped"){
		$("#message").html("We're done in here");
		//$("#timeDisplay").html("25:00");
	}//end if display	
	else if(timerState==="running"){
		$("#message").html("running....");
	}
	else {
		$("#message").html("");
	}
    
	$("#timeDisplay").html(formatTime(timeToDisplay));
	//end else display
  };//enddisplay
  

  var stopInterval = function(id){
  	console.log("Stop it Nooooow ")

  	clearInterval(id);
  };//end stopInterval

  
  	
  var changeRequestedTime = function(numero){
  	console.log("changing time");
  	if(requestedLength<=0 && numero<=0 ){
  		requestedLength = 0;
  		timeToDisplay = requestedLength;
  		display();
  	}
  	else{
  	requestedLength += numero;
  	timeToDisplay += numero;
    display()
    //currentTime += numero

  	}
  };//end changeRequestedLine



  var setupUI = function(){
  	$("#startButton").on("click",startPomodoro);
  	$("#lessmin").on("click", function(){changeRequestedTime(-60)});
  	$("#moremin").on("click", function(){changeRequestedTime(60)});
  
  	
  }

  setupUI();
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