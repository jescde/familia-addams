document.getElementById('enter-btn').addEventListener('click', registrarEntrada);

// También detecta la tecla "Enter"
document.getElementById('username-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        registrarEntrada();
    }
});

// Función para manejar la entrada del usuario
function registrarEntrada() {
    let username = document.getElementById('username-input').value.trim();

    if (!username) return; // No hacer nada si el campo está vacío

    // Guardar en localStorage
    let registros = JSON.parse(localStorage.getItem("registrosUsuarios")) || [];
    registros.push(username);
    localStorage.setItem("registrosUsuarios", JSON.stringify(registros));

    // Mostrar en consola el historial de usuarios
    console.log("Historial de usuarios:", registros);

    if (username.toLowerCase() === "noelia") {
        // Mensaje de bienvenida personalizado
        document.getElementById('welcome-message').innerText = `¡Bienvenida, Noelia!`;

        // Ocultar la pantalla de bienvenida
        document.getElementById('welcome-screen').style.display = 'none';

        // Mostrar el contenido principal
        document.getElementById('main-content').style.display = 'block';
        document.querySelector('header').style.display = 'block';
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    } else {
        // Mostrar la imagen de Miércoles Addams negando el acceso
        document.getElementById('access-denied').style.display = 'block';

        // Ocultar la pantalla de bienvenida
        document.getElementById('welcome-screen').style.display = 'none';
    }
}
