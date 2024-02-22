//creating a function to validate passoword

function validatePassword(event) {
    event.preventDefault();//...prevents the default in this case form submission causing a page auto reload
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
  
    // Checking for different criterias:

    //password must be at least 8 characters long
    const isLengthValid = password.length >= 8;
    
    //has at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    //has at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    //has at least one numeric digit
    const hasDigit = /\d/.test(password);

    //has at least one special character 
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    
  
    // Display error message if any of the above criteria are not met:
    const errorElement = document.getElementById('error');
    if (!isLengthValid || !hasUppercase || !hasLowercase || !hasDigit || !hasSpecialChar) {
      errorElement.textContent = 'Password must meet all criteria.';
      return false; 
    }
  
    // If the password meets all the criteria, allow the form submission:
    errorElement.textContent = '';
    return true; 
}

// Attaching our function to the form submission
const passwordForm = document.getElementById('passwordForm');
passwordForm.addEventListener('submit', validatePassword);

