from flask import Flask, request, render_template, redirect, url_for, flash
from peewee import *
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'tu_clave_secreta'  # Necesaria para flash messages
db = SqliteDatabase('tuViajeCom.db')

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

db.connect()
db.create_tables([Solicitud], safe=True)

@app.route('/')
def index():
    return render_template('formPassengers.html')

@app.route('/submit', methods=['POST'])
def submit():
    try:
        full_name = request.form['fullName']
        dni_or_passport = request.form['dniOrPassport']
        number_dni_or_passport = request.form['numberDNIorPassport']
        user_email = request.form['userEmail']
        tel = request.form['tel']
        tiene_whatsapp = request.form['tieneWhatsApp']
        reservation_date = datetime.strptime(request.form['reservationDate'], '%Y-%m-%d').date()
        reservation_hour = datetime.strptime(request.form['reservationHour'], '%H:%M').time()
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
        
        flash(f'Solicitud de {nueva_solicitud.full_name} registrada con éxito.')
        return redirect(url_for('index'))
    
    except Exception as e:
        flash('Hubo un error al registrar la solicitud. Por favor, intenta nuevamente.')
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
