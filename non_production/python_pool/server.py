from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_name():
    data = {"asteroid_count": 7, "potential_hazards": 2}
    return jsonify({'name': data})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
