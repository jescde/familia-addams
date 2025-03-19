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
    let messageGif = document.getElementById("message-gif");
    let introMessage = document.getElementById("wednesday-text");

    // Crear el nuevo mensaje
    let newMessage = document.createElement("p");
    newMessage.textContent = "PÁGINA EN CONSTRUCCIÓN. SE VIENEN COSITAS";
    newMessage.style.position = "absolute";
    newMessage.style.top = "50%";
    newMessage.style.left = "50%";
    newMessage.style.transform = "translate(-50%, -50%)";
    newMessage.style.color = "white";
    newMessage.style.fontSize = "20px";
    newMessage.style.fontWeight = "bold";
    newMessage.style.textShadow = "2px 2px 4px black";
    newMessage.style.whiteSpace = "nowrap";
    newMessage.style.display = "none"; // Oculto inicialmente

    // Obtener el contenedor de la imagen final y añadir el mensaje
    let imageContainer = document.querySelector(".image-container");
    imageContainer.style.position = "relative"; // Para posicionar el mensaje dentro
    imageContainer.appendChild(newMessage);

    // Desvanecer elementos antiguos
    gif.style.opacity = "0";
    messageGif.style.opacity = "0";
    introMessage.style.opacity = "0";

    setTimeout(() => {
        gif.style.display = "none";
        messageGif.style.display = "none";
        introMessage.style.display = "none";

        finalImage.style.display = "block";
        newMessage.style.display = "block"; // Mostrar el mensaje sobre la imagen final
    }, 1000);
}

// Efecto de palpitar sobre el mensaje de Miercoles
document.getElementById("message-gif").classList.add("palpitar");
