# AquaScribe: Smart Water Management System

AquaScribe is a next-generation IoT-based water management system tailored for precision farming. By combining real-time sensor data with machine learning (ML) algorithms, AquaScribe optimizes irrigation, reduces water wastage, and enhances crop productivity, all while offering seamless user control through a modern web dashboard.

## Features

- 🌱 **Real-time Sensor Monitoring**: Monitor soil moisture, temperature, and humidity levels with precise IoT sensors.
- 🤖 **AI-driven Irrigation**: Uses a Random Forest machine learning model (91.7% accuracy) to determine the need for irrigation based on environmental data.
- 💧 **Automated Irrigation**: Automatically controls water pumps based on sensor data and machine learning predictions.
- ☁️ **Weather Dashboard**: Provides real-time weather updates and forecasts using OpenWeatherMap API to further optimize irrigation.
- 📊 **Data Visualization**: Graphical representation of sensor data for easy analysis.
- 📱 **Mobile Friendly**: Responsive design for monitoring and controlling irrigation from mobile devices.

## Tech Stack

| Component             | Technology                |
|-----------------------|---------------------------|
| **Frontend**           | React.js, HTML, CSS, JavaScript |
| **Backend**            | Node.js, Express.js       |
| **Database**           | MongoDB                   |
| **Hardware**           | Arduino Uno, DHT22 Sensors, Soil Moisture Sensors, Wi-Fi Modules |
| **Machine Learning**   | Python, Random Forest Algorithm |
| **Weather Data**       | OpenWeatherMap API        |


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
