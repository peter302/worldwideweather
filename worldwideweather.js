$(document).ready(function(){
  $("#error").hide();
  $("#sub2").click(function(event){
    event.preventDefault();
    var city=$("#submit").val()
    if(city !=''){
    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather?q='+city+ "&units=metric"+"&APPID=5c3e6d8e67832b9a2a8451929f80bda4",
      type:"GET",
      dataType:"jsonp",
      success:function(data){
        var callback=display(data);
        $("#display").html(callback)
        $("#submit").val("")

      }
    })
  }else{
    $("#error").toggle();
  }
})
})
//end front-end logic
//business logic
function display(data){
  return "<h2>name:"+data.name+" "+data.sys.country+"</h2>"+
         "<h2>longtude:"+data.coord.lon+"&deg</h2>"+
         "<h2>latitude:"+data.coord.lat+"&deg</h2>"+
         "<h2>weather condition:"+data.weather[0].main+"</h2>"+
         "<h2>weather description:<img src='http://openweathermap.org/img/w/'+data.weather[0].icon+'&.png'>"+data.weather[0].description+"</h2>"+
         "<h2>temp:"+data.main.temp+"&deg C</h2>"+
         "<h2>temp_min:"+data.main.temp_min+"&deg C</h2>"+
         "<h2>temp_max"+data.main.temp_max+"&deg C</h2>"+
         "<h2>humidity:"+data.main.humidity+"%</h2>"+
         "<h2>pressure:"+data.main.pressure+"hpa</h2>"+
         "<h2>sea_level:"+data.main.sea_level+"hpa</h2>"+
         "<h2>grnd_level:"+data.main.grnd_level+"hpa</h2>"+
         "<h2>wind speed:"+data.wind.speed+"m/s</h2>"+
         "<h2>wind direction:"+data.wind.deg+"&deg</h2>"+
         "<h2>clouds:"+data.clouds.all+"%</h2>"

}
