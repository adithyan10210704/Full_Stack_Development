function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Use eval carefully! It executes the string as code.
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}