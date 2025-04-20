document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    // Declarar variables globales para los datos del formulario
    let nombre, telefono, email, asunto, mensaje;

    // Función para validar campos
    const validarCampos = () => {
        let errores = [];
        // Actualizar los valores de las variables globales
        nombre = document.getElementById("nombre").value.trim();
        telefono = document.getElementById("telefono").value.trim();
        email = document.getElementById("email").value.trim();
        asunto = document.getElementById("asunto").value; // Obtiene el valor seleccionado
        mensaje = document.getElementById("mensaje").value.trim();

        // Validación del nombre
        if (nombre.length < 3 || nombre.length > 40) {
            errores.push("El nombre debe tener entre 3 y 40 caracteres.");
        }

        // Validación del teléfono (opcional: solo números)
        if (!/^\d{9}$/.test(telefono)) {
            errores.push("El teléfono debe tener al menos 9 dígitos.");
        }

        // Validación del email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errores.push("El email no tiene un formato válido.");
        }

        // Validación del asunto
        if (!asunto) {
            errores.push("Debes seleccionar un servicio en el campo Asunto.");
        }

        // Validación del mensaje
        if (mensaje.length < 10 || mensaje.length > 300) {
            errores.push("El mensaje debe tener entre 10 y 300 caracteres.");
        }

        return errores;
    };

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Evita el envío predeterminado del formulario

        // Llama a la función de validación
        const errores = validarCampos();

        if (errores.length === 0) {
            // Si no hay errores, procesa el formulario
            console.log("Formulario enviado con éxito.");
            console.log(`Nombre: ${nombre}`);
            console.log(`Teléfono: ${telefono}`);
            console.log(`Email: ${email}`);
            console.log(`Asunto: ${asunto}`);
            console.log(`Mensaje: ${mensaje}`);
            alert("Formulario enviado con éxito.");
            formulario.reset(); // Limpia el formulario
        } else {
            // Si hay errores, muestra los mensajes
            alert("Errores encontrados:\n" + errores.join("\n"));
        }
    });
});