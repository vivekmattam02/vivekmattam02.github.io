import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Course Assistant - Autonomous Mobile Robots</h3>
            <h4 className="vertical-timeline-element-subtitle">NYU Tandon School of Engineering</h4>
            <p>
              Built all lecture materials for a graduate robotics course from scratch. I took the professor's raw audio recordings and handwritten notes and transformed them into polished lecture slides with custom diagrams and visualizations. It was a great exercise in breaking down complex robotics concepts and presenting them in ways that actually make sense to students.
            </p>
            <a href="https://vivekmattam02.github.io/amr-notes/" target="_blank" rel="noreferrer" style={{color: '#5000ca'}}>View Course Materials →</a>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Xmachines - Agricultural Robotics Startup</h4>
            <p>
              Built a Flask server for real-time sensor streaming—integrating MPU-6050 IMU data and Arducam IMX219 camera feeds into a unified interface for robot state monitoring. Developed an object detection tunnel for the weeder robot that uses vision-based size classification to sort and route different-sized objects into collection boxes.
            </p>
            <p>
              Worked with embedded systems (Jetson Orin Nano, Arduino, ESP32) and developed ROS-based motion planning for dynamic farm environments on Ubuntu 22.04.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;