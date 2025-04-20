document.addEventListener("DOMContentLoaded", () => {
    const btnCambiarTema = document.getElementById("btn-cambiar-tema");
    const icono = document.getElementById("dl-icon");
    const body = document.body;
    const logo = document.querySelector(".logo-nav"); 

    // Verifica si hay un tema guardado en localStorage
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado) {
        body.setAttribute("data-bs-theme", temaGuardado);
        icono.className = temaGuardado === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
        logo.setAttribute("src", temaGuardado === "dark" ? "img/logo-grande-letras-blanco.png" : "img/logo-grande.png");
    }

    // Evento para cambiar el tema
    btnCambiarTema.addEventListener("click", () => {
        const temaActual = body.getAttribute("data-bs-theme");
        const nuevoTema = temaActual === "light" ? "dark" : "light";

        // Cambia el tema en el atributo del body
        body.setAttribute("data-bs-theme", nuevoTema);

        // Cambia el icono
        icono.className = nuevoTema === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";

        // Cambia el logo
        logo.setAttribute("src", nuevoTema === "dark" ? "img/logo-grande-letras-blanco.png" : "img/logo-grande.png");

        // Guarda el tema en localStorage
        localStorage.setItem("tema", nuevoTema);
    });
});
