from peewee import *
from flask import Flask, request

# Conectar a una base de datos SQLite (o crearla si no existe)
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
        database = db  # Este modelo usa la base de datos "tu_viaje_com.db".

# Crear la tabla
def create_tables():
    db.connect()
    db.create_tables([RequestForm], safe=True)
    db.close()

# Función para guardar los datos del formulario
def save_request_form(data):
    db.connect()
    RequestForm.create(
        full_name=data['fullName'],
        dni_or_passport=data['dniOrPassport'],
        number_dni_or_passport=data['numberDNIorPassport'],
        user_email=data['userEmail'],
        phone=data['tel'],
        has_whatsapp=True if data['tieneWhatsApp'] == 'yes' else False,
        reservation_date=data['reservationDate'],
        reservation_hour=data['reservationHour'],
        origin=data['origin'],
        destination=data['destine'],
        comments=data.get('comment', '')  # Usar cadena vacía si no hay comentarios
    )
    db.close()

# Configurar la aplicación Flask
app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    save_request_form(request.form)
    return "Solicitud enviada con éxito", 200

if __name__ == '__main__':
    create_tables()  # Crear tablas al iniciar
    app.run(debug=True)  # Iniciar el servidor Flask