import img1 from '../img/sensor.jpg';
import img2 from '../img/ml3.jpg';
import img3 from '../img/ui1.jpg';

const features_data = [
    {
        id: 1,
        heading: "Real Time Data Sensor",
        image: img1,
        title: "Real-Time Data Capturing Using Sensors & IoT System",
        desc: [
            "We designed and implemented an IoT network using readily available components like Arduino Uno microcontrollers, Wi-Fi modules, and sensors.",
            "DHT22 sensors are deployed to monitor temperature and humidity, while soil moisture sensors provided crucial real-time data on irrigation needs.",
            "The collected data from these sensors is used and analyzed by ML model to optimize irrigation schedules and improve water conservation."
        ]
    },
    {
        id: 2,
        heading: "ML Model Prediction",
        image: img2,
        title: "Predictive ML Models for Irrigation Optimization",
        desc: [
            "We utilized historical weather data for the target region encompassing past years. This data included parameters like temperature, humidity, and rainfall.",
            "We trained an ML model (supervised learning, regression model) on the combined weather and crop data which suggest optimal irrigation timing based on historical trends.",
            "The model's predictions help farmers make informed decisions, ultimately enhancing crop yield and water management."
        ]
    },
    {
        id: 3,
        heading: "User Centric Dashboard",
        image: img3,
        title: "Interactive User Dashboard for AquaScribe",
        desc: [
            "We developed a user-friendly web interface named AquaScribe using React and Node.js to visualize and interact with the SIS functionalities.",
            "The dashboard provides real-time updates on sensor data and ML model outputs, allowing users to monitor and adjust irrigation schedules efficiently.",
            // "It also features intuitive graphs and alerts to help users easily understand and respond to changing environmental conditions."
        ]
    }
];

export default features_data;
