//colaboradora: aliss
let nombre = localStorage.getItem("nombre");

if (nombre != null) {
    document.getElementById("bienvenida").innerHTML =
    "¡Bienvenido, " + nombre + "!";
}

function seleccionar(semestre) {

    if (semestre == 5) {
        window.location.href = "libros5.html";
    } else {
        alert("Este semestre estará disponible próximamente.");
    }

}
