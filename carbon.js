function fore(){
  navigator.geolocation.getCurrentPosition(location);
  function location(position){
    var longitude=position.coords.longitude;
    var latitude=position.coords.latitude;
    $("#location").html(longitude +","+ latitude);
    $.ajax({
      url:"https://samples.openweathermap.org/pollution/v1/"+latitude+","+longitude+"2017-12-25T01:04:08Z.json?"+"APPID=5c3e6d8e67832b9a2a8451929f80bda4",
      type:"GET",
      dataType:"jsonp",
      success:function(result){
          var carbon=show(result);
          $("#minutely").html(carbon)


        }

      })
    }
  }
fore();
function show(result){
  return "<h2 style='font-size:20px;'>longtude:"+result.location.lon+"&deg</h2>"+"<h2 style='font-size:20px;'>latitude:"+data.coords.lat+"&deg</h2>"+
         "<h2 style='font-size:20px;'>weather condition:"+result.data[0].value +"</h2>"+
         "<h2 style='font-size:20px;'>weather condition:"+result.data[0].pressure +"</h2>"
}
