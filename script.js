function changeMessage() {
    document.getElementById("message").textContent = "⭐Las estrellas brillan más en la oscuridad, así que recuerda que tu luz es más brillante cuando los tiempos son difíciles.⭐";
    document.getElementById("happyButton").style.display = "none"; // Ocultar el botón
    document.getElementById("song").style.display = "block"; // Mostrar el audio
    document.getElementById("song").play(); // Reproducir la música automáticamente
}
