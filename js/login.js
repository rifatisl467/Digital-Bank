// Step 1: add click handler with the log in btn
document.getElementById('btn-log-in').addEventListener('click', function () {

    // Step 2: get the email id inside the input field
    //  Always use .value to get the input inside the field
    const emailField = document.getElementById('user-id');
    const email = emailField.value;
    //    Step 3: get the password id inside the input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //!!!!!!!!!!!!!!!!!!!!!!!!! DO NOT VARIFY THE EMAIL AND PASSWORD ON THE CLIENT SIDE!!!!!!!!!!!!!!!!!!!!!!
    if (email === 'samiul.alim50bmg@gmail.com' && password === 'hellsing') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Your Email or Password is Incorrect.')
    }
})
