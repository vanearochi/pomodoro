//cuando click empieza a correr el interval y se muestra el numero en el div
//cuando click empieza a correr el interval y se muestra el numero en el div
$(document).ready(function(){

sgnmin = 60
var date = $.now();
setInterval(function ()          
{
  var date1= $.now();
  if(x===0){
    sgnmin=59
    var x= sgnmin-(Math.floor((date1-date)/1000))
  }//end if
  var x= sgnmin-(Math.floor((date1-date)/1000))
   console.log(x)

  }, 1000);

});// end ready