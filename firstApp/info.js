
//var access_key = '96c8bea0-25b5-4ebd-a162-3d65cf6430e1';  
$( document ).ready(function() {
  getIp();
});

// $.ajax({
//   type: "GET",
//   url: "https://ipfind.com/?ip="+ip+"&auth="+access_key,
//   data: "data",
//   dataType: "dataType",
//   success: function (response) {
//     console.log(response);
//   }
// });


function getIp(){
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        var ip;
        ip = json.ip;
        console.log(ip);
        return ip;
        addInfo();
        
      }
    );
  });
}

function addInfo(){
var info = "";
$.ajax({
  url: `https://api.ipfind.com/?ip=${ip}&auth=96c8bea0-25b5-4ebd-a162-3d65cf6430e1`,
  success: function(data){
    console.log(data);
  }
});
// $("#flag").attr("src", "https://api.ipfind.com/flag?ip="+ip+"&auth=96c8bea0-25b5-4ebd-a162-3d65cf6430e1");
// $.getJSON('https://ipfind.com/?ip='+ip+'&auth=96c8bea0-25b5-4ebd-a162-3d65cf6430e1', function(data) {
//   console.log(JSON.stringify(data, null, 2));
//   info = data;
//   var ip = info.ip_address;
//   var country = info.country;
//   var city = info.city;
//   var timeZone = info.timezone;
//   var latitdue = info.latitude;
//   var longitude = info.longitude;
//   var countrycode;

//   //return info
//   $("#ip")[0].textContent = " " + ip;
//   $("#country")[0].textContent = " " + country;
//   $("#city")[0].textContent = " " + city;
//   $("#timezone")[0].textContent = " " + timeZone;
//   $("#latitude")[0].textContent = " " + latitdue;
//   $("#longitude")[0].textContent = " " +longitude;
//   $("#provider")[0].textContent = " " + provider;
//   $("#countryCode")[0].textContent = " " + countrycode;
//   


// });
}