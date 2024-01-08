from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, NumberRange, AnyOf


class UserInput(FlaskForm):
    '''create input from validation'''
    name = StringField("Name", validators=[DataRequired()])
    email = StringField(
        "Email", validators=[DataRequired(), Email(message='Invalid Email')])
    color = StringField(
        "Colors", validators=[DataRequired(), AnyOf(["red", "green", "orange", "blue"])])

    year = IntegerField("Year", validators=[DataRequired(), NumberRange(
        min=1900, max=2013, message="- Year has to be between 1900 and 2013"
    )])
