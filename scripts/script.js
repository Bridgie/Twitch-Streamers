$(document).ready(function(){
 var arr = ["Nightblue3","EdbergTv", "FreeCodeCamp","Sovietwomble"]
 for ( var a = 0; a < arr.length; a++){
   if(arr[a] == "Nightblue3"){
      $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+ arr[a] + "?callback=?", function(data){
        if(data.stream === null){
           $(".nightblue3").html("is <a href=https://www.twitch.tv/nightblue3> Offline </a>")
           } else {
             $(".nightblue3").html("is streaming " + "<a href=https://www.twitch.tv/nightblue3>" + data.stream.game + "</a>")
           }
      });
      } else if (arr[a] == "EdbergTv"){
        $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+ arr[a] + "?callback=?", function(data){
                if (data.stream === null){
            $(".edbergtv").html("is <a href=https://www.twitch.tv/EdbergTV>> Offline </a>")
                } else {
           $(".edbergtv").html("is streaming " +"<a href=https://www.twitch.tv/EdbergTV>" + data.stream.game + "</a>")       
                }
        });
                 } else if (arr[a] == "Sovietwomble"){
                            $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+ arr[a] + "?callback=?", function(data){
                              if (data.stream === null){
                                $(".freecodecamp").html("is <a href=https://www.twitch.tv/sovietwomble> Offline </a>")
                              } else {
                                $(".freecodecamp").html("is streaming " + "<a href=https://www.twitch.tv/sovietwomble>" +data.stream.game + "</a>")
                              }
                            })
                            } else if (arr[a] == "FreeCodeCamp"){
                              $.getJSON("https://wind-bow.hyperdev.space/twitch-api/streams/"+ arr[a] + "?callback=?", function(data){
                                if (data.stream === null){
                                  $(".sovietwomble").html("is <a href=https://www.twitch.tv/freecodecamp>Offline</a>")
                                } else{
                                  $(".sovietwomble").html("is streaming " + "<a href=https://www.twitch.tv/freecodecamp" + data.stream.game + "</a>")
                                }
                              })
                            } 
 } // for 
                  }); //document ready