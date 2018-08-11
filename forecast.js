function forecast(){
  navigator.geolocation.getCurrentPosition(location);
  function location(position){
    var longitude=position.coords.longitude;
    var latitude=position.coords.latitude;
    $("#location").html(longitude +","+ latitude);
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric"+"&APPID=5c3e6d8e67832b9a2a8451929f80bda4",
      type:"GET",
      dataType:"jsonp",
      success:function(data){
          var imp=display(data);
          $("#anger").html(imp)


        }

      })
    }
  $("#anger").html("loading.....")
  }
forecast();
function display(data){
  return "<h2>Thank you for your permission!</h2>"+
          "<h2>Our system has determined that"+" "+data.name+" "+data.sys.country+" "+"is your nearest weather station</h2>"+
         "<h2 style='font-size:15px'>current weather for:"+data.name+" "+data.sys.country+"</h2>"+
         "<h2 style='font-size:15px'>longtude:"+data.coord.lon+"&deg</h2>"+
         "<h2 style='font-size:15px'>latitude:"+data.coord.lat+"&deg</h2>"+
         "<h2 style='font-size:15px'>weather condition:"+data.weather[0].main+"</h2>"+
         "<h2 style='font-size:15px'>weather description:"+data.weather[0].description+"</h2>"+
         "<h2 style='font-size:15px'>temp:"+data.main.temp+"&deg C</h2>"+
         "<h2 style='font-size:15px'>temp_min:"+data.main.temp_min+"&deg C</h2>"+
         "<h2 style='font-size:15px'>temp_max"+data.main.temp_max+"&deg C</h2>"+
         "<h2 style='font-size:15px'>humidity:"+data.main.humidity+"%</h2>"+
         "<h2 style='font-size:15px'>pressure:"+data.main.pressure+"hpa</h2>"+
         "<h2 style='font-size:15px'>sea_level pressure:"+data.main.sea_level+"hpa</h2>"+
         "<h2 style='font-size:15px'>grnd_level pressure:"+data.main.grnd_level+"hpa</h2>"+
         "<h2 style='font-size:15px'>wind speed:"+data.wind.speed+"m/s</h2>"+
         "<h2 style='font-size:15px'>wind direction:"+data.wind.deg+"&deg</h2>"+
         "<h2 style='font-size:15px'>clouds:"+data.clouds.all+"%</h2>"

}
