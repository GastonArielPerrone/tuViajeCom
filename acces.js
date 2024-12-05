var selectTypeValueUser = document.getElementById("typeUser");

selectTypeValueUser.addEventListener("change", function () {
    const divForm = document.getElementById("form-container");
    divForm.innerHTML = ""; // Limpiar entradas anteriores

    if (selectTypeValueUser.value === "--Seleccione--") {
        alert("Por favor, seleccione una opción del listado");
    } else if (selectTypeValueUser.value === "Pasajero") {
        // Redirigir a form.html en la carpeta templates
        window.open('templates/form.html'); // Cambia a la ruta correcta
    } else if (selectTypeValueUser.value === "Conductor") {
        createPasswordInput(divForm);
    }
});

function createPasswordInput(container) {
    var passwordLabel = document.createElement("label");
    var passwordInput = document.createElement("input");
    var pDescriptionPassword = document.createElement("p");
    var buttonAcces = document.createElement("button");

    passwordLabel.classList.add("label");
    passwordLabel.innerHTML = "Contraseña";
    passwordInput.type = "password";
    passwordInput.setAttribute("name", "password");
    passwordInput.id = "password";
    passwordInput.required = true;

    pDescriptionPassword.classList.add("pDescription");
    pDescriptionPassword.innerHTML = "*<u>Nota:</u> Es obligatorio completar con la contraseña para acceder al sistema.";

    buttonAcces.type = "submit";
    buttonAcces.classList.add("button");
    buttonAcces.innerHTML = "Ingresar";

    container.append(passwordLabel, passwordInput, pDescriptionPassword, buttonAcces);

    buttonAcces.addEventListener("click", function (e) {
        e.preventDefault(); // Prevenir el envío del formulario
        validatePassword(passwordInput.value);
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            validatePassword(passwordInput.value);
        }
    });
}

function validatePassword(passwordValue) {
    const passwordOrigin = "36276343@";
    if (passwordValue === "") {
        alert("¡Ups! No ha ingresado la contraseña");
    } else if (passwordValue !== passwordOrigin) {
        alert("Acceso denegado. Contraseña incorrecta");
    } else {
        alert("Acceso correcto!");
        window.open('templates/systemDriver.html'); // Cambia a la ruta correcta
    }
}