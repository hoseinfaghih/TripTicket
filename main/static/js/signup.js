document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll('.fname, .lname, .usrname, .email, .pswd, .cpswd');
    const submitButton = document.querySelector('input[type="submit"]');
    function updateButtonState(){
        const pswd = document.querySelector('.pswd').value;
        const cpswd = document.querySelector('.cpswd').value;
        submitButton.disabled = !(
            document.querySelector('.fname').value.length > 0 &&
            document.querySelector('.lname').value.length > 0 &&
            document.querySelector('.email').value.length > 0 &&
            document.querySelector('.usrname').value.length > 0 &&
            document.querySelector('.pswd').value.length > 0 &&
            document.querySelector('.cpswd').value.length > 0 &&
            (pswd == cpswd)
        );
    }
    inputs.forEach(input => {
        input.addEventListener('input', updateButtonState);
    });

    updateButtonState();
});

    //document.querySelector('.cpswd').addEventListener('input', event => {
    //    event.target.addEventListener('input', () => {
    //        if(event.target.value !== document.querySelector('.pswd').value) {
    //            event.target.parentElement.querySelector('span').innerText = "Password must match";
    //        }
    //        else {
    //            event.target.parentElement.querySelector('span').innerText = "";
    //            document.querySelector('input[type="submit"]').disabled = true;
    //        }
    //    });
    //});

    // document.addEventListener("DOMContentLoaded", () => {
    //     const inputs = document.querySelectorAll('.usrnm, .pswd');
    //     const submitButton = document.querySelector('input[type="submit"]');
    
    //     function updateButtonState() {
    //         submitButton.disabled = !(
    //             document.querySelector('.usrnm').value.length > 0 &&
    //             document.querySelector('.pswd').value.length > 0
    //         );
    //     }
    
    //     inputs.forEach(input => {
    //         input.addEventListener('input', updateButtonState);
    //     });
        
    //     updateButtonState();
    // });