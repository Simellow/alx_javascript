document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.getElementById('submitForm');

    submitForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault(); 

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

    
        if (nameInput.value.trim() === '') {
            displayErrorMessage('Please fill in the Name field.');
            return;
        }

        if (emailInput.value.trim() === '') {
            displayErrorMessage('Please fill in the Email field.');
            return;
        }


        displaySuccessMessage('Form submitted successfully!');
    }

    function displayErrorMessage(message) {
        const errorElement = document.createElement('p');
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        submitForm.appendChild(errorElement);
    }

    function displaySuccessMessage(message) {
        const successElement = document.createElement('p');
        successElement.textContent = message;
        successElement.style.color = 'green';
        submitForm.appendChild(successElement);
    }
});
