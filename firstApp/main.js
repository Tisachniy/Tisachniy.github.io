// TODO 1. Create an associative array containing a description of the person. 
//Set the fields: name, age, gender, individual number. Fill the array. Print it to the console.

var human = {
    "Age": 30,
    "Name": "Alex",
    "Sex": "Male",
    "id": 1
};


// TODO 2. Add to the array a method that will calculate the person's birth year based on his age and return it.

    var actualDate = new Date().getFullYear();
    console.log(actualDate);
    var yearOfBirthday =(actualDate - human.Age) ;
    console.log(yearOfBirthday);


human["Year of birth"] = yearOfBirthday;
console.log(human);
console.log(human["Year of birth"]);


// TODO 3. Create an associative array property mas which contains an array of numbers (of any number)
//  Add a method that displays the sum of the numbers contained in the mas.

var mas = [5, 6, 34, 12, 45];	

console.log(mas);

for (var key in mas){
    console.log(key + " "+ mas[key]);
}

// TODO 4. Add visual table fill feature

function addPastedToTable() {
    
    var userName = $("#checkName");
    var userId = $("#checkId");
    var userScore = $("#checkScore");
    var table = $("#tableBody");
    if (userName[0].value.length != 0 && userId[0].value.length != 0 && userScore[0].value.length != 0  ) {
    $(table).append( "<tr><td scope='row'>"+userName[0].value+"</td><td>"+userId[0].value+"</td><td>"+userScore[0].value+ "</td></tr>" );

    }
    // else if (userName[0].value.length != 0) {
    //     alert("oops please add Name");
    // }
    // else if (userId[0].value.length != 0){
    //     alert("oops please add Id");
    // }
    // else if (userScore[0].value.length != 0){
    //     alert("oops please add Score");
    else{
        alert("error 40000004");
    }
    
  }






// TODO 5. Add database synchronization and work with it


