var validationError = "";
function validate(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if(login == "devtest" || password == "devtest"){
        Swal.fire({
            title: 'Correct data',
            text: "enter tisachniy.github.io?",
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, go!'
          }).then((result) => {
            if (result.value) {
                location.href = "/index/main.html";
            }
          });

        if(validationError){
            $("#validError").hide();
        }
        
    }else{
        var validationForm = document.getElementsByClassName("form-group")[0];
        $(validationForm).prepend("<h2 id='validError'>Invalid Login or Password</h2>");
        validationError = true;
        return validationError;
    }

}