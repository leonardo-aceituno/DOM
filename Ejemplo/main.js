let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textNombre = document.querySelector(".textNombre").value;
    let textTelefono = document.querySelector(".textTelefono").value;
    let textEmail = document.querySelector(".textEmail").value;
    let resultado = validar(textNombre, textTelefono, textEmail);
    if (resultado == true) {
        exito();
    };
});


function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorTelefono").innerHTML = "";
    document.querySelector(".errorEmail").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
};





function validar(nombre, telefono, email) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido."
        pasamosLaValidacion = false;
    };
    let validacionTelefono = /\d/gim;
    if (validacionTelefono.test(telefono) == false) {
        document.querySelector(".errorTelefono").innerHTML = "Ingrese un teléfono válido(sólo números)."
        pasamosLaValidacion = false;
    };
    let validaciónEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/gim;
    if (validaciónEmail.test(email) == false) {
        document.querySelector(".errorEmail").innerHTML = "Ingrese un correo válido."
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
};



function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
};