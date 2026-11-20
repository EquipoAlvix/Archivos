let libros = [
    {
        nombre: "Temas selectos de Matematicas 2",
        precio: 260,
        imagen: "https://www.libcientifica.com/imagenes/9789709/978970966310.GIF"
    },
    {
        nombre: "La energia en los procesos de la vida diaria",
        precio: 260,
        imagen: "https://www.libcientifica.com/imagenes/9786076/978607632753.GIF"
    },
    {
        nombre: "Boarrding pass 5",
        precio: 220,
        imagen: "https://imgv2-2-f.scribdassets.com/img/document/978730508/original/c6c71895eb/1?v=1"
    },
   
    {
        nombre: "Aplicaciones de la administracion",
        precio: 260,
        imagen: "https://tse2.mm.bing.net/th/id/OIP.x7ZoCUl9rZ-IJBONu3z6FQHaJQ?r=0&pid=Api&h=220&P=0"
    },
    {
        nombre: "Conciencia historica 2",
        precio: 260,
        imagen: "https://imgv2-2-f.scribdassets.com/img/document/940298544/original/24155cd5d4/1?v=1"
    }
];

let carrito = [];

function mostrarLibros(lista) {

    let contenido = "";

    for (let i = 0; i < lista.length; i++) {

        contenido += `
            <div class="libro">

                <img src="${lista[i].imagen}" alt="${lista[i].nombre}">

                <h3>${lista[i].nombre}</h3>

                <p>$${lista[i].precio}.00</p>

                <button onclick="agregar(${libros.indexOf(lista[i])})">
                    Agregar al carrito
                </button>

            </div>
        `;
    }

    document.getElementById("libros").innerHTML = contenido;
}

function agregar(numero) {

    carrito.push(libros[numero]);

    mostrarCarrito();

}

function mostrarCarrito() {

    let contenido = "";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {

        contenido += "<p>" + carrito[i].nombre +
        " - $" + carrito[i].precio + "</p>";

        total += carrito[i].precio;
    }

    if (carrito.length == 0) {
        contenido = "Tu carrito está vacío.";
    }

    document.getElementById("carrito").innerHTML = contenido;

    document.getElementById("total").innerHTML =
    "Total: $" + total + ".00";

}

function buscar() {

    let texto = document.getElementById("buscador").value.toLowerCase();

    let resultado = libros.filter(function(libro) {
        return libro.nombre.toLowerCase().includes(texto);
    });

    mostrarLibros(resultado);

}

function vaciarCarrito() {

    carrito = [];

    mostrarCarrito();

}

function regresar() {

    window.location.href = "inicio.html";

}

mostrarLibros(libros);
mostrarCarrito();