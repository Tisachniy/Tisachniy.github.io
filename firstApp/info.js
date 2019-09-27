var ip;
var access_key = '169083a424e366842cddbe3009ea001d';

$( document ).ready(function() {
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        ip = json.ip;
        console.log(ip);
      }
    );
  });
    //addInfo();
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
  var countrycode = info.country_calling_code;

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