// Detectar clic en el botón "Entrar"
document.getElementById('enter-btn').addEventListener('click', registrarEntrada);

// Detectar tecla "Enter" en el input
document.getElementById('username-input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        registrarEntrada();
    }
});

// Función para manejar la entrada del usuario
function registrarEntrada() {
    let username = document.getElementById('username-input').value.trim();

    if (!username) return;

    // Guardar en localStorage
    let registros = JSON.parse(localStorage.getItem("registrosUsuarios")) || [];
    registros.push(username);
    localStorage.setItem("registrosUsuarios", JSON.stringify(registros));
    console.log("Historial de usuarios:", registros);

    if(username.toLowerCase() === "noelia"){
        alert("Ese no me vale. Tu nombre de elfo");
    } else if(username.toLowerCase() === "liendres"){
        // Ocultar pantalla de bienvenida y mostrar acertijo
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('juego').style.display = 'block';
    } else {
        // Mostrar imagen de Miércoles negando acceso
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('access-denied').style.display = 'block';
        setTimeout(() => {
            document.getElementById('access-denied').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'block';
        }, 3000); // Ocultar después de 3 segundos y volver a la pantalla inicial
    }
}

// Verificar la respuesta del acertijo
function verificarRespuesta() {
    let seleccion = document.getElementById("opciones").value;
    let mensaje = document.getElementById("mensaje");

    if (seleccion === "hermanos gemelos") { 
        mensaje.textContent = "¡Correcto! Las puertas de la mansión se abrirán...";
        mensaje.style.color = "green";
        setTimeout(() => {
            // Ocultar acertijo y mostrar animación de verjas
            document.getElementById("juego").style.display = "none";
            abrirVerjaYMostrarContenido();
        }, 1000); // Pausa antes de abrir las verjas
    } else {
        mensaje.textContent = "Incorrecto. Inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

// Animación de las verjas y mostrar contenido principal
function abrirVerjaYMostrarContenido() {
    console.log("Animación iniciada");
    let verjaContainer = document.getElementById("verja-container");
    verjaContainer.style.display = "block";

    setTimeout(() => {
        verjaContainer.classList.add("verja-open");
        setTimeout(() => {
            console.log("Mostrando contenido principal");
            verjaContainer.style.display = "none";
            let mainContent = document.getElementById("main-content");
            mainContent.classList.remove("hidden");
            mainContent.style.display = "block";
            let username = document.getElementById('username-input').value;
            document.getElementById("welcome-message").textContent = `Bienvenida a la Mansión Addams, ${username}`;
        }, 2000);
    }, 200);
}

 // Función para descubrir el pasadizo
 function descubrirPasadizo() {
    let decision = confirm("Has encontrado un pasadizo secreto... ¿Quieres entrar?");
    if (decision) {
        window.location.href = "pasadizo.html"; // Redirige a la pantalla del pasadizo
    } else {
        alert("Decides quedarte en la mansión...");
    }
}

// Interactividad para la página principal
document.addEventListener("DOMContentLoaded", () => {
    // Araña
    const spider = document.getElementById("spider-web");
    const spiderMessage = document.getElementById("spider-message");
    if (spider && spiderMessage) {
        spider.addEventListener("click", () => {
            // Mostrar el mensaje
            spiderMessage.classList.add("show");
            // Ocultar después de 3 segundos
            setTimeout(() => {
                spiderMessage.classList.remove("show");
            }, 3000);
        });
    }

    // Cosa
    const ghostlyHand = document.getElementById("ghostly-hand");
    const thingMessage = document.getElementById("thing-message");
    if (ghostlyHand && thingMessage) {
        ghostlyHand.addEventListener("click", () => {
            // Mostrar el mensaje
            thingMessage.classList.add("show");
            // Ocultar después de 3 segundos
            setTimeout(() => {
                thingMessage.classList.remove("show");
            }, 3000);
        });
    }

    // Botón de explorar
    const exploreBtn = document.getElementById("explore-btn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            alert("¡Prepárate! La Mansión Addams está llena de sorpresas... (Página en construcción)");
        });
    }
});
