document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el botón y el contenedor
    const showPasadizoBtn = document.getElementById('show-pasadizo-btn');
    const pasadizoContent = document.getElementById('pasadizo-content');

    // Verificamos que los elementos existan
    if (!showPasadizoBtn || !pasadizoContent) {
        console.error('No se encontraron los elementos: show-pasadizo-btn o pasadizo-content');
        return;
    }

    // Añadimos un evento de clic al botón
    showPasadizoBtn.addEventListener('click', () => {
        console.log('Botón clicado');
        // Mostramos el contenedor añadiendo la clase 'show'
        pasadizoContent.classList.add('show');
        console.log('Clase "show" añadida a pasadizo-content:', pasadizoContent.classList.contains('show'));
        // Ajustamos el body para que los elementos sean visibles
        document.body.classList.add('show-pasadizo');
        console.log('Clase "show-pasadizo" añadida al body:', document.body.classList.contains('show-pasadizo'));
        // Ocultamos el botón después de hacer clic
        showPasadizoBtn.style.display = 'none';
    });
});