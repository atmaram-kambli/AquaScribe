import React, { useState, useEffect } from 'react'
import './dashboardHeader.css'

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60*60);

    return () => clearInterval(timer);
  }, []); 
  
  
  function formatDate(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    // const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  
    // const formattedDate = `${day} ${months[monthIndex]}, ${year}  ${hours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    const formattedDate = `${day} ${months[monthIndex]}, ${year}  ${hours}:${formattedMinutes}  ${ampm}`;
  
    return formattedDate;
  }  
  return (
    <div className='dashboard-header'>
        <h2>Your Weather</h2>
        <div className='info'>
            <div className="city">Pune, India</div>
            <div className="dataTime">{formatDate(currentTime)}</div>
        </div>
    </div>
  )
}

export default DashboardHeader