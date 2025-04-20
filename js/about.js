document.addEventListener("DOMContentLoaded", function () {
    cargarNosotros();
});

function cargarNosotros() {
    const headerParams = { 'Authorization': 'Bearer ciisa' };
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Public proxy
    const apiUrl = "https://ciisa.coningenio.cl/v1/about-us/";

    $.ajax({
        url: proxyUrl + apiUrl,
        type: "GET",
        dataType: "json",
        headers: headerParams,
        success: function (data) {
            console.log(data);
            const nosotrosContainer = document.querySelector(".nosotros"); // Selecciona el contenedor con la clase 'nosotros'
            nosotrosContainer.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos

            data.data.forEach(about => {
                // Crear el contenedor principal con la clase 'col'
                const colDiv = document.createElement("div");
                colDiv.className = "col d-flex align-items-start";

                // Crear el contenido para nosotros
                const contentDiv = document.createElement("div");
                const titulo = document.createElement("h3");
                titulo.textContent = about.titulo.esp; // Título 
                const descripcion = document.createElement("p");
                descripcion.textContent = about.descripcion.esp; // Descripción 

                // Agregar título y descripción al contenedor
                contentDiv.appendChild(titulo);
                contentDiv.appendChild(descripcion);

                // Agregar el contenido al contenedor principal
                colDiv.appendChild(contentDiv);

                // Agregar el contenedor principal al DOM
                nosotrosContainer.appendChild(colDiv);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error al cargar nosotros: " + error);
        }
    });
}