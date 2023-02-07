// Adding click event listen listener to all buttons
$(".btn").on("click", function() {
    
    event.preventDefault();

    // $(document).ready(function() {
    //     $("#cityWeather").change(function() {
    //       var city = $(this).val();
    //       getWeather(city);
    //     });
    //   });
  
    
    // Constructing a queryURL
     const queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.5&appid=84b293b71737706d0e24f523b2597d64";

let city = "city"
    let temperature = "temp";
    let wind = "wind";
    let humidity = "humidity";
    $("#temperature").text(temperature);
    $("#wind").text(wind);
    $("#humidity").text(humidity);
    // $("#city").text(data.city.country);
    

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response);
    })

    for (i=0;i<5;i++){
        document.getElementById("#icon" + (i+1)).src = "http://openweathermap.org/img/wn/" + DataTransfer.list[i].weather[0].icon+".png";
    }
});