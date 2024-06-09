function validarContraseña() {
    let contraseña = document.getElementById("contraseña").value;
    let correo = document.getElementById("correo").value;

    if (contraseña == "123" && correo == "admin") {
        window.location.href = "registrarX.html"; // Redirige a la página correcta
    } else {
        alert("Contraseña incorrecta"); // Muestra un mensaje de error
    }
}
