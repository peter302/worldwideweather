//front-end logic
$(document).ready(function(){
  $("#sub2").click(function(event){
    event.preventDefault();
    var city=$("#submit").val()
    $.ajax({
      url:'http://api.openweathermap.org/data/2.5/weather?q='+city+ "&units=metric"+"&APPID=5c3e6d8e67832b9a2a8451929f80bda4",
      type:"GET",
      dataType:"jsonp",
      success:function(data){
        var callback=display(data);
        $("#display").html(callback)
        $("#submit").val("")

      }
    })
})
})
//end front-end logic
//business logic
function display(data){
  return "<h2>weather condition:"+data.weather[0].main+"</h2>"+
         "<h2>weather description:"+data.weather[0].description+"</h2>"
}
