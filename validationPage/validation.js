var validationError = "";
function validate(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if(login == "devtest" || password == "devtest"){
        alert("succes");
        if(validationError){
            $("#validError").hide();
        }
        location.href = "/index/main.html";
    }else{
        var validationForm = document.getElementsByClassName("form-group")[0];
        $(validationForm).prepend("<h2 id='validError'>Invalid Login or Password</h2>");
        validationError = true;
        return validationError;
    }

}