# import required libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib


# Load the dataset
data = pd.read_csv('aquascribe_dataset.csv')

# data pre-processing
data = data.dropna()

# features variable and target variable
features = data[['Soil Moisture','Temperature','Air Humidity']]
target = data['Pump Data']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

# Train the Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
accuracy = model.score(X_test, y_test)
print(f'Model accuracy: {accuracy:.2f}')

# Save the trained model
joblib.dump(model, 'model/randomForestModel.pkl')