function validarLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMessage = document.getElementById('login-error');

    if (!email || !password) {
        errorMessage.style.display = 'block';
        return false;
    }

    errorMessage.style.display = 'none';
    return true;
}
