//welcome function takes two arguments: firstName and lastName
function welcome (firstName, lastName){
    const fullName = `${firstName} ${lastName}`; //creating a fullName variable containing the first name and last name.
    function displayFullName (){
        alert(`Welcome ${fullName}!`); // inner function called displayFullName that displays an alert with the welcome message containing the full name.
    }
    displayFullName() //calling the displayFullName function at the end of the welcome function
} 