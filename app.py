from flask import Flask, request, render_template
from peewee import *  # type: ignore

app = Flask(__name__)
db = SqliteDatabase('tuViajeCom.db')

# Definimos el modelo
class Solicitud(Model):
    full_name = CharField()
    dni_or_passport = CharField()
    number_dni_or_passport = CharField()
    user_email = CharField()
    tel = CharField()
    tiene_whatsapp = CharField()
    reservation_date = DateField()
    reservation_hour = TimeField()
    origin = CharField()
    destine = CharField()
    comment = TextField()

    class Meta:
        database = db

# Crear la base de datos y la tabla
db.connect()
db.create_tables([Solicitud], safe=True)

@app.route('/')
def index():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    full_name = request.form['fullName']
    dni_or_passport = request.form['dniOrPassport']
    number_dni_or_passport = request.form['numberDNIorPassport']
    user_email = request.form['userEmail']
    tel = request.form['tel']
    tiene_whatsapp = request.form['tieneWhatsApp']
    reservation_date = request.form['reservationDate']
    reservation_hour = request.form['reservationHour']
    origin = request.form['origin']
    destine = request.form['destine']
    comment = request.form['comment']
    
    # Crear una nueva solicitud
    nueva_solicitud = Solicitud.create(
        full_name=full_name,
        dni_or_passport=dni_or_passport,
        number_dni_or_passport=number_dni_or_passport,
        user_email=user_email,
        tel=tel,
        tiene_whatsapp=tiene_whatsapp,
        reservation_date=reservation_date,
        reservation_hour=reservation_hour,
        origin=origin,
        destine=destine,
        comment=comment
    )
    
    return f'Solicitud de {nueva_solicitud.full_name} registrada con éxito.'

if __name__ == '__main__':
    app.run(debug=True)