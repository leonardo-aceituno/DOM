let change = boton => {
    let id = boton.id

    paint(id)
}

const paint = id => {
    let caja = document.getElementById("caja")
    switch (id) {
        case "btn-1":
            caja.setAttribute("style", "background-color: #e53e3e; border:1px solid black;width: 100%;height: 100%")
            break;
        case "btn-2":
            caja.setAttribute("style", "background-color: #dd6b20; border:1px solid black;width: 100%;height: 100%")
            break;
        case "btn-3":
            caja.setAttribute("style", "background-color: #faf089; border:1px solid black;width: 100%;height: 100%")
            break;
        case "btn-4":
            caja.setAttribute("style", "background-color: #48bb78; border:1px solid black;width: 100%;height: 100%")
            break;
        case "btn-5":
            caja.setAttribute("style", "background-color: #81e6d9; border:1px solid black;width: 100%;height: 100%")
            break;
        case "btn-6":
            caja.setAttribute("style", "background-color: #d53f8c; border:1px solid black;width: 100%;height: 100%")
            break;
    }
}