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
        // if(validationError){
        //     $("#validError").hide();
        // }
        // var validationForm = document.getElementsByClassName("form-group")[0];
        // $(validationForm).prepend("<h2 id='validError'>Invalid Login or Password</h2>");
        // validationError = true;
        // return validationError;
        Swal.fire(
            'Oops',
            'Invalid Login or Password',
            'error'
          );
    }

}

var input = document.getElementById("password");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("validateBtn").click();
  }
});

var inputSecond = document.getElementById("login");

inputSecond.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("validateBtn").click();
  }
});
