/* Creat Object "cars". After add the "trademark" (property). Add many car brands (properties)
In the brands add the specific models (properties). Finally we add the types of consumption (properties: key-value).*/
let cars = {
    trademark: {
        "Abarth": null,
        "Alfa Romeo": null,
        "Aston Martin": null,
        Audi: null,
        Bentley: null,
        BMW: null,
        BYD: null,
        Chevrolet: {
            "Cruze 4P AT": {
                "City": 8.4,
                "Road": 5.6,
                "Mixed": 6.7
            },
            "Cruze 4P MT": {
                "City": 8.3,
                "Road": 5.3,
                "Mixed": 6.4
            },
            "Cruze 5P MT": {
                "City": 8.2,
                "Road": 5.6,
                "Mixed": 6.6
            },
            "Onix 1.0 AT": {
                "City": 8.5,
                "Road": 4.9,
                "Mixed": 6.2
            },
            "Onix 1.0 MT": {
                "City": 7.9,
                "Road": 5.0,
                "Mixed": 6.0
            },
            "Onix 1.2 MT": {
                "City": 8.1,
                "Road": 4.7,
                "Mixed": 6.02
            },
            "Onix Joy 1.4 L": {
                "City": 9.7,
                "Road": 5.6,
                "Mixed": 7.1
            },
            "Onix Plus 1.0 MT": {
                "City": 7.9,
                "Road": 4.5,
                "Mixed": 5.8
            }
        },
        Citroen: {
            "Cactus C4": {
                "City": 5.6,
                "Road": 4.6,
                "Mixed": 5.3
            }
        },
        Dacia: null,
        DFSK: null,
        DS: null,
        Ferrari: null,
        Fiat: null,
        Ford: null,
        Honda: null,
        Hyundai: null,
        Infiniti: null,
        Isuzu: null,
        Jaguar: null,
        Jeep: null,
        Kia: null,
        Lada: null,
        Lamborghini: null,
        Lancia: null,
        LandRover: null,
        Lexus: null,
        Mahindra: null,
        Maserati: null,
        Mazda: null,
        Mercedes: null,
        Mini: null,
        Mitsubishi: null,
        Morgan: null,
        Nissan: null,
        Opel: null,
        Peugeot: null,
        Porsche: null,
        Renault: null,
        RollsRoyce: null,
        Seat: null,
        Skoda: null,
        Smart: null,
        Ssangyong: null,
        Subaru: null,
        Suzuki: null,
        Tata: null,
        Tesla: null,
        Toyota: null,
        VolksWagen: null,
        Volvo: null
    },
}

//____________Services Stations__________________________________________________________________________
let serviceStations = {
    "YPF": {
        "Nafta SÚPER": 762,
        "Nafta PREMIUM": 947
    },
    "SHELL": {
        "Nafta SÚPER": 780,
        "Nafta PREMIUM": 975
    },
    "AXION": {
        "Nafta SÚPER": 752,
        "Nafta PREMIUM": 917
    },
    "PUMA": {
        "Nafta SÚPER": 759,
        "Nafta PREMIUM": 958
    }
};

let tolls = {
    "AUBASA: Berazategui (a La Plata)": {
        "Rush Hour": 300,
        "Non Peak Hour": 200
    },
    "AUBASA: Bernal (a La Plata)": {
        "Rush Hour": 300,
        "Non Peak Hour": 200
    },
    "AUBASA: Doc Sud (a La Plata)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Gutiérrez (a La Plata)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Hudson (a La Plata)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Quilmes (a La Plata)": {
        "Rush Hour": 300,
        "Non Peak Hour": 200
    },
    "AUBASA: Villa Elisa (a La Plata)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Berazategui (a CABA)": {
        "Rush Hour": 700,
        "Non Peak Hour": 500
    },
    "AUBASA: Bernal (a CABA)": {
        "Rush Hour": 700,
        "Non Peak Hour": 500
    },
    "AUBASA: Dock Sud Acceso Sudeste (a CABA)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Gutiérrez (sentido a Ramal Gutiérrez)": {
        "Rush Hour": 400,
        "Non Peak Hour": 300
    },
    "AUBASA: Hudson (a CABA)": {
        "Rush Hour": 800,
        "Non Peak Hour": 600
    },
    "AUBASA: Quilmes (a CABA)": {
        "Rush Hour": 700,
        "Non Peak Hour": 500
    },
    "AUSA: 25 de Mayo": {
        "Rush Hour": 910.43,
        "Non Peak Hour": 642.43
    },
    "AUSA: Perito Moreno": {
        "Rush Hour": 910.43,
        "Non Peak Hour": 642.43
    },
    "AUSA: Illía - Retiro": {
        "Rush Hour": 378.5,
        "Non Peak Hour": 276.65
    },
    "AUSA: Sarmiento - Salguero": {
        "Rush Hour": 378.5,
        "Non Peak Hour": 276.65
    }
}

//____________________Generate Form_____________________________________________________________________
let selectTrademark = document.getElementById("trademark");

