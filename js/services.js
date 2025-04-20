document.addEventListener("DOMContentLoaded", function () {
    cargarServicios();
});

function cargarServicios() {
    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Public proxy
    const apiUrl = "https://ciisa.coningenio.cl/v1/services/";

    $.ajax({
        url: proxyUrl + apiUrl,
        type: "GET",
        dataType: "json",
        headers: headerParams,
        success: function (data) {
            console.log(data);
            const serviciosContainer = document.querySelector(".servicios"); // Selecciona el contenedor con la clase 'servicios'
            serviciosContainer.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos

            data.data.forEach(servicio => {
                // Crear el contenedor principal con la clase 'col'
                const colDiv = document.createElement("div");
                colDiv.className = "col d-flex align-items-start";

                // Crear el contenido del servicio
                const contentDiv = document.createElement("div");
                const titulo = document.createElement("h3");
                titulo.textContent = servicio.titulo.esp; // Título del servicio
                const descripcion = document.createElement("p");
                descripcion.textContent = servicio.descripcion.esp; // Descripción del servicio

                // Agregar título y descripción al contenedor
                contentDiv.appendChild(titulo);
                contentDiv.appendChild(descripcion);

                // Agregar el contenido al contenedor principal
                colDiv.appendChild(contentDiv);

                // Agregar el contenedor principal al DOM
                serviciosContainer.appendChild(colDiv);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error al cargar los servicios: " + error);
        }
    });
}