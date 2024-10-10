# AquaScribe: Smart Water Management System

AquaScribe is an IoT-based smart water management system designed to optimize irrigation processes in real-time. By leveraging IoT sensors and machine learning algorithms, AquaScribe ensures efficient water use for crops, improving both crop yield and water conservation.

## Features

- **Real-time Sensor Data Monitoring**: Tracks soil moisture, temperature, and humidity using IoT sensors.
- **Machine Learning Predictions**: Predicts irrigation needs based on environmental factors using a Random Forest model with 91.7% accuracy.
- **Automated Irrigation**: Automatically controls water pumps based on sensor data and machine learning predictions.
- **Weather Dashboard**: Displays current weather conditions and forecasts using the OpenWeather API.
- **Data Visualization**: Graphical representation of sensor data for easy analysis.

## Tech Stack

- **Frontend**: React.js for dynamic UI and real-time updates.
- **Backend**: Node.js with Express for API handling and database management.
- **Database**: MongoDB to store and manage sensor data.
- **Hardware**: Arduino Uno, DHT22 sensors (temperature & humidity), soil moisture sensors, Wi-Fi modules.
- **Machine Learning**: Random Forest algorithm for predicting irrigation needs.
- **API**: OpenWeatherMap API for fetching weather data.

## How it Works

1. The sensors collect data on soil moisture, temperature, and humidity.
2. This data is sent to the backend and stored in a MongoDB database.
3. The Random Forest model processes the data to predict irrigation needs.
4. Based on the model's output, the system automatically turns the irrigation pump on or off.
5. Users can monitor the system through a real-time dashboard showing sensor data and predictions.

## Machine Learning Model

The Random Forest model is trained on the following features:

- **Temperature**
- **Soil Moisture**
- **Humidity**
- **Pump status (on/off)**

The model predicts whether irrigation is needed (yes/no) based on these inputs.

## Dashboard

The AquaScribe dashboard displays:

- **Real-time sensor data**: Soil moisture, temperature, and humidity levels.
- **Irrigation status**: Whether irrigation is currently active or not.
- **Weather updates**: Current weather conditions and forecasts.
- **Data graphs**: Visual representation of sensor data over time.

## Future Enhancements

- **Water Usage Analytics**: Track total water usage over time.
- **Advanced ML Models**: Integrating deep learning models for more accurate predictions.
- **Weather-Based Irrigation Control**: Modify irrigation based on weather forecasts.

## Contributing

Contributions are welcome! Please fork this repository and create a pull request.
