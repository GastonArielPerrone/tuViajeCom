<?php
// Obtén los datos del formulario
$fullName = $_POST['fullName'];
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$reservationDate = $_POST['reservationDate'];
$reservationHour = $_POST['reservationHour'];
$origin = $_POST['origin'];
$destine = $_POST['destine'];
$comment = $_POST['comment'];

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nombre_de_tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Insertar los datos en la base de datos
$sql = "INSERT INTO nombre_de_tu_tabla (fullName, userName, userEmail, reservationDate, reservationHour, origin, destine, comment)
VALUES ('$fullName', '$userName', '$userEmail', '$reservationDate', '$reservationHour', '$origin', '$destine', '$comment')";

if ($conn->query($sql) === TRUE) {
    echo "Solicitud enviada con éxito.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>