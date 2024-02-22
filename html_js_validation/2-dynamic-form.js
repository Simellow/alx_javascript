document.addEventListener('DOMContentLoaded', function () {
    const numFieldsSelect = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');

    numFieldsSelect.addEventListener('change', generateInputFields);

    function generateInputFields() {
        const numFields = parseInt(numFieldsSelect.value, 10);
        inputContainer.innerHTML = ''; 

        for (let i = 1; i <= numFields; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = `field${i}`;
            inputField.placeholder = `Field ${i}`;
            inputContainer.appendChild(inputField);
        }
    }

    document.getElementById('dynamicForm').addEventListener('submit', validateForm);

    function validateForm(event) {
        event.preventDefault(); 

        const inputFields = inputContainer.querySelectorAll('input[type="text"]');
        let allFieldsFilled = true;

        inputFields.forEach((field) => {
            if (!field.value.trim()) {
                allFieldsFilled = false;
                field.classList.add('error'); 
            } else {
                field.classList.remove('error');
            }
        });

        if (!allFieldsFilled) {
            const errorElement = document.createElement('p');
            errorElement.textContent = 'Please fill in all fields.';
            errorElement.style.color = 'red';
            inputContainer.appendChild(errorElement);
        } else {
            console.log('Form submitted successfully!');
        }
    }
});