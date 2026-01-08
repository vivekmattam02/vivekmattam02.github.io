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
              Built a Flask server for real-time sensor streaming—integrating MPU-6050 IMU data and Arducam IMX219 camera feeds into a unified monitoring interface. This allowed the team to debug and visualize robot state in real-time during field tests.
            </p>
            <p>
              Developed an object detection tunnel for the weeder robot using computer vision to classify objects by size and route them into the correct collection boxes—essentially automating the sorting process that was previously done manually.
            </p>
            <p>
              Also worked on ROS-based motion planning for navigation in dynamic farm environments, with embedded systems including Jetson Orin Nano, Arduino, and ESP32.
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
