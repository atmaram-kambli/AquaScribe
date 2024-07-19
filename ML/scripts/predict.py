import pandas as pd
import joblib

model = joblib.load('model/randomForestModel.pkl')

def predict(input_data):
    # Create dataframe for input data
    df = pd.DataFrame(input_data, index=[0])

    # make prediction
    prediction = model.predict(df)
    return prediction[0]

# input_data = {
#     'Soil Moisture': 35,
#     'Temperature': 10,
#     'Air Humidity': 90
# }

# prediction = predict(input_data)
# print(f'Prediction: {"Requires Water" if prediction else "No Water Needed"}')