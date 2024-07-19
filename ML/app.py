from flask import Flask, request, jsonify
from scripts.predict import predict

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict_endpoint():
    input_data = request.json
    prediction = predict(input_data)
    return jsonify({
        'prediction': 'Requires Water' if prediction else 'No Water Needed'
    })

if __name__ == '__main__':
    app.run(debug=True)