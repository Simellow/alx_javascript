// creating our function to validate email
function validateEmail(event) {
    event.preventDefault(); //prevents form submission
    
    // retrieving value inputted 
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    // checking if inputted email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name
    const emailStructure = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    
    // checking if the inputted email matches the 
    if (!emailStructure.test(email)) {
        const errorElement = document.getElementById('error');
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    }
    
    //clearing error if format is correct 
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';
    return true;

}

// Attach the function to the form submission
const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', validateEmail);






// Implement JavaScript validation to check the email format when the form is submitted.

// Retrieve the value entered in the email input field using JavaScript.

// Your JavaScript should be written in a separate file and used as an external script in the HTML code

// Write a function called validateEmail to validate the email based on the email format.

// The validateEmail function should check if the email follows the standard email format, which typically includes an alphanumeric username, followed by the @ symbol, and then the domain name.

// If the email format is correct, allow the form submission.

// If the email format is incorrect, display the error message “Please enter a valid email address.” in the

// element with the id "error".

// Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.