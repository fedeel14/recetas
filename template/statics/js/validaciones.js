// Función para limitar la selección a una sola sala
function limitarSeleccion(checkbox) {
    var checkboxes = document.getElementsByName("Nivel");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    checkbox.checked = true;
}

// Función para validar campos de entrada
function validarCampo(inputId, errorId, pattern) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);

    if (!pattern.test(input.value)) {
        error.style.display = "block";
    } else {
        error.style.display = "none";
    }
}


// Asignar eventos de entrada a los campos para validar en tiempo real, Toma los campos en el Input del usuarios,el error definido y el Pattern para hacer la validación.
document.getElementById("firstname").addEventListener("input", function () {
    validarCampo("firstname", "error-firstname", /^[a-zA-Z\s]+$/);
});

document.getElementById("lastname").addEventListener("input", function () {
    validarCampo("lastname", "error-lastname", /^[a-zA-Z\s]+$/);
});

document.getElementById("direccion").addEventListener("input", function () {
    validarCampo("direccion", "error-direccion", /^[a-zA-Z0-9\s]+$/);
});

document.getElementById("dni").addEventListener("input", function () {
    validarCampo("dni", "error-dni", /^\d{6,10}$/);
});

document.getElementById("telefono").addEventListener("input", function () {
    validarCampo("telefono", "error-telefono", /[0-9]{6,10}/);
});

document.getElementById("email").addEventListener("input", function () {
    validarCampo("email", "error-email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});


document.addEventListener('DOMContentLoaded', function() {
    // Asegurarse de que el formulario esté completamente cargado antes de adjuntar el manejador de evento
    document.getElementById('form-register').onsubmit = function(e) {
        // Verificar Género
        var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
        if (!generoSeleccionado) {
            alert("Por favor, selecciona un género.");
            e.preventDefault(); // Detener el envío del formulario
            return false;
        }

        // Verificar Sala
        var salaSeleccionada = document.querySelector('input[name="Nivel"]:checked');
        if (!salaSeleccionada) {
            alert("Por favor, selecciona una sala.");
            e.preventDefault(); // Detener el envío del formulario
            return false;
        }

        // Verificar Turno
        var turnoSeleccionado = document.querySelector('input[name="turno"]:checked');
        if (!turnoSeleccionado) {
            alert("Por favor, selecciona un turno.");
            e.preventDefault(); // Detener el envío del formulario
            return false;
        }

        // Si todo está seleccionado correctamente, el formulario se enviará
        return true;
    };
});






