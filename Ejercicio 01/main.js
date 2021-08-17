let form = document.getElementById("form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;
    let resultado = validar(nombre, asunto,mensaje);
    if (resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector("#nombreError").innerHTML = "";
    document.querySelector("#asuntoError").innerHTML = "";
    document.querySelector("#mensajeError").innerHTML = "";
};

function validar(nombre, asunto,mensaje) {
    let validacion = true;
    let info = "* Este campo es requerido y permite solo permite letras";
    console.log(nombre);
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector("#nombreError").innerHTML = info
        validacion = false;
    };
    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector("#asuntoError").innerHTML = info
        validacion = false;
    };
    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector("#mensajeError").innerHTML = info
        validacion = false;
    };
    return validacion;
};

function exito() {
    document.querySelector(".resultado").innerHTML = "¡¡Formulario pasó la validación!!";
};