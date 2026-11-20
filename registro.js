const formularioRegistro = document.getElementById("formulario");

formularioRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const control = document.getElementById("control").value.trim();
    const password = document.getElementById("password").value;

    // Obtener usuarios existentes
    const usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]"
    );

    // Verificar duplicados
    const existe = usuarios.some(usuario =>
        usuario.control === control
    );

    if (existe) {
        alert("El número de control ya está registrado.");
        return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
        nombre: nombre,
        control: control,
        password: password
    };

    usuarios.push(nuevoUsuario);

    // Guardar en localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("¡Registro exitoso!");

    window.location.href = "login.html";
});