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
              I spent my internship at Xmachines working on autonomous systems for agriculture. The company is building robots that can handle crop monitoring and harvesting autonomously, which is a pretty challenging problem when you consider how unpredictable farm environments can be. Most of my time was spent on sensor integration and optimization—working with the MPU-6050 for motion tracking and the Arducam IMX219 for image processing on Ubuntu 22.04. I also got hands-on with embedded systems like the Jetson Orin Nano, Arduino, and ESP32. One of the bigger challenges was getting the motion planning to work reliably in dynamic environments. We used ROS-based solutions and spent a lot of time testing and refining the navigation. The experience really solidified my understanding of sensor fusion and real-time control.
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
