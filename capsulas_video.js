function reproducirVideo(overlay) {
    // Buscamos el video que está justo "atrás" del overlay
    const video = overlay.previousElementSibling;
    
    if (video.paused) {
        video.play();
        overlay.style.opacity = "0"; // Escondemos el botón de play
        video.controls = true;      // Mostramos los controles de volumen/tiempo
    } else {
        video.pause();
        overlay.style.opacity = "1";
    }
}

