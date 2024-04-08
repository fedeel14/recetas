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

// Asignar eventos de entrada a los campos para validar en tiempo real
document.getElementById("firstname").addEventListener("input", function() {
    validarCampo("firstname", "error-firstname", /^[a-zA-Z]+$/);
});

document.getElementById("lastname").addEventListener("input", function() {
    validarCampo("lastname", "error-lastname", /^[a-zA-Z]+$/);
});

document.getElementById("direccion").addEventListener("input", function() {
    validarCampo("direccion", "error-direccion", /^[a-zA-Z0-9\s]+$/);
});

document.getElementById("email").addEventListener("input", function() {
    validarCampo("email", "error-mail", /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
