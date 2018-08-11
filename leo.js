function weather(){
  navigator.geolocation.getCurrentPosition(location);
  function location(position){
    var longitude=position.coords.longitude;
    var latitude=position.coords.latitude;
    $("#location").html(longitude +","+ latitude);
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric"+"&APPID=5c3e6d8e67832b9a2a8451929f80bda4",
      type:"GET",
      dataType:"jsonp",
      success:function(data){
          var vip=display(data);
          $("#temp").html(vip)


        }

      })
    }
  $("#temp").html("loading.....")
  }
weather();
function display(data){
  return "<h2 style='font-size:10px'>current weather for:"+data.name+" "+data.sys.country+"</h2>"+
         "<h2 style='font-size:10px'>longtude:"+data.coord.lon+"&deg</h2>"+
         "<h2 style='font-size:10px'>latitude:"+data.coord.lat+"&deg</h2>"+
         "<h2 style='font-size:10px'>weather condition:"+data.weather[0].main+"</h2>"+
         "<h2 style='font-size:10px'>weather description:"+data.weather[0].description+"</h2>"+
         "<h2 style='font-size:10px'>temp:"+data.main.temp+"&deg C</h2>"+
         "<h2 style='font-size:10px'>temp_min:"+data.main.temp_min+"&deg C</h2>"+
         "<h2 style='font-size:10px'>temp_max"+data.main.temp_max+"&deg C</h2>"+
         "<h2 style='font-size:10px'>humidity:"+data.main.humidity+"%</h2>"+
         "<h2 style='font-size:10px'>pressure:"+data.main.pressure+"hpa</h2>"+
         "<h2 style='font-size:10px'>sea_level:"+data.main.sea_level+"hpa</h2>"+
         "<h2 style='font-size:10px'>grnd_level:"+data.main.grnd_level+"hpa</h2>"+
         "<h2 style='font-size:10px'>wind speed:"+data.wind.speed+"m/s</h2>"+
         "<h2 style='font-size:10px'>wind direction:"+data.wind.deg+"&deg</h2>"+
         "<h2 style='font-size:10px'>clouds:"+data.clouds.all+"%</h2>"

}