selectTrademark.addEventListener("change", function () {
    let trademarkValue = selectTrademark.value;
    let camelCaseTrademark = trademarkValue.split(' ').join('');
    if (trademarkValue in cars.trademark) {
        if (cars.trademark[camelCaseTrademark] == null) {
            alert(`Lo sentimos. Aún no hemos trabajado para la marca ${trademarkValue}`);
        } else {
            generateForm();
            selectTrademark.disabled = true;
        }
    }
    function generateForm() {
        generateSelectModelAndInputPath();
        function generateSelectModelAndInputPath() {
            // Obtén el elemento contenedor del formulario en lugar de seleccionar body directamente
            var formContainer = document.getElementById("form-container");
            // Crea los elementos
            var labelModel = document.createElement("label");
            var modelSelect = document.createElement("select");
            var br = document.createElement("br");
            // Agrega atributos y contenido a los elementos
            formContainer.appendChild(br);
            labelModel.setAttribute("for", "model");
            labelModel.classList.add("label"); // Usa add() en lugar de classList()
            labelModel.innerHTML = "Modelo";
            formContainer.appendChild(labelModel);
            modelSelect.id = "model"; // Usa el operador de asignación (=) en lugar de getAttribute()
            modelSelect.setAttribute("name", "model");
            formContainer.appendChild(modelSelect);
            // Agrega los modelos como opciones al select
            for (var key in cars.trademark[trademarkValue]) {
                var modelOption = document.createElement("option");
                modelOption.value = key;
                modelOption.innerHTML = key;
                modelSelect.appendChild(modelOption);
            }
            //Create element: <label>, <input> about path (patente).
            var labelPath = document.createElement("label");
            var inputPath = document.createElement("input");
            var br1 = document.createElement("br");
            //Add the element <label><input> in html.
            formContainer.appendChild(br1);
            formContainer.appendChild(labelPath);
            labelPath.setAttribute("for", "path");
            labelPath.classList.add("label");
            labelPath.innerHTML = "Patente";
            formContainer.appendChild(inputPath);
            inputPath.id = "path";
            inputPath.setAttribute("name", "path");
            inputPath.size = 4;
            inputPath.maxLength = 7;
            inputPath.type = 'text';

            generateRestForm();
        }
        function generateRestForm() {
            /* Create elements: <h3> (Data's Driver), <label>, <input> (nombre completo, DNI, domicilio) */
            var h3Driver = document.createElement("h3");
            var fullNameLabel = document.createElement("label");
            var fullNameInput = document.createElement("input");
            var br3 = document.createElement("br");
            var DNILabel = document.createElement("label");
            var DNIInput = document.createElement("input");
            var spanDescriptionDNI = document.createElement("span");
            var br4 = document.createElement("br");
            var streetAdressLabel = document.createElement("label");
            var streetAdressInput = document.createElement("input");
            //Select form.
            var formDriver = document.getElementById("form-container");

            var title = '<u> Datos del chofer </u>'; //After concat for add in the html
            formDriver.appendChild(h3Driver);
            h3Driver.classList.add("title-data-driver");
            h3Driver.innerHTML = title;
            formDriver.appendChild(fullNameLabel);
            fullNameLabel.setAttribute("name", "fullName");
            fullNameLabel.classList.add("label");
            fullNameLabel.innerHTML = 'Nombre completo';
            formDriver.appendChild(fullNameInput);
            fullNameInput.id = 'fullName';
            fullNameInput.setAttribute("name", "fullName");
            fullNameInput.type = 'text';
            fullNameInput.required = true;
            formDriver.appendChild(br3);
            formDriver.appendChild(DNILabel);
            DNILabel.setAttribute("name", "dniDriver");
            DNILabel.classList.add("label");
            DNILabel.innerHTML = 'DNI';
            formDriver.appendChild(DNIInput);
            DNIInput.id = 'dniDriver';
            DNIInput.setAttribute("name", "dniDriver");
            DNIInput.type = 'text';
            DNIInput.required = true;
            formDriver.appendChild(spanDescriptionDNI);
            spanDescriptionDNI.innerHTML = 'Use ##.###.###';
            spanDescriptionDNI.classList.add("spanDescription");
            formDriver.appendChild(br4);
            formDriver.appendChild(streetAdressLabel);
            streetAdressLabel.setAttribute("name", "streetAdress");
            streetAdressLabel.classList.add("label");
            streetAdressLabel.innerHTML = 'Domicilio';
            formDriver.appendChild(streetAdressInput);
            streetAdressInput.setAttribute("name", "streetAdress");
            streetAdressInput.type = 'text';
            streetAdressInput.id = "streetDriver";

            /* Create the data's passenger: <h3> title, <label> <input> (nombre completo, dni, email).*/
            //Code:
            var h3PassengerTitle = document.createElement("h3");
            var titlePassenger = '<u> Datos del pasajero </u>';
            var fullNamePassengerLabel = document.createElement("label");
            var fullNamePassengerInput = document.createElement("input");
            var br5 = document.createElement("br");
            var DNIPassengerLabel = document.createElement("label");
            var DNIPassengerInput = document.createElement("input");
            var spanDNIPassenger = document.createElement("span");
            var br6 = document.createElement("br");
            var emailPassengerLabel = document.createElement("label");
            var emailPassengerInput = document.createElement("input");
            //Construction the html (continue).
            formDriver.appendChild(h3PassengerTitle);
            h3PassengerTitle.innerHTML = titlePassenger;
            h3PassengerTitle.classList.add("title-data-passenger");
            formDriver.appendChild(fullNamePassengerLabel);
            fullNamePassengerLabel.setAttribute("name", "passengerFullName");
            fullNamePassengerLabel.classList.add("label");
            fullNamePassengerLabel.innerHTML = 'Nombre Completo';
            formDriver.appendChild(fullNamePassengerInput);
            fullNamePassengerInput.id = "fullNamePassenger";
            fullNamePassengerInput.setAttribute("name", "passengerFullName");
            fullNamePassengerInput.type = 'text';
            fullNamePassengerInput.required = true;
            formDriver.appendChild(br5);
            formDriver.appendChild(DNIPassengerLabel);
            DNIPassengerLabel.setAttribute("name", "DNIPassenger");
            DNIPassengerLabel.classList.add("label");
            DNIPassengerLabel.innerHTML = 'DNI';
            formDriver.appendChild(DNIPassengerInput);
            DNIPassengerInput.id = "DNIPassenger";
            DNIPassengerInput.setAttribute("name", "DNIPassenger");
            DNIPassengerInput.type = 'text';
            DNIPassengerInput.required = true;
            formDriver.appendChild(spanDNIPassenger);
            spanDNIPassenger.classList.add("spanDescription");
            spanDNIPassenger.innerHTML = 'Use ##.###.###';
            formDriver.appendChild(br6);
            formDriver.appendChild(emailPassengerLabel);
            emailPassengerLabel.setAttribute("name", "emailPassenger");
            emailPassengerLabel.classList.add("label");
            emailPassengerLabel.innerHTML = 'E-mail';
            formDriver.appendChild(emailPassengerInput);
            emailPassengerInput.setAttribute("name", "emailPassenger");
            emailPassengerInput.id = 'emailPassenger';
            emailPassengerInput.type = 'text';
            emailPassengerInput.required = true;

            /* Create data's journey: <h3> title, <label> <input> (punto de encuentro, destino, distancia (km),
            tiempo estimado (min). Además se deberá especificar si el viaje será em CIUDAD, RUTA o MIXTO). */
            //Code:
            var h3JourneyTitle = document.createElement("h3");
            var titleJourney = '<u> Datos del viaje </u>';
            var originLabel = document.createElement("label");
            var originInput = document.createElement("input");
            var br7 = document.createElement("br");
            var distanceOriginLabel = document.createElement("label");
            var distanceOriginInput = document.createElement("input");
            var br18 = document.createElement("br");
            var originHourLabel = document.createElement("label");
            var originHourInput = document.createElement("input");
            var br8 = document.createElement("br")
            var destinationPlaceLabel = document.createElement("label");
            var destinationPlaceInput = document.createElement("input");
            var br9 = document.createElement("br");
            var distanceKMLabel = document.createElement("label");
            var distanceKMInput = document.createElement("input");
            var br10 = document.createElement("br");
            var estimatedTimeLabel = document.createElement("label");
            var estimatedTimeInput = document.createElement("input");
            var br11 = document.createElement("br");
            var journeyTypeLabel = document.createElement("label");
            var cityLabel = document.createElement("label");
            var journeyCityInput = document.createElement("input");
            var roadLabel = document.createElement("label");
            var journeyRoadInput = document.createElement("input");
            var mixedLabel = document.createElement("label");
            var journeyMixedInput = document.createElement("input");
            var br14 = document.createElement("br");
            var br16 = document.createElement("br");
            var tollLabel = document.createElement("label");
            var tollYesLabel = document.createElement("label");
            var tollYesInput = document.createElement("input");
            var tollNoLabel = document.createElement("label");
            var tollNoInput = document.createElement("input");
            var roundTripLabel = document.createElement("label");
            var goingLabel = document.createElement("label");
            var goingInput = document.createElement("input");
            var lapLabel = document.createElement("label");
            var lapInput = document.createElement("input");

            formDriver.appendChild(h3JourneyTitle);
            h3JourneyTitle.classList.add("title-data-journey");
            h3JourneyTitle.innerHTML = titleJourney;
            formDriver.appendChild(originLabel);
            originLabel.setAttribute("name", "originPlace");
            originLabel.classList.add("label");
            originLabel.innerHTML = 'Punto de orígen';
            formDriver.appendChild(originInput);
            originInput.id = "originInput";
            originInput.type = 'text';
            originInput.required = true;
            formDriver.appendChild(br7);
            formDriver.appendChild(distanceOriginLabel);
            distanceOriginLabel.classList.add("label");
            distanceOriginLabel.setAttribute("name", "distanceOrigin");
            distanceOriginLabel.innerHTML = "Distancia hasta P. de partida";
            formDriver.appendChild(distanceOriginInput);
            distanceOriginInput.setAttribute("name", "distanceOrigin");
            distanceOriginInput.id = "distanceOrigin";
            distanceOriginInput.type = "number";
            distanceOriginInput.required = true;
            formDriver.appendChild(br18);
            formDriver.appendChild(originHourLabel);
            originHourLabel.setAttribute("name", "originHour");
            originHourLabel.classList.add("label");
            originHourLabel.innerHTML = 'Hora de llegada al punto de partida';
            formDriver.appendChild(originHourInput);
            originHourInput.setAttribute("name", "originHour");
            originHourInput.id = "originHour";
            originHourInput.type = "time";
            formDriver.appendChild(br8);
            formDriver.appendChild(destinationPlaceLabel);
            destinationPlaceLabel.setAttribute("name", "destinationPlace");
            destinationPlaceLabel.classList.add("label");
            destinationPlaceLabel.innerHTML = 'Lugar de destino';
            formDriver.appendChild(destinationPlaceInput);
            destinationPlaceInput.setAttribute("name", "destinationPlace");
            destinationPlaceInput.id = "destinationPlace";
            destinationPlaceInput.type = 'text';
            destinationPlaceInput.required = true;
            formDriver.appendChild(br9);
            formDriver.appendChild(distanceKMLabel);
            distanceKMLabel.setAttribute("name", "distance");
            distanceKMLabel.classList.add("label");
            distanceKMLabel.innerHTML = 'Distancia calculada (en km)';
            formDriver.appendChild(distanceKMInput);
            distanceKMInput.id = "distance";
            distanceKMInput.type = "number";
            distanceKMInput.required = true;
            formDriver.appendChild(br10);
            formDriver.appendChild(estimatedTimeLabel);
            estimatedTimeLabel.setAttribute("name", "estimatedTime");
            estimatedTimeLabel.classList.add("label");
            estimatedTimeLabel.innerHTML = 'Tiempo de viaje estimado';
            formDriver.appendChild(estimatedTimeInput);
            estimatedTimeInput.setAttribute("name", "estimatedTime");
            estimatedTimeInput.id = "estimatedTime";
            formDriver.appendChild(br11);
            formDriver.appendChild(tollLabel);
            tollLabel.setAttribute("name", "toll");
            tollLabel.classList.add("label");
            tollLabel.innerHTML = "Peaje/s";
            formDriver.appendChild(tollYesLabel);
            tollYesLabel.setAttribute("name", "toll");
            tollYesLabel.style.padding = "15px";
            tollYesLabel.classList.add("description");
            tollYesLabel.innerHTML = "Si";
            tollYesLabel.appendChild(tollYesInput);
            tollYesInput.setAttribute("name", "toll");
            tollYesInput.type = "radio";
            tollYesInput.id = "toll";
            tollYesInput.classList.add("tollYes")
            tollYesInput.value = 'yes';
            formDriver.appendChild(tollNoLabel);
            tollNoLabel.setAttribute("name", "toll");
            tollNoLabel.style.padding = "15px";
            tollNoLabel.classList.add("description");
            tollNoLabel.innerHTML = "No";
            tollNoLabel.appendChild(tollNoInput);
            tollNoInput.setAttribute("name", "toll");
            tollNoInput.type = "radio";
            tollNoInput.id = "toll";
            tollNoInput.classList.add("tollNo");
            tollNoInput.value = 'no';

            document.querySelector(".tollYes").addEventListener("click", function () {
                var br15 = document.createElement("br");
                var labelChecksTolls = document.createElement("label");
                formDriver.appendChild(br15);
                formDriver.appendChild(labelChecksTolls);
                labelChecksTolls.setAttribute("name", "checkTolls")
                labelChecksTolls.classList.add("label");
                labelChecksTolls.innerHTML = "Concesionarias de peajes a usar";
                for (var keyToll in tolls) {
                    var brCheckToll = document.createElement("br");
                    formDriver.appendChild(brCheckToll);
                    var labelCheckToll = document.createElement("label");
                    var inputCheckToll = document.createElement("input");
                    formDriver.appendChild(labelCheckToll);
                    labelCheckToll.classList.add("description");
                    labelCheckToll.setAttribute("name", "checkTolls");
                    labelCheckToll.innerHTML = keyToll;
                    labelCheckToll.appendChild(inputCheckToll);
                    inputCheckToll.setAttribute("name", "checkTolls");
                    inputCheckToll.type = "checkbox";
                    inputCheckToll.value = keyToll;
                    inputCheckToll.id = "checkTolls";
                }
                formDriver.appendChild(br14);
                var labelRushHour = document.createElement("label");
                var labelRushHourYes = document.createElement("label");
                var inputRushHourYes = document.createElement("input");
                var labelRushHourNo = document.createElement("label");
                var inputRushHourNo = document.createElement("input");
                var br17 = document.createElement("br");
                formDriver.appendChild(labelRushHour);
                labelRushHour.classList.add("label");
                labelRushHour.innerHTML = "Hora";
                labelRushHour.setAttribute("name", "rushHour");
                formDriver.appendChild(labelRushHourYes);
                labelRushHourYes.classList.add("description");
                labelRushHourYes.innerHTML = "Pico";
                labelRushHourYes.style.padding = "15px";
                labelRushHourYes.setAttribute("name", "rushHour");
                labelRushHourYes.appendChild(inputRushHourYes);
                inputRushHourYes.setAttribute("name", "rushHour");
                inputRushHourYes.id = "rushHour";
                inputRushHourYes.type = "radio";
                inputRushHourYes.value = "Rush Hour";
                formDriver.appendChild(labelRushHourNo);
                labelRushHourNo.setAttribute("name", "rushHour");
                labelRushHourNo.classList.add("description");
                labelRushHourNo.innerHTML = "No Pico";
                labelRushHourNo.style.padding = "15px";
                labelRushHourNo.appendChild(inputRushHourNo);
                inputRushHourNo.setAttribute("name", "rushHour");
                inputRushHourNo.type = "radio";
                inputRushHourNo.id = "rushHour";
                inputRushHourNo.value = "Non Peak Hour";
                formDriver.appendChild(br17);
                formDriver.appendChild(journeyTypeLabel);
                journeyTypeLabel.setAttribute("name", "journeyType");
                journeyTypeLabel.classList.add("label");
                journeyTypeLabel.innerHTML = 'Tipo de viaje';
                formDriver.appendChild(cityLabel);
                cityLabel.style.padding = "15px";
                cityLabel.classList.add("description");
                cityLabel.innerHTML = 'Ciudad';
                cityLabel.appendChild(journeyCityInput);
                journeyCityInput.setAttribute("name", "journeyType");
                journeyCityInput.type = "radio";
                journeyCityInput.id = "journeyType";
                journeyCityInput.value = 'City';
                formDriver.appendChild(roadLabel);
                roadLabel.style.padding = "15px";
                roadLabel.classList.add("description");
                roadLabel.innerHTML = 'Ruta';
                roadLabel.appendChild(journeyRoadInput);
                journeyRoadInput.setAttribute("name", "journeyType");
                journeyRoadInput.type = "radio";
                journeyRoadInput.id = "journeyType";
                journeyRoadInput.value = 'Road';
                formDriver.appendChild(mixedLabel);
                mixedLabel.style.padding = "15px";
                mixedLabel.classList.add("description");
                mixedLabel.innerHTML = 'Mixto';
                mixedLabel.appendChild(journeyMixedInput);
                journeyMixedInput.setAttribute("name", "journeyType");
                journeyMixedInput.type = "radio";
                journeyMixedInput.id = "journeyType";
                journeyMixedInput.value = "Mixed";
                formDriver.appendChild(br16);
                formDriver.appendChild(roundTripLabel);
                roundTripLabel.setAttribute("name", "roundTrip");
                roundTripLabel.classList.add("label");
                roundTripLabel.innerHTML = 'Ida/vuelta';
                formDriver.appendChild(goingLabel);
                goingLabel.style.padding = "15px";
                goingLabel.setAttribute("name", "rounTrip");
                goingLabel.classList.add("description");
                goingLabel.innerHTML = 'Ida';
                goingLabel.appendChild(goingInput);
                goingInput.setAttribute("name", "roundTrip");
                goingInput.type = "radio";
                goingInput.id = "roundTrip";
                goingInput.value = "going";
                formDriver.appendChild(lapLabel);
                lapLabel.style.padding = "15px";
                lapLabel.setAttribute("name", "roundTrip");
                lapLabel.classList.add("description");
                lapLabel.innerHTML = 'Ida/vuelta';
                lapLabel.appendChild(lapInput);
                lapInput.setAttribute("name", "roundTrip");
                lapInput.type = "radio";
                lapInput.id = "roundTrip";
                lapInput.value = "goingAndLap";

                /* Create a serviceStation: <h3> Title Service Station, <label><select>
               <option> Nombre de petrolera. <br><label><select><option> Tipo de nafta*/
                var typeGasoline = ["Nafta SÚPER", "Nafta PREMIUM"];
                var h3serviceStation = document.createElement("h3");
                var titleServiceStation = "<u> Datos de estación de servicio </u>";
                var labelNameServiceStation = document.createElement("label");
                var selectServiceStation = document.createElement("select");
                var br12 = document.createElement("br");
                var labelTypeGasoline = document.createElement("label");
                var selectTypeGasoline = document.createElement("select");

                formDriver.appendChild(h3serviceStation);
                h3serviceStation.innerHTML = titleServiceStation;
                h3serviceStation.classList.add("title-data-serviceStation");
                formDriver.appendChild(labelNameServiceStation);
                labelNameServiceStation.classList.add("label");
                labelNameServiceStation.setAttribute("name", "serviceStation");
                labelNameServiceStation.innerHTML = 'Estación de servicio';
                formDriver.appendChild(selectServiceStation);
                selectServiceStation.setAttribute("name", "serviceStation");
                selectServiceStation.id = "serviceStation";
                for (var key in serviceStations) {
                    var optionsService = document.createElement("option");
                    optionsService.value = key;
                    optionsService.innerHTML = key;
                    selectServiceStation.appendChild(optionsService);
                }
                formDriver.appendChild(br12);
                formDriver.appendChild(labelTypeGasoline);
                labelTypeGasoline.classList.add("label");
                labelTypeGasoline.setAttribute("name", "typeGasoline");
                labelTypeGasoline.innerHTML = 'Tipo de Nafta';
                formDriver.appendChild(selectTypeGasoline);
                selectTypeGasoline.setAttribute("name", "typeGasoline");
                selectTypeGasoline.id = "typeGasoline";
                typeGasoline.forEach((typeGasoline) => {
                    var optionTypeGasoline = document.createElement("option");
                    selectTypeGasoline.appendChild(optionTypeGasoline);
                    optionTypeGasoline.value = typeGasoline;
                    optionTypeGasoline.innerHTML = typeGasoline;
                });
                /* Create a button. After addEventListenner in the file calculator.js .*/
                //Code:
                var br13 = document.createElement("br");
                var buttonValidation = document.createElement("button");

                formDriver.appendChild(br13);
                formDriver.appendChild(buttonValidation);
                buttonValidation.textContent = 'Continuar';
                buttonValidation.style.padding = "10px";
                buttonValidation.setAttribute("class", "continue");

                /* Create a button cleaner (This button delete the value)*/
                var buttonDelete = document.createElement("button");
                formDriver.appendChild(buttonDelete);
                buttonDelete.textContent = 'Borrar';
                buttonDelete.style.padding = "10px";
                buttonDelete.setAttribute("class", "delete");

                withCalculatorRushHour();
                function withCalculatorRushHour() {
                    // Calculator--------------------------------------------------------------------------------------------
                    var modelInput = document.getElementById("model");//Elemento Modelo.
                    var pathInput = document.getElementById("path");//Elemento Patente.
                    //Create a VARIABLES for save the values about Data Driver......................
                    var fullNameInput = document.getElementById("fullName");//Elemento Nombre comleto (chofer).
                    var DNIInput = document.getElementById("dniDriver");//Elemento DNI
                    var streetDriverInput = document.getElementById("streetDriver");//Elemento Dirección calle.
                    //Create a VARIABLES for save the values about Passenger........................
                    var fullNamePassengerInput = document.getElementById("fullNamePassenger");//Elemento nombre completo pasajero.
                    var DNIPassengerInput = document.getElementById("DNIPassenger");//Elemento DNI pasajero.
                    var emailPassengerInput = document.getElementById("emailPassenger");//Elemento email del pasajero.
                    //Create a VARIABLES for save the values about Data Journey...............................
                    var originInput = document.getElementById("originInput");//Elemento input de Punto de orígen.
                    var distanceOrigin = document.querySelector("#distanceOrigin");
                    var originHourInput = document.getElementById("originHour");//Elemento de Hora de LLegada al P. de orígen.
                    var destinationPlaceInput = document.getElementById("destinationPlace");//Elemento input de Destino.
                    var distanceKmInput = document.getElementById("distance");//Elemento input de Distancia.
                    var estimatedTimeInput = document.getElementById("estimatedTime");//Elemento input de Tiempo Estimado.
                    var journeyTypeInputRadio = document.querySelectorAll("#journeyType");//Elemento input radio de tipo de ruta (ciudad).
                    var roundTrips = document.querySelectorAll("#roundTrip");
                    //Create a VARIABLES for save the values about Service station........................................
                    var serviceStationSelectInput = document.getElementById("serviceStation");//Elemento select de nombre de Estación de Servicio.
                    var typeGasolineSelectInput = document.getElementById("typeGasoline");//Elemento select de tipo de nafta.
                    //Create a VARIABLES for button.AddEventListener.....................................................
                    var buttonContinue = document.querySelector(".continue");//Elemento botón para continuar.
                    //var buttonDelete = document.querySelector(".delete");//Elemento botón para borrar/restaurar formulario.
                    var buttonDelete = document.querySelector(".delete");
                    //buttonContinue.addEventListener("click", f(){})/////////////////////////////////////////////////////////////
                    buttonContinue.addEventListener("click", function () {
                        //First create a VARIABLES for save in a function
                        //DATA CAR --------------------------------------------------------------------------------------------
                        var modelValue = modelInput.value;

                        var pathValue = pathInput.value;
                        pathValue = pathValue.toUpperCase();

                        //DATA DRIVER -----------------------------------------------------------------------------------------
                        var fullNameValue = fullNameInput.value;
                        fullNameValue = fullNameValue.toUpperCase();

                        var DNIDriverValue = DNIInput.value;

                        var streetDriverValue = streetDriverInput.value;
                        streetDriverValue = streetDriverValue.toUpperCase();

                        //DATA PASSENGER--------------------------------------------------------------------------------------
                        var fullNamePassengerValue = fullNamePassengerInput.value;
                        fullNamePassengerValue = fullNamePassengerValue.toUpperCase();

                        var DNIPassengerValue = DNIPassengerInput.value;

                        var emailPassengerValue = emailPassengerInput.value;

                        //DATA JOURNEY------------------------------------------------------------------------------------------
                        var originValue = originInput.value;
                        originValue = originValue.toUpperCase();

                        var distanceOValue = parseFloat(distanceOrigin.value);
                        if(distanceOValue == undefined){
                            distanceOValue = 0
                        } else {
                            distanceOValue = distanceOValue;
                        }


                        var originHourValue = originHourInput.value;

                        var destinatationPlaceValue = destinationPlaceInput.value;
                        destinatationPlaceValue = destinatationPlaceValue.toUpperCase();

                        var distanceValue = distanceKmInput.value;
                        var estimatedTimeValue = estimatedTimeInput.value;

                        //inputsRadiosTolls-----------------------------------------------
                        var inputRadiosTolls = document.querySelectorAll("#toll");
                        for(var i = 0; i < inputRadiosTolls.length; i++){
                            if(inputRadiosTolls[i].checked){
                                var valueRadioToll = inputRadiosTolls[i].value;
                            }
                        }

                        //inputsRushHourValues----------------------------------------------
                        var inputsRushHourValues = document.querySelectorAll("#rushHour");
                        for(var i = 0; i < inputsRushHourValues.length; i++){
                            if(inputsRushHourValues[i].checked){
                                var inputRushHourValue = inputsRushHourValues[i].value;
                            }
                        }

                        //inputCheckTolls..............
                        var inputsChecksTolls = document.getElementsByName("checkTolls");
                        var ArrayTolls = [];
                        for(var i = 0; i < inputsChecksTolls.length; i++){
                            if(inputsChecksTolls[i].checked){
                                ArrayTolls.push(inputsChecksTolls[i].value);//Push the checksbox checked.
                            }
                        }
                        tollsValue();
                        function tollsValue() {
                            var totalPriceToll = 0;
                            for(var i = 0; i < ArrayTolls.length; i++){
                                var tollPrice = tolls[ArrayTolls[i]][inputRushHourValue];
                                totalPriceToll = totalPriceToll + tollPrice;
                            }
                            totalPriceToll = totalPriceToll * 2;
                            return totalPriceToll;
                        }

                        //--------------------------------------------------------------------

                        for (var i = 0; i < journeyTypeInputRadio.length; i++) {
                            if (journeyTypeInputRadio[i].checked) {
                                var journeyTypeValue = journeyTypeInputRadio[i].value;
                            }
                        }

                        for (var i = 0; i < roundTrips.length; i++) {
                            if (roundTrips[i].checked) {
                                var roundTripValue = roundTrips[i].value;
                            }
                        }

                        //DATA SERVICES STATIONS---------------------------------------------------------------------------------
                        var stationServiceValue = serviceStationSelectInput.value;
                        var typeGasolineValue = typeGasolineSelectInput.value;

                        totalLiters();
                        function totalLiters() {
                            let totalLiters = ((distanceValue + distanceOValue) * cars.trademark[camelCaseTrademark][modelValue][journeyTypeValue] / 100);
                            totalLiters = totalLiters.toFixed(3);
                            return totalLiters;
                        }

                        totalPrice();
                        function totalPrice() {
                            let totalPrice = totalLiters() * serviceStations[stationServiceValue][typeGasolineValue];
                            totalPrice = parseFloat(totalPrice.toFixed(2));
                            return totalPrice;
                        }

                        valueMinutes();
                        var minutesPrice = 50;
                        function valueMinutes() {
                            var totalPriceMin = minutesPrice * estimatedTimeValue;
                            totalPriceMin = parseFloat(totalPriceMin.toFixed(2));
                            return totalPriceMin;
                        }

                        totalAmount();

                        function totalAmount() {
                            var total = totalPrice() + valueMinutes() + tollsValue();
                            total = parseFloat(total.toFixed(2));
                            return total;
                        }

                        //Create a elements----------------------------------------------------------------------------------------
                        var outputContainer = document.getElementById("output-container");
                        var h3ReservationData = document.createElement("h3");
                        //Data Car---------------------------------------------------------------------------
                        var h4DataCar = document.createElement("h4");
                        var pTrademaker = document.createElement("p");
                        var pModel = document.createElement("p");
                        var pPath = document.createElement("p");
                        //Data Driver--------------------------------------------------------------------------
                        var h4DataDriver = document.createElement("h4");
                        var pFullNameDriver = document.createElement("p");
                        var pDNIDriver = document.createElement("p");
                        var pStreedDriver = document.createElement("p");
                        //Data Passenger------------------------------------------------------------------------
                        var h4DataPassenger = document.createElement("h4");
                        var pFullNamePassenger = document.createElement("p");
                        var pDNIPassenger = document.createElement("p");
                        var pEmailPassenger = document.createElement("p");
                        //Data Journey---------------------------------------------------------------------------
                        var h4DataJourney = document.createElement("h4");
                        var pOrigin = document.createElement("p");
                        var pDistanceO = document.createElement("p");
                        var pOriginHour = document.createElement("p");
                        var pDestinatationPlace = document.createElement("p");
                        var pDistance = document.createElement("p");
                        var pEstimatedTime = document.createElement("p");
                        var pJourneyType = document.createElement("p");
                        var pRoundTrip = document.createElement("p");

                        var h4TollTableTitle = document.createElement("h4");
                        var tollTable = document.createElement("table");
                        var trTollDescription = document.createElement("tr");
                        var tollsDescription = ["Consecionaria", "Tarifa", "Reembolso ida y vuelta"];
                        var ptotalTolls = document.createElement("p");
                        //Budget------------------------------------------------------------------------------------
                        var h3Budget = document.createElement("h3");
                        var pTotalLiters = document.createElement("p");
                        var h4AmountTable = document.createElement("h4");
                        var amountTable = ["Estación de servicio", "Combustible", "Valor x Lt", "Litros totales", "Importe total"];
                        var table = document.createElement("table");
                        var trDescriptionFile = document.createElement("tr");
                        var trValuesFIle = document.createElement("tr");
                        var h4EstimatedTime = document.createElement("h4");
                        var tableEstimatedTime = document.createElement("table");
                        var trEstimatedTimeDescription = document.createElement("tr");
                        var trEstimatedTimeValue = document.createElement("tr");
                        var amountTable2 = ["Precio x min", "Cantidad de minutos", "Importe total"];
                        var h4AmountTotal = document.createElement("h4");
                        //------------Create a button print-------------------------------------------------------------------------
                        var buttonPrint = document.createElement("button");
                        //------------------------------Now creat html---------------------------------------------------------------
                        outputContainer.appendChild(h3ReservationData);
                        h3ReservationData.innerHTML = "<u> Datos de la reserva </u>";
                        h3ReservationData.classList.add("positionCenter");
                        outputContainer.appendChild(h4DataCar);
                        h4DataCar.innerHTML = "<u> Datos del vehículo </u>";
                        h4DataCar.classList.add("title-data-car");
                        outputContainer.appendChild(pTrademaker);
                        pTrademaker.innerHTML = `Marca: ${trademarkValue}`;
                        outputContainer.appendChild(pModel);
                        pModel.innerHTML = `Modelo: ${modelValue}`;
                        outputContainer.appendChild(pPath);
                        pPath.innerHTML = `Patente: ${pathValue}`;

                        outputContainer.appendChild(h4DataDriver);
                        h4DataDriver.innerHTML = "<u> Datos del conductor </u>";
                        h4DataDriver.classList.add("title-data-driver");
                        outputContainer.appendChild(pFullNameDriver);
                        pFullNameDriver.innerHTML = `Nombre completo: ${fullNameValue}`;
                        outputContainer.appendChild(pDNIDriver);
                        pDNIDriver.innerHTML = `D.N.I: ${DNIDriverValue}`;
                        outputContainer.appendChild(pStreedDriver);
                        pStreedDriver.innerHTML = `Domicilio: ${streetDriverValue}`;

                        outputContainer.appendChild(h4DataPassenger);
                        h4DataPassenger.innerHTML = "<u> Datos del pasajero </u>";
                        h4DataPassenger.classList.add("title-data-passenger");
                        outputContainer.appendChild(pFullNamePassenger);
                        pFullNamePassenger.innerHTML = `Nombre completo: ${fullNamePassengerValue}`;
                        outputContainer.appendChild(pDNIPassenger);
                        pDNIPassenger.innerHTML = `D.N.I: ${DNIPassengerValue}`;
                        outputContainer.appendChild(pEmailPassenger);
                        pEmailPassenger.innerHTML = `Correo electrónico: ${emailPassengerValue}`;

                        outputContainer.appendChild(h4DataJourney);
                        h4DataJourney.innerHTML = "<u> Datos del viaje </u>";
                        h4DataJourney.classList.add("title-data-journey");
                        outputContainer.appendChild(pOrigin);
                        pOrigin.innerHTML = `Punto de orígen: ${originValue}`;
                        outputContainer.appendChild(pDistanceO);
                        pDistanceO.innerHTML = `Distancia a P. de Orígen: ${distanceOValue} km`;
                        outputContainer.appendChild(pOriginHour);
                        pOriginHour.innerHTML = `Hora de llegada al punto de partida: ${originHourValue}`;
                        outputContainer.appendChild(pDestinatationPlace);
                        pDestinatationPlace.innerHTML = `Punto de destino: ${destinatationPlaceValue}`;
                        outputContainer.appendChild(pDistance);
                        pDistance.innerHTML = `Distancia: ${distanceValue} km`;
                        outputContainer.appendChild(pEstimatedTime);
                        pEstimatedTime.innerHTML = `Tiempo de viaje estimado: ${estimatedTimeValue} min`;
                        outputContainer.appendChild(pJourneyType);
                        if (journeyTypeValue === "Road") {
                            var JourneyEspValue = "Ruta";
                        }
                        if (journeyTypeValue === "City") {
                            var JourneyEspValue = "Ciudad";
                        }
                        if (journeyTypeValue === "Mixed") {
                            var JourneyEspValue = "Mixto (Ruta-Ciudad)";
                        };
                        pJourneyType.innerHTML = `Lugar de manejo: ${JourneyEspValue}`;
                        outputContainer.appendChild(pRoundTrip);

                        if (roundTripValue === "going") {
                            var translateRoundTrip = "Ida";
                        } else
                            if (roundTripValue === "goingAndLap") {
                                var translateRoundTrip = "Ida y vuelta";
                            }
                        pRoundTrip.innerHTML = `Ida / Vuelta: ${translateRoundTrip}`;

                        outputContainer.appendChild(h3Budget);
                        h3Budget.innerHTML = "Presupuesto"
                        h3Budget.classList.add("positionCenter");
                        outputContainer.appendChild(pTotalLiters);

                        pTotalLiters.innerHTML = `Total de litros a consumir: ${totalLiters()} lts`;
                        outputContainer.appendChild(h4AmountTable);
                        h4AmountTable.classList.add("title");
                        h4AmountTable.innerHTML = "<u> Tabla de importe valor de nafta </u>";
                        outputContainer.appendChild(table);
                        table.appendChild(trDescriptionFile);
                        amountTable.forEach((description) => {
                            var thDescription = document.createElement("th");
                            trDescriptionFile.appendChild(thDescription);
                            thDescription.innerHTML = description;
                        })
                        table.appendChild(trValuesFIle);

                        for (var i = 0; i < amountTable.length; i++) {
                            var tdValues = document.createElement("td");
                            trValuesFIle.appendChild(tdValues);
                            if (i == 0) {
                                tdValues.innerHTML = stationServiceValue;
                            } else
                                if (i == 1) {
                                    tdValues.innerHTML = typeGasolineValue;
                                } else
                                    if (i == 2) {
                                        tdValues.innerHTML = `$${serviceStations[stationServiceValue][typeGasolineValue]}`;
                                    } else
                                        if (i == 3) {
                                            tdValues.textContent = `${totalLiters()} lts`;
                                        } else
                                            if (i == 4) {
                                                tdValues.textContent = `$${totalPrice()}`;
                                            }
                                        }

                        outputContainer.appendChild(h4EstimatedTime);
                        h4EstimatedTime.innerHTML = "<u> Tabla de importe minutos </u>";
                        h4EstimatedTime.classList.add("title");
                        outputContainer.appendChild(tableEstimatedTime);
                        tableEstimatedTime.appendChild(trEstimatedTimeDescription);
                        amountTable2.forEach((description2) => {
                            var thEstimatedDescription = document.createElement("th");
                            trEstimatedTimeDescription.appendChild(thEstimatedDescription);
                            thEstimatedDescription.innerHTML = description2;
                        })
                        tableEstimatedTime.appendChild(trEstimatedTimeValue);
                        for (var i = 0; i < amountTable2.length; i++) {
                            var tdEstimatedTimeValue = document.createElement("td");
                            trEstimatedTimeValue.appendChild(tdEstimatedTimeValue);
                            if (i == 0) {
                                tdEstimatedTimeValue.innerHTML = `$${minutesPrice}`;
                            } else
                                if (i == 1) {
                                    tdEstimatedTimeValue.innerHTML = `${estimatedTimeValue} min`;
                                } else
                                    if (i == 2) {
                                        tdEstimatedTimeValue.innerHTML = `$${valueMinutes()}`;
                                    }
                        }

                        outputContainer.appendChild(h4TollTableTitle);
                        h4TollTableTitle.classList.add("title");
                        h4TollTableTitle.innerHTML = "<u>Tabla de Importe de Peaje/s</u>";
                        outputContainer.appendChild(tollTable);
                        tollTable.appendChild(trTollDescription);
                        tollsDescription.forEach((description3) => {
                            var thTollDescription = document.createElement("th");
                            trTollDescription.appendChild(thTollDescription);
                            thTollDescription.innerHTML = description3;
                        })
                        for(var i = 0; i < ArrayTolls.length; i++){
                            var trValuesToll = document.createElement("tr");
                            tollTable.appendChild(trValuesToll);
                            for(var j = 0; j < tollsDescription.length; j++){
                                var tdTollValue = document.createElement("td");
                                trValuesToll.appendChild(tdTollValue);
                                if(j == 0){
                                tdTollValue.innerHTML = `${ArrayTolls[i]}`;
                                } else
                                if(j == 1){
                                tdTollValue.innerHTML = `$ ${tolls[ArrayTolls[i]][inputRushHourValue]}`;
                                } else
                                if(j == 2){
                                var totalToll = tolls[ArrayTolls[i]][inputRushHourValue] * 2;
                                tdTollValue.innerHTML = `$ ${totalToll}`;
                                }
                            }
                        }
                        outputContainer.appendChild(ptotalTolls);
                        ptotalTolls.innerHTML = `Total peaje: $ ${tollsValue()}`;

                        outputContainer.appendChild(h4AmountTotal);
                        h4AmountTotal.classList.add("title");
                        totalAmountFinally();
                        function totalAmountFinally() {
                            if (roundTripValue === "going") {
                                return h4AmountTotal.innerHTML = "<u> Total a pagar IDA: </u> $ " + totalAmount() + "  (" + totalPrice() + " + " + valueMinutes() + " + " + tollsValue() + ")";
                            } else
                                if (roundTripValue === "goingAndLap") {
                                    return h4AmountTotal.innerHTML = "<u> Total a pagar IDA/VUELTA: </u> $ " + totalAmount() * 2 + "  (" + totalPrice() + " + " + valueMinutes() + " + " + tollsValue() + ") x 2";
                                }
                        }
                        outputContainer.appendChild(buttonPrint);
                        buttonPrint.setAttribute("class", "print");
                        buttonPrint.innerHTML = "Imprimir";

                        buttonPrint.addEventListener("click", function () {
                            window.print()
                        })
                    });

                    window.addEventListener('keydown', function(e){
                        if(e.key === 'Enter'){
                            //First create a VARIABLES for save in a function
                        //DATA CAR --------------------------------------------------------------------------------------------
                        var modelValue = modelInput.value;

                        var pathValue = pathInput.value;
                        pathValue = pathValue.toUpperCase();

                        //DATA DRIVER -----------------------------------------------------------------------------------------
                        var fullNameValue = fullNameInput.value;
                        fullNameValue = fullNameValue.toUpperCase();

                        var DNIDriverValue = DNIInput.value;

                        var streetDriverValue = streetDriverInput.value;
                        streetDriverValue = streetDriverValue.toUpperCase();

                        //DATA PASSENGER--------------------------------------------------------------------------------------
                        var fullNamePassengerValue = fullNamePassengerInput.value;
                        fullNamePassengerValue = fullNamePassengerValue.toUpperCase();

                        var DNIPassengerValue = DNIPassengerInput.value;

                        var emailPassengerValue = emailPassengerInput.value;

                        //DATA JOURNEY------------------------------------------------------------------------------------------
                        var originValue = originInput.value;
                        originValue = originValue.toUpperCase();

                        var distanceOValue = parseFloat(distanceOrigin.value);
                        if(distanceOValue == undefined){
                            distanceOValue = 0
                        } else {
                            distanceOValue = distanceOValue;
                        }


                        var originHourValue = originHourInput.value;

                        var destinatationPlaceValue = destinationPlaceInput.value;
                        destinatationPlaceValue = destinatationPlaceValue.toUpperCase();

                        var distanceValue = distanceKmInput.value;
                        var estimatedTimeValue = estimatedTimeInput.value;

                        //inputsRadiosTolls-----------------------------------------------
                        var inputRadiosTolls = document.querySelectorAll("#toll");
                        for(var i = 0; i < inputRadiosTolls.length; i++){
                            if(inputRadiosTolls[i].checked){
                                var valueRadioToll = inputRadiosTolls[i].value;
                            }
                        }

                        //inputsRushHourValues----------------------------------------------
                        var inputsRushHourValues = document.querySelectorAll("#rushHour");
                        for(var i = 0; i < inputsRushHourValues.length; i++){
                            if(inputsRushHourValues[i].checked){
                                var inputRushHourValue = inputsRushHourValues[i].value;
                            }
                        }

                        //inputCheckTolls..............
                        var inputsChecksTolls = document.getElementsByName("checkTolls");
                        var ArrayTolls = [];
                        for(var i = 0; i < inputsChecksTolls.length; i++){
                            if(inputsChecksTolls[i].checked){
                                ArrayTolls.push(inputsChecksTolls[i].value);//Push the checksbox checked.
                            }
                        }
                        tollsValue();
                        function tollsValue() {
                            var totalPriceToll = 0;
                            for(var i = 0; i < ArrayTolls.length; i++){
                                var tollPrice = tolls[ArrayTolls[i]][inputRushHourValue];
                                totalPriceToll = totalPriceToll + tollPrice;
                            }
                            totalPriceToll = totalPriceToll * 2;
                            return totalPriceToll;
                        }

                        //--------------------------------------------------------------------

                        for (var i = 0; i < journeyTypeInputRadio.length; i++) {
                            if (journeyTypeInputRadio[i].checked) {
                                var journeyTypeValue = journeyTypeInputRadio[i].value;
                            }
                        }

                        for (var i = 0; i < roundTrips.length; i++) {
                            if (roundTrips[i].checked) {
                                var roundTripValue = roundTrips[i].value;
                            }
                        }

                        //DATA SERVICES STATIONS---------------------------------------------------------------------------------
                        var stationServiceValue = serviceStationSelectInput.value;
                        var typeGasolineValue = typeGasolineSelectInput.value;

                        totalLiters();
                        function totalLiters() {
                            let totalLiters = ((distanceValue + distanceOValue) * cars.trademark[camelCaseTrademark][modelValue][journeyTypeValue] / 100);
                            totalLiters = totalLiters.toFixed(3);
                            return totalLiters;
                        }

                        totalPrice();
                        function totalPrice() {
                            let totalPrice = totalLiters() * serviceStations[stationServiceValue][typeGasolineValue];
                            totalPrice = parseFloat(totalPrice.toFixed(2));
                            return totalPrice;
                        }

                        valueMinutes();
                        var minutesPrice = 50;
                        function valueMinutes() {
                            var totalPriceMin = minutesPrice * estimatedTimeValue;
                            totalPriceMin = parseFloat(totalPriceMin.toFixed(2));
                            return totalPriceMin;
                        }

                        totalAmount();

                        function totalAmount() {
                            var total = totalPrice() + valueMinutes() + tollsValue();
                            total = parseFloat(total.toFixed(2));
                            return total;
                        }

                        //Create a elements----------------------------------------------------------------------------------------
                        var outputContainer = document.getElementById("output-container");
                        var h3ReservationData = document.createElement("h3");
                        //Data Car---------------------------------------------------------------------------
                        var h4DataCar = document.createElement("h4");
                        var pTrademaker = document.createElement("p");
                        var pModel = document.createElement("p");
                        var pPath = document.createElement("p");
                        //Data Driver--------------------------------------------------------------------------
                        var h4DataDriver = document.createElement("h4");
                        var pFullNameDriver = document.createElement("p");
                        var pDNIDriver = document.createElement("p");
                        var pStreedDriver = document.createElement("p");
                        //Data Passenger------------------------------------------------------------------------
                        var h4DataPassenger = document.createElement("h4");
                        var pFullNamePassenger = document.createElement("p");
                        var pDNIPassenger = document.createElement("p");
                        var pEmailPassenger = document.createElement("p");
                        //Data Journey---------------------------------------------------------------------------
                        var h4DataJourney = document.createElement("h4");
                        var pOrigin = document.createElement("p");
                        var pDistanceO = document.createElement("p");
                        var pOriginHour = document.createElement("p");
                        var pDestinatationPlace = document.createElement("p");
                        var pDistance = document.createElement("p");
                        var pEstimatedTime = document.createElement("p");
                        var pJourneyType = document.createElement("p");
                        var pRoundTrip = document.createElement("p");

                        var h4TollTableTitle = document.createElement("h4");
                        var tollTable = document.createElement("table");
                        var trTollDescription = document.createElement("tr");
                        var tollsDescription = ["Consecionaria", "Tarifa", "Reembolso ida y vuelta"];
                        var ptotalTolls = document.createElement("p");
                        //Budget------------------------------------------------------------------------------------
                        var h3Budget = document.createElement("h3");
                        var pTotalLiters = document.createElement("p");
                        var h4AmountTable = document.createElement("h4");
                        var amountTable = ["Estación de servicio", "Combustible", "Valor x Lt", "Litros totales", "Importe total"];
                        var table = document.createElement("table");
                        var trDescriptionFile = document.createElement("tr");
                        var trValuesFIle = document.createElement("tr");
                        var pTableDescription = document.createElement("p");
                        var h4EstimatedTime = document.createElement("h4");
                        var tableEstimatedTime = document.createElement("table");
                        var trEstimatedTimeDescription = document.createElement("tr");
                        var trEstimatedTimeValue = document.createElement("tr");
                        var amountTable2 = ["Precio x min", "Cantidad de minutos", "Importe total"];
                        var h4AmountTotal = document.createElement("h4");
                        //------------Create a button print-------------------------------------------------------------------------
                        var buttonPrint = document.createElement("button");
                        //------------------------------Now creat html---------------------------------------------------------------
                        outputContainer.appendChild(h3ReservationData);
                        h3ReservationData.innerHTML = "<u> Datos de la reserva </u>";
                        h3ReservationData.classList.add("positionCenter");
                        outputContainer.appendChild(h4DataCar);
                        h4DataCar.innerHTML = "<u> Datos del vehículo </u>";
                        h4DataCar.classList.add("title-data-car");
                        outputContainer.appendChild(pTrademaker);
                        pTrademaker.innerHTML = `Marca: ${trademarkValue}`;
                        outputContainer.appendChild(pModel);
                        pModel.innerHTML = `Modelo: ${modelValue}`;
                        outputContainer.appendChild(pPath);
                        pPath.innerHTML = `Patente: ${pathValue}`;

                        outputContainer.appendChild(h4DataDriver);
                        h4DataDriver.innerHTML = "<u> Datos del conductor </u>";
                        h4DataDriver.classList.add("title-data-driver");
                        outputContainer.appendChild(pFullNameDriver);
                        pFullNameDriver.innerHTML = `Nombre completo: ${fullNameValue}`;
                        outputContainer.appendChild(pDNIDriver);
                        pDNIDriver.innerHTML = `D.N.I: ${DNIDriverValue}`;
                        outputContainer.appendChild(pStreedDriver);
                        pStreedDriver.innerHTML = `Domicilio: ${streetDriverValue}`;

                        outputContainer.appendChild(h4DataPassenger);
                        h4DataPassenger.innerHTML = "<u> Datos del pasajero </u>";
                        h4DataPassenger.classList.add("title-data-passenger");
                        outputContainer.appendChild(pFullNamePassenger);
                        pFullNamePassenger.innerHTML = `Nombre completo: ${fullNamePassengerValue}`;
                        outputContainer.appendChild(pDNIPassenger);
                        pDNIPassenger.innerHTML = `D.N.I: ${DNIPassengerValue}`;
                        outputContainer.appendChild(pEmailPassenger);
                        pEmailPassenger.innerHTML = `Correo electrónico: ${emailPassengerValue}`;

                        outputContainer.appendChild(h4DataJourney);
                        h4DataJourney.innerHTML = "<u> Datos del viaje </u>";
                        h4DataJourney.classList.add("title-data-journey");
                        outputContainer.appendChild(pOrigin);
                        pOrigin.innerHTML = `Punto de orígen: ${originValue}`;
                        outputContainer.appendChild(pDistanceO);
                        pDistanceO.innerHTML = `Distancia a P. de Orígen: ${distanceOValue} km`;
                        outputContainer.appendChild(pOriginHour);
                        pOriginHour.innerHTML = `Hora de llegada al punto de partida: ${originHourValue}`;
                        outputContainer.appendChild(pDestinatationPlace);
                        pDestinatationPlace.innerHTML = `Punto de destino: ${destinatationPlaceValue}`;
                        outputContainer.appendChild(pDistance);
                        pDistance.innerHTML = `Distancia: ${distanceValue} km`;
                        outputContainer.appendChild(pEstimatedTime);
                        pEstimatedTime.innerHTML = `Tiempo de viaje estimado: ${estimatedTimeValue} min`;
                        outputContainer.appendChild(pJourneyType);
                        if (journeyTypeValue === "Road") {
                            var JourneyEspValue = "Ruta";
                        }
                        if (journeyTypeValue === "City") {
                            var JourneyEspValue = "Ciudad";
                        }
                        if (journeyTypeValue === "Mixed") {
                            var JourneyEspValue = "Mixto (Ruta-Ciudad)";
                        };
                        pJourneyType.innerHTML = `Lugar de manejo: ${JourneyEspValue}`;
                        outputContainer.appendChild(pRoundTrip);

                        if (roundTripValue === "going") {
                            var translateRoundTrip = "Ida";
                        } else
                            if (roundTripValue === "goingAndLap") {
                                var translateRoundTrip = "Ida y vuelta";
                            }
                        pRoundTrip.innerHTML = `Ida / Vuelta: ${translateRoundTrip}`;

                        outputContainer.appendChild(h3Budget);
                        h3Budget.innerHTML = "Presupuesto"
                        h3Budget.classList.add("positionCenter");
                        outputContainer.appendChild(pTotalLiters);

                        pTotalLiters.innerHTML = `Total de litros a consumir: ${totalLiters()} lts`;
                        outputContainer.appendChild(h4AmountTable);
                        h4AmountTable.classList.add("title");
                        h4AmountTable.innerHTML = "<u> Tabla de importe valor de nafta </u>";
                        outputContainer.appendChild(table);
                        table.appendChild(trDescriptionFile);
                        amountTable.forEach((description) => {
                            var thDescription = document.createElement("th");
                            trDescriptionFile.appendChild(thDescription);
                            thDescription.innerHTML = description;
                        })
                        table.appendChild(trValuesFIle);

                        for (var i = 0; i < amountTable.length; i++) {
                            var tdValues = document.createElement("td");
                            trValuesFIle.appendChild(tdValues);
                            if (i == 0) {
                                tdValues.innerHTML = stationServiceValue;
                            } else
                                if (i == 1) {
                                    tdValues.innerHTML = typeGasolineValue;
                                } else
                                    if (i == 2) {
                                        tdValues.innerHTML = `$${serviceStations[stationServiceValue][typeGasolineValue]}`;
                                    } else
                                        if (i == 3) {
                                            tdValues.textContent = `${totalLiters()} lts`;
                                        } else
                                            if (i == 4) {
                                                tdValues.textContent = `$${totalPrice()}`;
                                            }
                                        }
                                        outputContainer.appendChild(pTableDescription);
                                        pTableDescription.classList.add("pDescription");
                                        pTableDescription.innerHTML = `*<u>Nota:</u> En el importe también incluye la distancia hasta el punto de orígen.`;

                        outputContainer.appendChild(h4EstimatedTime);
                        h4EstimatedTime.innerHTML = "<u> Tabla de importe minutos </u>";
                        h4EstimatedTime.classList.add("title");
                        outputContainer.appendChild(tableEstimatedTime);
                        tableEstimatedTime.appendChild(trEstimatedTimeDescription);
                        amountTable2.forEach((description2) => {
                            var thEstimatedDescription = document.createElement("th");
                            trEstimatedTimeDescription.appendChild(thEstimatedDescription);
                            thEstimatedDescription.innerHTML = description2;
                        })
                        tableEstimatedTime.appendChild(trEstimatedTimeValue);
                        for (var i = 0; i < amountTable2.length; i++) {
                            var tdEstimatedTimeValue = document.createElement("td");
                            trEstimatedTimeValue.appendChild(tdEstimatedTimeValue);
                            if (i == 0) {
                                tdEstimatedTimeValue.innerHTML = `$${minutesPrice}`;
                            } else
                                if (i == 1) {
                                    tdEstimatedTimeValue.innerHTML = `${estimatedTimeValue} min`;
                                } else
                                    if (i == 2) {
                                        tdEstimatedTimeValue.innerHTML = `$${valueMinutes()}`;
                                    }
                        }

                        outputContainer.appendChild(h4TollTableTitle);
                        h4TollTableTitle.classList.add("title");
                        h4TollTableTitle.innerHTML = "<u>Tabla de Importe de Peaje/s</u>";
                        outputContainer.appendChild(tollTable);
                        tollTable.appendChild(trTollDescription);
                        tollsDescription.forEach((description3) => {
                            var thTollDescription = document.createElement("th");
                            trTollDescription.appendChild(thTollDescription);
                            thTollDescription.innerHTML = description3;
                        })
                        for(var i = 0; i < ArrayTolls.length; i++){
                            var trValuesToll = document.createElement("tr");
                            tollTable.appendChild(trValuesToll);
                            for(var j = 0; j < tollsDescription.length; j++){
                                var tdTollValue = document.createElement("td");
                                trValuesToll.appendChild(tdTollValue);
                                if(j == 0){
                                tdTollValue.innerHTML = `${ArrayTolls[i]}`;
                                } else
                                if(j == 1){
                                tdTollValue.innerHTML = `$ ${tolls[ArrayTolls[i]][inputRushHourValue]}`;
                                } else
                                if(j == 2){
                                var totalToll = tolls[ArrayTolls[i]][inputRushHourValue] * 2;
                                tdTollValue.innerHTML = `$ ${totalToll}`;
                                }
                            }
                        }
                        outputContainer.appendChild(ptotalTolls);
                        ptotalTolls.innerHTML = `Total peaje: $ ${tollsValue()}`;

                        outputContainer.appendChild(h4AmountTotal);
                        h4AmountTotal.classList.add("title");
                        totalAmountFinally();
                        function totalAmountFinally() {
                            if (roundTripValue === "going") {
                                return h4AmountTotal.innerHTML = "<u> Total a pagar IDA: </u> $ " + totalAmount() + "  (" + totalPrice() + " + " + valueMinutes() + " + " + tollsValue() + ")";
                            } else
                                if (roundTripValue === "goingAndLap") {
                                    return h4AmountTotal.innerHTML = "<u> Total a pagar IDA/VUELTA: </u> $ " + totalAmount() * 2 + "  (" + totalPrice() + " + " + valueMinutes() + " + " + tollsValue() + ") x 2";
                                }
                        }
                        outputContainer.appendChild(buttonPrint);
                        buttonPrint.setAttribute("class", "print");
                        buttonPrint.innerHTML = "Imprimir";

                        buttonPrint.addEventListener("click", function () {
                            window.print()
                        })
                        }
                    })

                    buttonDelete.addEventListener("click", function () {
                        location.reload();
                    })
                }
            });

            document.querySelector(".tollNo").addEventListener("click", function () {
                var journeyTypeLabel = document.createElement("label");
                var cityLabel = document.createElement("label");
                var journeyCityInput = document.createElement("input");
                var roadLabel = document.createElement("label");
                var journeyRoadInput = document.createElement("input");
                var mixedLabel = document.createElement("label");
                var journeyMixedInput = document.createElement("input");
                var br14 = document.createElement("br");
                formDriver.appendChild(br14);
                formDriver.appendChild(journeyTypeLabel);
                journeyTypeLabel.setAttribute("name", "journeyType");
                journeyTypeLabel.classList.add("label");
                journeyTypeLabel.innerHTML = 'Tipo de viaje';
                formDriver.appendChild(cityLabel);
                cityLabel.style.padding = "15px";
                cityLabel.classList.add("description");
                cityLabel.innerHTML = 'Ciudad';
                cityLabel.appendChild(journeyCityInput);
                journeyCityInput.setAttribute("name", "journeyType");
                journeyCityInput.type = "radio";
                journeyCityInput.id = "journeyType";
                journeyCityInput.value = 'City';
                formDriver.appendChild(roadLabel);
                roadLabel.style.padding = "15px";
                roadLabel.classList.add("description");
                roadLabel.innerHTML = 'Ruta';
                roadLabel.appendChild(journeyRoadInput);
                journeyRoadInput.setAttribute("name", "journeyType");
                journeyRoadInput.type = "radio";
                journeyRoadInput.id = "journeyType";
                journeyRoadInput.value = 'Road';
                formDriver.appendChild(mixedLabel);
                mixedLabel.style.padding = "15px";
                mixedLabel.classList.add("description");
                mixedLabel.innerHTML = 'Mixto';
                mixedLabel.appendChild(journeyMixedInput);
                journeyMixedInput.setAttribute("name", "journeyType");
                journeyMixedInput.type = "radio";
                journeyMixedInput.id = "journeyType";
                journeyMixedInput.value = "Mixed";
                formDriver.appendChild(br16);
                formDriver.appendChild(roundTripLabel);
                roundTripLabel.setAttribute("name", "roundTrip");
                roundTripLabel.classList.add("label");
                roundTripLabel.innerHTML = 'Ida/vuelta';
                formDriver.appendChild(goingLabel);
                goingLabel.style.padding = "15px";
                goingLabel.setAttribute("name", "rounTrip");
                goingLabel.classList.add("description");
                goingLabel.innerHTML = 'Ida';
                goingLabel.appendChild(goingInput);
                goingInput.setAttribute("name", "roundTrip");
                goingInput.type = "radio";
                goingInput.id = "roundTrip";
                goingInput.value = "going";
                formDriver.appendChild(lapLabel);
                lapLabel.style.padding = "15px";
                lapLabel.setAttribute("name", "roundTrip");
                lapLabel.classList.add("description");
                lapLabel.innerHTML = 'Ida/vuelta';
                lapLabel.appendChild(lapInput);
                lapInput.setAttribute("name", "roundTrip");
                lapInput.type = "radio";
                lapInput.id = "roundTrip";
                lapInput.value = "goingAndLap";

                /* Create a serviceStation: <h3> Title Service Station, <label><select>
               <option> Nombre de petrolera. <br><label><select><option> Tipo de nafta*/
                var typeGasoline = ["Nafta SÚPER", "Nafta PREMIUM"];
                var h3serviceStation = document.createElement("h3");
                var titleServiceStation = "<u> Datos de estación de servicio </u>";
                var labelNameServiceStation = document.createElement("label");
                var selectServiceStation = document.createElement("select");
                var br12 = document.createElement("br");
                var labelTypeGasoline = document.createElement("label");
                var selectTypeGasoline = document.createElement("select");

                formDriver.appendChild(h3serviceStation);
                h3serviceStation.innerHTML = titleServiceStation;
                h3serviceStation.classList.add("title-data-serviceStation");
                formDriver.appendChild(labelNameServiceStation);
                labelNameServiceStation.classList.add("label");
                labelNameServiceStation.setAttribute("name", "serviceStation");
                labelNameServiceStation.innerHTML = 'Estación de servicio';
                formDriver.appendChild(selectServiceStation);
                selectServiceStation.setAttribute("name", "serviceStation");
                selectServiceStation.id = "serviceStation";
                for (var key in serviceStations) {
                    var optionsService = document.createElement("option");
                    optionsService.value = key;
                    optionsService.innerHTML = key;
                    selectServiceStation.appendChild(optionsService);
                }
                formDriver.appendChild(br12);
                formDriver.appendChild(labelTypeGasoline);
                labelTypeGasoline.classList.add("label");
                labelTypeGasoline.setAttribute("name", "typeGasoline");
                labelTypeGasoline.innerHTML = 'Tipo de Nafta';
                formDriver.appendChild(selectTypeGasoline);
                selectTypeGasoline.setAttribute("name", "typeGasoline");
                selectTypeGasoline.id = "typeGasoline";
                typeGasoline.forEach((typeGasoline) => {
                    var optionTypeGasoline = document.createElement("option");
                    selectTypeGasoline.appendChild(optionTypeGasoline);
                    optionTypeGasoline.value = typeGasoline;
                    optionTypeGasoline.innerHTML = typeGasoline;
                });
                /* Create a button. After addEventListenner in the file calculator.js .*/
                //Code:
                var br13 = document.createElement("br");
                var buttonValidation = document.createElement("button");

                formDriver.appendChild(br13);
                formDriver.appendChild(buttonValidation);
                buttonValidation.textContent = 'Continuar';
                buttonValidation.style.padding = "10px";
                buttonValidation.setAttribute("class", "continue");

                /* Create a button cleaner (This button delete the value)*/
                var buttonDelete = document.createElement("button");
                formDriver.appendChild(buttonDelete);
                buttonDelete.textContent = 'Borrar';
                buttonDelete.style.padding = "10px";
                buttonDelete.setAttribute("class", "delete");

                calculatorNoToll()
                function calculatorNoToll() {
                    // Calculator--------------------------------------------------------------------------------------------
                    var modelInput = document.getElementById("model");//Elemento Modelo.
                    var pathInput = document.getElementById("path");//Elemento Patente.
                    //Create a VARIABLES for save the values about Data Driver......................
                    var fullNameInput = document.getElementById("fullName");//Elemento Nombre comleto (chofer).
                    var DNIInput = document.getElementById("dniDriver");//Elemento DNI
                    var streetDriverInput = document.getElementById("streetDriver");//Elemento Dirección calle.
                    //Create a VARIABLES for save the values about Passenger........................
                    var fullNamePassengerInput = document.getElementById("fullNamePassenger");//Elemento nombre completo pasajero.
                    var DNIPassengerInput = document.getElementById("DNIPassenger");//Elemento DNI pasajero.
                    var emailPassengerInput = document.getElementById("emailPassenger");//Elemento email del pasajero.
                    //Create a VARIABLES for save the values about Data Journey...............................
                    var originInput = document.getElementById("originInput");//Elemento input de Punto de orígen.
                    var distanceOrigin = document.querySelector("#distanceOrigin");
                    var originHourInput = document.getElementById("originHour");//Elemento de Hora de LLegada al P. de orígen.
                    var destinationPlaceInput = document.getElementById("destinationPlace");//Elemento input de Destino.
                    var distanceKmInput = document.getElementById("distance");//Elemento input de Distancia.
                    var estimatedTimeInput = document.getElementById("estimatedTime");//Elemento input de Tiempo Estimado.
                    var journeyTypeInputRadio = document.querySelectorAll("#journeyType");//Elemento input radio de tipo de ruta (ciudad).
                    var roundTrips = document.querySelectorAll("#roundTrip");

                    //Create a VARIABLES for save the values about Service station........................................
                    var serviceStationSelectInput = document.getElementById("serviceStation");//Elemento select de nombre de Estación de Servicio.
                    var typeGasolineSelectInput = document.getElementById("typeGasoline");//Elemento select de tipo de nafta.
                    //Create a VARIABLES for button.AddEventListener.....................................................
                    var buttonContinue = document.querySelector(".continue");//Elemento botón para continuar.
                    //var buttonDelete = document.querySelector(".delete");//Elemento botón para borrar/restaurar formulario.
                    var buttonDelete = document.querySelector(".delete");
                    //buttonContinue.addEventListener("click", f(){})/////////////////////////////////////////////////////////////
                    buttonContinue.addEventListener("click", function () {
                        //First create a VARIABLES for save in a function
                        //DATA CAR --------------------------------------------------------------------------------------------
                        var modelValue = modelInput.value;

                        var pathValue = pathInput.value;
                        pathValue = pathValue.toUpperCase();

                        //DATA DRIVER -----------------------------------------------------------------------------------------
                        var fullNameValue = fullNameInput.value;
                        fullNameValue = fullNameValue.toUpperCase();

                        var DNIDriverValue = DNIInput.value;

                        var streetDriverValue = streetDriverInput.value;
                        streetDriverValue = streetDriverValue.toUpperCase();


                        //DATA PASSENGER--------------------------------------------------------------------------------------
                        var fullNamePassengerValue = fullNamePassengerInput.value;
                        fullNamePassengerValue = fullNamePassengerValue.toUpperCase();

                        var DNIPassengerValue = DNIPassengerInput.value;

                        var emailPassengerValue = emailPassengerInput.value;



                        //DATA JOURNEY------------------------------------------------------------------------------------------
                        var originValue = originInput.value;
                        originValue = originValue.toUpperCase();

                        var distanceOValue = parseFloat(distanceOrigin.value);
                        if(distanceOValue == undefined){
                            distanceOValue = 0
                        } else {
                            distanceOValue = distanceOValue;
                        }


                        var originHourValue = originHourInput.value;

                        var destinatationPlaceValue = destinationPlaceInput.value;
                        destinatationPlaceValue = destinatationPlaceValue.toUpperCase();

                        var distanceValue = distanceKmInput.value;
                        var estimatedTimeValue = estimatedTimeInput.value;

                        for (var i = 0; i < journeyTypeInputRadio.length; i++) {
                            if (journeyTypeInputRadio[i].checked) {
                                var journeyTypeValue = journeyTypeInputRadio[i].value;
                            }
                        }

                        for (var i = 0; i < roundTrips.length; i++) {
                            if (roundTrips[i].checked) {
                                var roundTripValue = roundTrips[i].value;
                            }
                        }

                        //DATA SERVICES STATIONS---------------------------------------------------------------------------------
                        var stationServiceValue = serviceStationSelectInput.value;
                        var typeGasolineValue = typeGasolineSelectInput.value;

                        totalLiters();
                        function totalLiters() {
                            let totalLiters = ((distanceValue + distanceOValue) * cars.trademark[camelCaseTrademark][modelValue][journeyTypeValue] / 100);
                            totalLiters = totalLiters.toFixed(3);
                            return totalLiters;
                        }

                        totalPrice();
                        function totalPrice() {
                            let totalPrice = totalLiters() * serviceStations[stationServiceValue][typeGasolineValue];
                            totalPrice = parseFloat(totalPrice.toFixed(2));
                            return totalPrice;
                        }

                        valueMinutes();
                        var minutesPrice = 50;
                        function valueMinutes() {
                            var totalPriceMin = minutesPrice * estimatedTimeValue;
                            totalPriceMin = parseFloat(totalPriceMin.toFixed(2));
                            return totalPriceMin;
                        }

                        totalAmount();

                        function totalAmount() {
                            var total = totalPrice() + valueMinutes() + tollsValue();
                            total = parseFloat(total.toFixed(2));
                            return total;
                        }

                        //Create a elements----------------------------------------------------------------------------------------
                        var outputContainer = document.getElementById("output-container");
                        var h3ReservationData = document.createElement("h3");
                        //Data Car---------------------------------------------------------------------------
                        var h4DataCar = document.createElement("h4");
                        var pTrademaker = document.createElement("p");
                        var pModel = document.createElement("p");
                        var pPath = document.createElement("p");
                        //Data Driver--------------------------------------------------------------------------
                        var h4DataDriver = document.createElement("h4");
                        var pFullNameDriver = document.createElement("p");
                        var pDNIDriver = document.createElement("p");
                        var pStreedDriver = document.createElement("p");
                        //Data Passenger------------------------------------------------------------------------
                        var h4DataPassenger = document.createElement("h4");
                        var pFullNamePassenger = document.createElement("p");
                        var pDNIPassenger = document.createElement("p");
                        var pEmailPassenger = document.createElement("p");
                        //Data Journey---------------------------------------------------------------------------
                        var h4DataJourney = document.createElement("h4");
                        var pOrigin = document.createElement("p");
                        var pDistanceO = document.createElement("p");
                        var pOriginHour = document.createElement("p");
                        var pDestinatationPlace = document.createElement("p");
                        var pDistance = document.createElement("p");
                        var pEstimatedTime = document.createElement("p");
                        var pJourneyType = document.createElement("p");
                        var pRoundTrip = document.createElement("p");
                        //Budget------------------------------------------------------------------------------------
                        var h3Budget = document.createElement("h3");
                        var pTotalLiters = document.createElement("p");
                        var h4AmountTable = document.createElement("h4");
                        var amountTable = ["Estación de servicio", "Combustible", "Valor x Lt", "Litros totales", "Importe total"];
                        var table = document.createElement("table");
                        var trDescriptionFile = document.createElement("tr");
                        var trValuesFIle = document.createElement("tr");
                        var pTableDescription = document.createElement("p");
                        var h4EstimatedTime = document.createElement("h4");
                        var tableEstimatedTime = document.createElement("table");
                        var trEstimatedTimeDescription = document.createElement("tr");
                        var trEstimatedTimeValue = document.createElement("tr");
                        var amountTable2 = ["Precio x min", "Cantidad de minutos", "Importe total"];
                        var h4AmountTotal = document.createElement("h4");
                        //------------Create a button print-------------------------------------------------------------------------
                        var buttonPrint = document.createElement("button");
                        //------------------------------Now creat html---------------------------------------------------------------
                        outputContainer.appendChild(h3ReservationData);
                        h3ReservationData.innerHTML = "<u> Datos de la reserva </u>";
                        h3ReservationData.classList.add("positionCenter");
                        outputContainer.appendChild(h4DataCar);
                        h4DataCar.innerHTML = "<u> Datos del vehículo </u>";
                        h4DataCar.classList.add("title-data-car");
                        outputContainer.appendChild(pTrademaker);
                        pTrademaker.innerHTML = `Marca: ${trademarkValue}`;
                        outputContainer.appendChild(pModel);
                        pModel.innerHTML = `Modelo: ${modelValue}`;
                        outputContainer.appendChild(pPath);
                        pPath.innerHTML = `Patente: ${pathValue}`;

                        outputContainer.appendChild(h4DataDriver);
                        h4DataDriver.innerHTML = "<u> Datos del conductor </u>";
                        h4DataDriver.classList.add("title-data-driver");
                        outputContainer.appendChild(pFullNameDriver);
                        pFullNameDriver.innerHTML = `Nombre completo: ${fullNameValue}`;
                        outputContainer.appendChild(pDNIDriver);
                        pDNIDriver.innerHTML = `D.N.I: ${DNIDriverValue}`;
                        outputContainer.appendChild(pStreedDriver);
                        pStreedDriver.innerHTML = `Domicilio: ${streetDriverValue}`;

                        outputContainer.appendChild(h4DataPassenger);
                        h4DataPassenger.innerHTML = "<u> Datos del pasajero </u>";
                        h4DataPassenger.classList.add("title-data-passenger");
                        outputContainer.appendChild(pFullNamePassenger);
                        pFullNamePassenger.innerHTML = `Nombre completo: ${fullNamePassengerValue}`;
                        outputContainer.appendChild(pDNIPassenger);
                        pDNIPassenger.innerHTML = `D.N.I: ${DNIPassengerValue}`;
                        outputContainer.appendChild(pEmailPassenger);
                        pEmailPassenger.innerHTML = `Correo electrónico: ${emailPassengerValue}`;

                        outputContainer.appendChild(h4DataJourney);
                        h4DataJourney.innerHTML = "<u> Datos del viaje </u>";
                        h4DataJourney.classList.add("title-data-journey");
                        outputContainer.appendChild(pOrigin);
                        pOrigin.innerHTML = `Punto de orígen: ${originValue}`;
                        outputContainer.appendChild(pDistanceO);
                        pDistanceO.innerHTML = `Distancia a P. de Orígen: ${distanceOValue} km`;
                        outputContainer.appendChild(pOriginHour);
                        pOriginHour.innerHTML = `Hora de llegada al punto de partida: ${originHourValue}`;
                        outputContainer.appendChild(pDestinatationPlace);
                        pDestinatationPlace.innerHTML = `Punto de destino: ${destinatationPlaceValue}`;
                        outputContainer.appendChild(pDistance);
                        pDistance.innerHTML = `Distancia: ${distanceValue} km`;
                        outputContainer.appendChild(pEstimatedTime);
                        pEstimatedTime.innerHTML = `Tiempo de viaje estimado: ${estimatedTimeValue} min`;
                        outputContainer.appendChild(pJourneyType);
                        if (journeyTypeValue === "Road") {
                            var JourneyEspValue = "Ruta";
                        }
                        if (journeyTypeValue === "City") {
                            var JourneyEspValue = "Ciudad";
                        }
                        if (journeyTypeValue === "Mixed") {
                            var JourneyEspValue = "Mixto (Ruta-Ciudad)";
                        };
                        pJourneyType.innerHTML = `Lugar de manejo: ${JourneyEspValue}`;
                        outputContainer.appendChild(pRoundTrip);

                        if (roundTripValue === "going") {
                            var translateRoundTrip = "Ida";
                        } else
                            if (roundTripValue === "goingAndLap") {
                                var translateRoundTrip = "Ida y vuelta";
                            }
                        pRoundTrip.innerHTML = `Ida / Vuelta: ${translateRoundTrip}`;

                        outputContainer.appendChild(h3Budget);
                        h3Budget.innerHTML = "Presupuesto"
                        h3Budget.classList.add("positionCenter");
                        outputContainer.appendChild(pTotalLiters);

                        pTotalLiters.innerHTML = `Total de litros a consumir: ${totalLiters()} lts`;
                        outputContainer.appendChild(h4AmountTable);
                        h4AmountTable.classList.add("title");
                        h4AmountTable.innerHTML = "<u> Tabla de importe valor de nafta </u>";
                        outputContainer.appendChild(table);
                        table.appendChild(trDescriptionFile);
                        amountTable.forEach((description) => {
                            var thDescription = document.createElement("th");
                            trDescriptionFile.appendChild(thDescription);
                            thDescription.innerHTML = description;
                        })
                        table.appendChild(trValuesFIle);

                        for (var i = 0; i < amountTable.length; i++) {
                            var tdValues = document.createElement("td");
                            trValuesFIle.appendChild(tdValues);
                            if (i == 0) {
                                tdValues.innerHTML = stationServiceValue;
                            } else
                                if (i == 1) {
                                    tdValues.innerHTML = typeGasolineValue;
                                } else
                                    if (i == 2) {
                                        tdValues.innerHTML = `$${serviceStations[stationServiceValue][typeGasolineValue]}`;
                                    } else
                                        if (i == 3) {
                                            tdValues.textContent = `${totalLiters()} lts`;
                                        } else
                                            if (i == 4) {
                                                tdValues.textContent = `$${totalPrice()}`;
                                            }
                        }
                        outputContainer.appendChild(pTableDescription);
                        pTableDescription.classList.add("pDescription");
                        pTableDescription.innerHTML = `*<u>Nota:</u> En el importe también incluye la distancia hasta el punto de orígen.`;


                        outputContainer.appendChild(h4EstimatedTime);
                        h4EstimatedTime.innerHTML = "<u> Tabla de importe minutos </u>";
                        h4EstimatedTime.classList.add("title");
                        outputContainer.appendChild(tableEstimatedTime);
                        tableEstimatedTime.appendChild(trEstimatedTimeDescription);
                        amountTable2.forEach((description2) => {
                            var thEstimatedDescription = document.createElement("th");
                            trEstimatedTimeDescription.appendChild(thEstimatedDescription);
                            thEstimatedDescription.innerHTML = description2;
                        })
                        tableEstimatedTime.appendChild(trEstimatedTimeValue);
                        for (var i = 0; i < amountTable2.length; i++) {
                            var tdEstimatedTimeValue = document.createElement("td");
                            trEstimatedTimeValue.appendChild(tdEstimatedTimeValue);
                            if (i == 0) {
                                tdEstimatedTimeValue.innerHTML = `$${minutesPrice}`;
                            } else
                                if (i == 1) {
                                    tdEstimatedTimeValue.innerHTML = `${estimatedTimeValue} min`;
                                } else
                                    if (i == 2) {
                                        tdEstimatedTimeValue.innerHTML = `$${valueMinutes()}`;
                                    }
                        }
                        outputContainer.appendChild(h4AmountTotal);
                        h4AmountTotal.classList.add("title");
                        totalAmountFinally();
                        function totalAmountFinally() {
                            if (roundTripValue === "going") {
                                return h4AmountTotal.innerHTML = "<u> Total a pagar IDA: </u> $ " + totalAmount() + "  (" + totalPrice() + " + " + valueMinutes() + ")";
                            } else
                                if (roundTripValue === "goingAndLap") {
                                    return h4AmountTotal.innerHTML = "<u> Total a pagar IDA/VUELTA: </u> $ " + totalAmount() * 2 + "  (" + totalPrice() + " + " + valueMinutes() + ") x 2";
                                }
                        }
                        outputContainer.appendChild(buttonPrint);
                        buttonPrint.setAttribute("class", "print");
                        buttonPrint.innerHTML = "Imprimir";

                        buttonPrint.addEventListener("click", function () {
                            window.print()
                        })
                    });

                    buttonDelete.addEventListener("click", function () {
                        location.reload();
                    })
                }
            })

        }
    }
})