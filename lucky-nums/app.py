from flask import Flask, render_template, request, jsonify
import requests
from forms import UserInput
from werkzeug.datastructures import MultiDict

app = Flask(__name__)

BASE_URL = "http://numbersapi.com/"


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=["POST"])
def get_num():
    '''get lucky num api'''
    # Get request from user input
    req = request.json

    form = UserInput(MultDict(mapping=req), csrf_enabled=False)
    from random import randint
    rand_num = randint(0, 100)

    if form.validate_on_submit():

        response = {
            "num": {
                "fact": requests.get(f"{BASE_URL}{rand_num}/trivia").text,
                "num": rand_num,
            },
            "year": {
                "fact": requests.get(f"{BASE_URL}{req['year']}/year").text,
                "year": req["year"],
            }
        }

        # print(dir(requests.get(BASE_URL))) -> WHAT METHODS are returned
        # print("RESPONSE: ", response) -> verify if response is correct
        return jsonify(response)

    else:
        # create json data for errors
        error = {"errors": {}}
        # loop through errors dict
        for err in form.errors:
            # populate errors to dict
            error['errors'][err] = eval(f'form.{err}.errors')
            # jsonify dict to use in Javascript
            return jsonify(error)
