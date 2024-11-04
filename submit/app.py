from peewee import Model, CharField, BooleanField, DateField, TimeField, TextField, SqliteDatabase  # type: ignore
from flask import Flask, request, jsonify

# Conectar a una base de datos SQLite
db = SqliteDatabase('tu_viaje_com.db')

# Definir el modelo para los datos del formulario
class RequestForm(Model):
    full_name = CharField()
    dni_or_passport = CharField(choices=[('DNI', 'DNI'), ('Passport', 'Pasaporte')])
    number_dni_or_passport = CharField()
    user_email = CharField()
    phone = CharField()
    has_whatsapp = BooleanField()
    reservation_date = DateField()
    reservation_hour = TimeField()
    origin = CharField()
    destination = CharField()
    comments = TextField(null=True)

    class Meta:
        database = db

# Crear la tabla
def create_tables():
    db.connect()
    db.create_tables([RequestForm], safe=True)
    db.close()

# Función para guardar los datos del formulario
def save_request_form(data):
    db.connect()
    try:
        RequestForm.create(
            full_name=data['fullName'],
            dni_or_passport=data['dniOrPassport'],
            number_dni_or_passport=data['numberDNIorPassport'],
            user_email=data['userEmail'],
            phone=data['tel'],
            has_whatsapp=data['tieneWhatsApp'] == 'yes',
            reservation_date=data['reservationDate'],
            reservation_hour=data['reservationHour'],
            origin=data['origin'],
            destination=data['destine'],
            comments=data.get('comment', '')
        )
        print("Datos guardados con éxito.")
    except Exception as e:
        print("Error al guardar datos:", str(e))
    finally:
        db.close()

# Configurar la aplicación Flask
app = Flask(__name__)

@app.route('/submit/', methods=['POST'])
def submit_form():
    try:
        data = request.form  # Obtener los datos del formulario
        save_request_form(data)  # Guardar en la base de datos
        return jsonify({"message": "Solicitud enviada con éxito"}), 200
    except Exception as e:
        return jsonify({"error": "Error al enviar la solicitud", "details": str(e)}), 500

if __name__ == '__main__':
    create_tables()  # Crear tablas al iniciar
    app.run(debug=True)  # Iniciar el servidor Flask