const loginForm = document.querySelector('form[action="/submit_login"]');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let account = JSON.parse(localStorage.getItem(email));

    if (account.password !== password) {
        alert('Correo electrónico o contraseña incorrectos.');
        return;
    }
    if (account.email !== email) {
        alert('Correo electrónico o contraseña incorrectos. Serás redirigido a la página de registro.');
        window.location.href = '/registro/index.html';
        return;
    }

    alert('Has iniciado sesión exitosamente.');
    window.location.href = '/index.html';
});
