//Create a variable element about value in th selected...
var selectTypeValueUser = document.getElementById("typeUser");

selectTypeValueUser.addEventListener("change", function(){
    if(selectTypeValueUser.value == "--Seleccione--"){
        //Error, because is not user type. 
        alert("Por favor, seleccione una opción del listado");
    } else if (selectTypeValueUser.value == "Pasajero"){
        //Open the page application.html (Form).
        window.open("application.html");
    } else if (selectTypeValueUser.value == "Conductor"){
        //Search a element div (form-container) and Create the element input type password for the acces on the Admin Driver.
        var divForm = document.getElementById("form-container");
        var passwordLabel = document.createElement("label");
        var passwordInput = document.createElement("input");
        var pDescriptionPassword = document.createElement("p");
        var br = document.createElement("br");
        var br1 = document.createElement("br");
        var buttonAcces = document.createElement("button");

        divForm.appendChild(passwordLabel);
        passwordLabel.classList.add("label");
        passwordLabel.setAttribute("name", "password");
        passwordLabel.innerHTML = "Contraseña";
        divForm.appendChild(passwordInput);
        passwordInput.type = "password";
        passwordInput.setAttribute("name", "password");
        passwordInput.id = "password";
        passwordInput.required = true;
        divForm.appendChild(pDescriptionPassword);
        pDescriptionPassword.classList.add("pDescription");
        pDescriptionPassword.innerHTML = `*<u>Nota:</u> Es obligatorio completar con la contraseña para acceder al sistema.`;
        divForm.appendChild(br);
        divForm.appendChild(br1);
        divForm.appendChild(buttonAcces);
        buttonAcces.type = "submit";
        buttonAcces.classList.add("button");
        buttonAcces.innerHTML = "Ingresar";

        //Now create a variable and event button for the acces a "systemDriver.html"
        var buttonAcces1 = document.querySelector(".button");
        //Event:
        buttonAcces1.addEventListener("click", function(){
            //create a variable for value the password.
            var password = document.getElementById("password");
            //Save the password value in a variable.
            var passwordValue = password.value;

            var passwordOrigin = "36276343@";

            if(passwordValue == ""){
                alert("¡Ups! No ha ingresado la contraseña");
            } else if(passwordValue != passwordOrigin){
                alert("Acceso denegado. Contraseña incorrecta");
            } else if(passwordValue == passwordOrigin){
                alert("Acceso correcto!")
                window.open("systemDriver.html");
            }
        })
    }
})