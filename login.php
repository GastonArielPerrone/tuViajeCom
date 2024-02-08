<?php
// Obtener los datos del formulario
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

// Validar y sanitizar los datos si es necesario

// Conexión a la base de datos
$servername = "localhost";
$username = "id21852283_tuviajecomar";
$password = "Tuviajecom@r1";
$dbname = "id21852283_tuviajecomar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consultar el tipo de usuario en la base de datos
$sql = "SELECT tipo_usuario FROM usuarios WHERE usuario = '$usuario' AND contrasena = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicio de sesión exitoso
    $row = $result->fetch_assoc();
    $tipoUsuario = $row['tipo_usuario'];

    // Redireccionar según el tipo de usuario
    if ($tipoUsuario == "Pasajero") {
        header("Location: application.html");
    } elseif ($tipoUsuario == "Conductor") {
        header("Location: systemDriver.html");
    } else {
        echo "Tipo de usuario no válido.";
    }
} else {
    echo "Usuario o contraseña incorrectos.";
}

$conn->close();
?>