const registerForm = document.querySelector('form[action="/submit_registration"]');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let doc = document.getElementById('document').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (localStorage.getItem(email)) {
        alert('Ya existe una cuenta con ese correo electrónico. Por favor, intenta de nuevo.');
        return;
    }

    localStorage.setItem(email, JSON.stringify({
        fname: fname,
        lname: lname,
        document: doc,
        password: password
    }));

    alert('Tu cuenta ha sido registrada exitosamente. Serás redirigido a la página de inicio de sesión.');

    window.location.href = '/inicio/index.html';
});
