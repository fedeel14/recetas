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

//Falidar ingreso Telefono DNI

document.addEventListener("DOMContentLoaded", function() {
    var inputDNI = document.getElementById("dni");

    inputDNI.oninvalid = function(event) {
        // Previene que el navegador muestre el mensaje de error por defecto
        event.preventDefault();

        // Verifica condiciones específicas de validez y establece mensajes personalizados
        if (!event.target.validity.valid) {
            document.getElementById("error-dni").style.display = "block";
            if (event.target.validity.rangeUnderflow) {
                document.getElementById("error-dni").textContent = "Por favor, ingrese un Documento válido. Sin puntos \".\"";
            } else if (event.target.validity.rangeOverflow) {
                document.getElementById("error-dni").textContent = "Por favor, ingrese un Documento válido. Sin puntos \".\"";
            } else {
                // Aquí se pueden añadir otras verificaciones de validez según sea necesario
                document.getElementById("error-dni").textContent = "Por favor, ingrese un Documento válido. Sin puntos 3";
            }
        }
    };

    inputDNI.oninput = function(event) {
        document.getElementById("error-dni").style.display = "none";
    };
});





