document.getElementById("colorButton").addEventListener("click", function() {
    // Generar un color aleatorio
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambiar el color de fondo del botón
    this.style.backgroundColor = randomColor;
});
