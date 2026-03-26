from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/dados")
def dados():
    return jsonify({
        "projeto": "Deploy AWS Docker",
        "faculdade": "Mackenzie",
        "status": "Backend funcionando",
        "porta": 25000
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=25000)