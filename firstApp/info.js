$( document ).ready(function() {
    addInfo();
});

function addInfo(){
var info = "";
$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
  info = data;
  var ip = info.geoplugin_request;
  var country = info.geoplugin_countryName;
  var city = info.geoplugin_city;
  var timeZone = info.geoplugin_timezone;
  var latitdue = info.geoplugin_latitude;
  var longitude = info.geoplugin_longitude;
  //return info
  $("#ip")[0].textContent = " " + ip;
  $("#country")[0].textContent = " " + country;
  $("#city")[0].textContent = " " + city;
  $("#timezone")[0].textContent = " " + timeZone;
  $("#latitude")[0].textContent = " " + latitdue;
  $("#longitude")[0].textContent = " " +longitude;

});
}