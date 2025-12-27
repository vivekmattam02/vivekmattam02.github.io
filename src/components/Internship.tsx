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
              I spent my internship at Xmachines working on autonomous systems for agriculture. The company is building robots that can handle crop monitoring and harvesting autonomously, which is a pretty challenging problem when you consider how unpredictable farm environments can be.
            </p>
            <p>
              Most of my time was spent on sensor integration and optimization. I worked with the <strong>MPU-6050</strong> for motion tracking and the <strong>Arducam IMX219</strong> for image processing, getting them to play nicely on <strong>Ubuntu 22.04</strong>. I also got hands-on experience with embedded systems like the <strong>Jetson Orin Nano, Arduino, and ESP32</strong>—basically making sure all the hardware could talk to each other and respond in real time.
            </p>
            <p>
              One of the bigger challenges was getting the motion planning to work reliably in dynamic environments where things are constantly changing (animals, weather, moving equipment). We used <strong>ROS-based solutions</strong> and spent a lot of time testing and refining how the robots navigated and made decisions.
            </p>
            <p>
              The experience really solidified my understanding of sensor fusion and real-time control. I'm excited to keep exploring how AI-driven automation can make agricultural robotics more practical and effective.
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
