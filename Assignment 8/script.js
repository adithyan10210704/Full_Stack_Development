async function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const form = document.getElementById('registrationForm');
    
    // Validate all fields
    const isFirstNameValid = validateField(document.getElementById('firstName'));
    const isLastNameValid = validateField(document.getElementById('lastName'));
    const isEmailValid = validateField(document.getElementById('email'));
    const isDepartmentValid = validateField(document.getElementById('department'));
    const isPhoneValid = validateField(document.getElementById('phone'));

    if (isFirstNameValid && isLastNameValid && isEmailValid && isDepartmentValid && isPhoneValid) {
        // Create a JSON object with form data
        const formData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            department: form.department.value,
            phone: form.phone.value
        };

        try {
            // Send form data to MockAPI server
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Form submitted successfully:', data);
                alert('Registration successful!');
                form.reset(); // Clear form fields
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
}

function validateField(field) {
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    if (value === '') {
        errorElement.textContent = 'This field is required.';
        return false;
    } else {
        errorElement.textContent = '';
        return true;
    }
}