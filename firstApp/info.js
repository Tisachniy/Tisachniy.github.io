$( document ).ready(function() {
    addInfo();
});

function addInfo(){
var info = "";
$.getJSON('https://ipapi.co/json/', function(data) {
  console.log(JSON.stringify(data, null, 2));
  info = data;
  var ip = info.ip;
  var country = info.country_name;
  var city = info.city;
  var timeZone = info.timezone;
  var latitdue = info.latitude;
  var longitude = info.longitude;
  var provider = info.org;
  var countrycode = info.info.country_calling_code;

  //return info
  $("#ip")[0].textContent = " " + ip;
  $("#country")[0].textContent = " " + country;
  $("#city")[0].textContent = " " + city;
  $("#timezone")[0].textContent = " " + timeZone;
  $("#latitude")[0].textContent = " " + latitdue;
  $("#longitude")[0].textContent = " " +longitude;
  $("#provider")[0].textContent = " " + provider;
  $("#countryCode")[0].textContent = " " + countrycode;

});
}