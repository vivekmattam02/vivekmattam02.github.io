import React from "react";
import "../assets/styles/Internship.scss";

// Placeholder images (Replace later)
import xmachines from '../assets/images/xmachines.jpg';

function Internship() {
  return (
    <div className="internship-container" id="internships">
      <h1>Internship</h1>
      <div className="internship-grid">

        {/* 1) Xmachines – Agricultural Robotics Startup */}
        <div className="internship">
          <img src={xmachines} className="zoom" alt="Xmachines" />
          <div className="internship-content">
            <h2>Xmachines – Agricultural Robotics Startup</h2>
            <p>
              Worked on autonomous systems for agricultural robots handling crop monitoring and harvesting. Focused on sensor integration and optimization using MPU-6050 for motion tracking and Arducam IMX219 for image processing on Ubuntu 22.04. Developed ROS-based motion planning solutions for dynamic farm environments with embedded systems including Jetson Orin Nano, Arduino, and ESP32.
            </p>
            <p><strong>Technologies:</strong> ROS, C++, Python, Embedded Systems, Jetson Orin Nano, Ubuntu 22.04</p>
          </div>
        </div>

      </div>
    </div>
  );
}

// ✅ Ensure only one default export
export default Internship;
