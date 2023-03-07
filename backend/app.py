# Import flask and datetime module for showing date and time
from flask import Flask, request
from flask_cors import CORS
from model import predict_data

# Initializing flask app
app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "Welcome to Pratidhi"


@app.route('/login', methods=["POST"])
def login():
    user = request.json["username"]
    passwd = request.json["password"]
    print(user, passwd)
    if (user == "test" and passwd == "test"):
        return {"isLogin": True}
    else:
        return {"isLogin": False}


@app.route('/predict', methods=["POST"])
def predict():
    nitro = float(request.json['nitro'])
    phosp = float(request.json['phosp'])
    potassium = float(request.json['potassium'])
    rain = float(request.json['rain'])
    humid = float(request.json['humid'])
    temp = float(request.json['temp'])
    ph = float(request.json['ph'])

    data = predict_data(nitro, phosp, potassium, temp, humid, ph, rain)
    return {"crop": data}


# Running app
if __name__ == '__main__':
    app.run(debug=True)
