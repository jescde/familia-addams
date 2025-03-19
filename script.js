document.getElementById('enter-btn').addEventListener('click', registrarEntrada);

// Detecta la tecla "Enter"
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

    console.log("Historial de usuarios:", registros);

    if (username.toLowerCase() === "noelia") {
        // Ocultar la pantalla de bienvenida
        document.getElementById('welcome-screen').style.display = 'none';

        // Mostrar el juego en lugar del contenido principal
        document.getElementById("juego").style.display = "block";

        // Personalizar mensaje de bienvenida
        document.getElementById("welcome-message").textContent = `Bienvenida a la mansion Addams, ${username}`;
    } else {
        // Mostrar la imagen de Miércoles Addams negando el acceso
        document.getElementById('access-denied').style.display = 'block';
        document.getElementById('welcome-screen').style.display = 'none';
    }
}


function verificarRespuesta() {
    let seleccion = document.getElementById("opciones").value;
    let mensaje = document.getElementById("mensaje");

    if (seleccion === "sintonizar") {
        mensaje.textContent = "¡Correcto! Accediendo a la mansión...";
        mensaje.style.color = "green";
        setTimeout(() => {
            // Ahora sí se muestra el contenido principal
            document.getElementById("juego").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 900);
    } else {
        mensaje.textContent = "Incorrecto. Intentalo de nuevo.";
        mensaje.style.color = "red";
    }
}


function mostrarJuego() {
    let nombreUsuario = document.getElementById("nombre").value.trim();
    if (nombreUsuario !== "") {
        document.getElementById("registro").style.display = "none"; // Oculta el registro
        document.getElementById("juego").style.display = "block"; // Muestra el juego
    }
}

function fadeOutGif() {
    let gif = document.getElementById("wednesday-gif");
    let finalImage = document.getElementById("final-image");

    gif.style.opacity = "0"; // Desvanecer el GIF

    setTimeout(() => {
        gif.style.display = "none"; // Ocultar el GIF después de la animación
        finalImage.style.display = "block"; // Mostrar la imagen final
    }, 1000); // 1000ms = 1 segundo (coincide con el transition del CSS)
}

// Efecto de palpitar sobre el mensaje de Miercoles
document.getElementById("message-gif").classList.add("palpitar");
