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

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const form = document.getElementById('registrationForm');
    
    // Validate all fields
    const isFirstNameValid = validateField(document.getElementById('firstName'));
    const isLastNameValid = validateField(document.getElementById('lastName'));
    const isEmailValid = validateField(document.getElementById('email'));
    const isDepartmentValid = validateField(document.getElementById('department'));
    const isPhoneValid = validateField(document.getElementById('phone'));

    if (isFirstNameValid && isLastNameValid && isEmailValid && isDepartmentValid && isPhoneValid) {
        // If no validation errors, display details
        const detailsTable = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
        const newRow = detailsTable.insertRow();
        
        newRow.innerHTML = `
            <td>${form.firstName.value}</td>
            <td>${form.lastName.value}</td>
            <td>${form.email.value}</td>
            <td>${form.department.value}</td>
            <td>${form.phone.value}</td>
        `;

        // Clear form fields
        form.reset();
    }
}