let btnSuma = document.querySelector("#btn-sumar");
btnSuma.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarErrores();
    let valor1 = +document.querySelector("#valor1").value;
    let valor2 = +document.querySelector("#valor2").value;
    let resultado = validar(valor1, valor2)
    let suma = valor1 + valor2
    if (resultado == true) {
        document.querySelector(".resultado").innerHTML = suma;
    };
});

let btnResta = document.querySelector("#btn-restar");
btnResta.addEventListener("click", function (event) {
    event.preventDefault();
    limpiarErrores();
    let valor1 = +document.querySelector("#valor1").value;
    let valor2 = +document.querySelector("#valor2").value;
    let resultado = validar(valor1, valor2)
    
    if (resultado == true) {
        positivos(valor1, valor2)
        
    };
});

const positivos = (valor1, valor2) => {
    let resta = valor1 - valor2;

    if(resta < 0){
        console.log("HERE");
        document.querySelector(".resultado").innerHTML = 0;
    }else{
        document.querySelector(".resultado").innerHTML = resta;
    }
}

const limpiarErrores = () => {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector("#errorValor1").innerHTML = "";
    document.querySelector("#errorValor2").innerHTML = "";

};


const validar = (valor1, valor2) => {
    let validacion = true;
    let info = "* Campo solo permite numeros";

    let validarValor1 = /[0-9]/gim;
    if (validarValor1.test(valor1) == false) {
        document.querySelector("#errorValor1").innerHTML = info
        validacion = false;
    };

    let validarValor2 = /[0-9]/gim;
    if (validarValor2.test(valor2) == false) {
        document.querySelector("#errorValor2").innerHTML = info
        validacion = false;
    };

    return validacion;
};