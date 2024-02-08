<?php
// Obtener los datos del formulario
$nombre = $_POST['names'];
$apellidos = $_POST['lastNames'];
$nacionalidad = $_POST['nationallity'];
$dniOpassport = $_POST['DNIOrPassport'];
$numID = $_POST['numID'];
$domicilio = $_POST['streetAdress'];
$email =$_POST['email'];
$tipoUsuario = $_POST['passengerOrDriver'];
$usuario = $_POST['newUserName'];
$contrasena = $_POST['newPassword'];

// Validar y sanitizar los datos si es necesario

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "Tuviajecom@r1";
$dbname = "id21852283_tuviajecomar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Insertar los datos en la base de datos
$sql = "INSERT INTO usuarios (nombres, apellidos, nacionalidad, dni_passport, numID, domicilio, email, tipo_usuario, usuario, contrasena) VALUES ('$nombre', '$apellidos', '$nacionalidad', '$dniOpassport', '$numID', '$domicilio', '$email', '$tipoUsuario', '$usuario', '$contrasena')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso.";
} else {
    echo "Error al registrar: " . $conn->error;
}

$conn->close();
?>