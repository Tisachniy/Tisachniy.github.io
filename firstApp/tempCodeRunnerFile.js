
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

