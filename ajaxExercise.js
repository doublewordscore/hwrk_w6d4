$.ajax({
  type: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b",
  success(data) {
    console.log("Weather found!")
    console.log(data);
  },
  error() {
    console.error("Error!");
  },
});
