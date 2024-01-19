document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('.usrnm, .pswd');
    const submitButton = document.querySelector('input[type="submit"]');

    function updateButtonState() {
        submitButton.disabled = !(
            document.querySelector('.usrnm').value.length > 0 &&
            document.querySelector('.pswd').value.length > 0
        );
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });
    
    updateButtonState();
});