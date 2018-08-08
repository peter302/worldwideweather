//front-end logic
$.(document).ready(function(){
  $.("#sub2").click(function(event){
    event.preventDefault();
    var city=$.("#submit").val()
    if(city !=''){
    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"$appid=5c3e6d8e67832b9a2a8451929f80bda4"
      type:"GET"
      datatype:"jsonp"
      success:function(data){
        var callback=display(data)
        $.("#display").html(callback);
        $.("#submit").val("");

      }
    })
  }
  else{
    $.("#error").html(<div class="alert alert-info alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>City cannot be empty!</strong>
  </div>)

  }
}
}
//end front-end logic
//business logic
function display(data){
  return "<h2>weather condition:"+data.weather[0].main+"</h2>"
         "<h2>weather description:"+data.weather[0].description+"</h2>"
         "<h2>wind speed:"+data.wind.speed+"</h2>"
         "<h2>wind dir:"+data.wind.deg+"</h2>"
         "<h2>temp:"+data.main.temp+"</h2>"
         "<h2>min temp:"+data.main.temp_min+"</h2>"
         "<h2>max temp:"+data.main.temp_max+"</h2>"
         "<h2>sea level"+ data.main.sea_level+"</h2>"
         "<h2>ground level:"+data.main.grnd_level+"</h2>"
         "<h2>humidity:"+data.main.humidity+"</h2>"

}
