import React from "react";
import "../assets/styles/Project.scss";

// Use existing mock images to avoid file-not-found errors
import datacenter from '../assets/images/datacenter.jpg';
import esvc from '../assets/images/esvc.jpg';
import vip from '../assets/images/vip.jpg';
import bark from '../assets/images/bark.jpg';
import slap from '../assets/images/slap.jpg';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* 1) HSRN Robot – Data Center Robot */}
        <div className="project">
          <img src={datacenter} className="zoom" alt="HSRN Robot" width="50%" />
          <h2>HSRN Robot — Data Center Automation</h2>
          <p>
            This is a project I'm working on at NYU where we're building a joystick-controlled robot for automating tasks in data centers. The idea is to have a system that can navigate precisely and handle real-time tasks without human intervention in those tight, equipment-packed spaces.
          </p>
          <p>
            My role has been developing the perception models and figuring out how to get multiple robots to work together without stepping on each other's toes (literally). Right now, I'm focused on sensor fusion—basically getting the robot to process data from different sensors and make sense of its environment in real time.
          </p>
          <p>
            We're using Corelink's C++ client integrated with ROS for communication between the robots and the central control system. The joystick control gives us precision when we need it, but we're building in the flexibility to eventually let it run autonomously.
          </p>
          <p><strong>Technologies:</strong> ROS, C++, Python, Corelink, Sensor Fusion</p>
        </div>

        {/* 2) NYU VIP Self-Drive – Autonomous Navigation & Visual SLAM */}
        <div className="project">
          <img src={vip} className="zoom" alt="NYU Self-Drive" width="50%" />
          <h2>NYU VIP Self-Drive — Autonomous Navigation & Visual SLAM</h2>
          <p>
            This is a research project where we're trying to get small robotic vehicles to navigate autonomously indoors. The challenge is making them work in spaces they've never seen before, using just visual SLAM and real-time motion planning.
          </p>
          <p>
            I'm handling the path planning and robot localization side of things. We're using A* for finding optimal paths and ORB feature matching to help the robot recognize where it's been. Everything runs on ROS 2 Humble, with a monocular camera for mapping and a TurtleBot3 for testing.
          </p>
          <p>
            The tricky part is making this work with minimal sensor data—no fancy LIDAR, just a camera. That means we need really smart graph-based planning and efficient exploration strategies. We're preparing to compete in the Self-Drive Exploration & Navigation Challenge, which should be a good test of how robust our system really is.
          </p>
          <p><strong>Technologies:</strong> ROS 2 Humble, A*, ORB SLAM, TurtleBot3, OpenCV, C++</p>
        </div>

        {/* 3) The S.L.A.P. Hand – Evolving My Animatronic Hand Project */}
        <div className="project">
          <img src={slap} className="zoom" alt="S.L.A.P. Hand" width="50%" />
          <h2>The S.L.A.P. Hand — Remote-Controlled Robotic Hand</h2>
          <p>
            S.L.A.P. (Simultaneous Linked Articulation Project) is my take on building an animatronic hand that you can control remotely. I started this as an undergrad project and I'm now evolving it for handling hazardous materials. The goal is to have something that responds accurately to gestures and gives you haptic feedback so you can "feel" what the hand is doing.
          </p>
          <p>
            Right now I'm in the middle of upgrading from Bluetooth to a wired system for better stability, and I'm working on improving the response time. Eventually, I want to add cameras on the fingers for real-time object detection and maybe even throw in some AI-driven grasp optimization.
          </p>
          <p>
            This is very much a work in progress, but it's been a great learning experience in embedded systems and gesture-based control. Plus, it's just fun to build something that feels a bit like sci-fi.
          </p>
          <p><strong>Technologies:</strong> ESP8266, MPU6050, Haptic Feedback, Wi-Fi Communication</p>
        </div>
        {/* 4) Foundations of Robotics – SCARA Manipulator Control & Planning */}
        <div className="project">
        <h2>Foundations of Robotics — SCARA Manipulator Control & Planning</h2>
         <p>
          This was a three-part project I did for my Foundations of Robotics course during my first semester at NYU. The assignment was to progressively build control systems for a 4-DOF SCARA manipulator, starting with basic kinematics and ending with full dynamic control.
          </p>
          <p>
            In the first phase, I implemented inverse kinematics using both Jacobian Inverse and Jacobian Transpose methods. It was basically figuring out how to translate where you want the robot's end to be into what each joint needs to do. Phase two got more interesting—I added real-time obstacle avoidance using Null-Space Projection, so the robot could dodge obstacles while still following its path.
          </p>
          <p>
          The final phase was all about dynamics. I designed smooth trajectories using trapezoidal velocity profiles and built a control system that accounted for the robot's inertia and external forces. Everything was simulated in MATLAB and Simulink, which gave me a solid understanding of how physical constraints affect robot behavior.
          </p>

          <p>
            <strong>Tools & Frameworks:</strong> MATLAB, Simulink, SCARA Simulation, VR Visualization<br/>
            <strong>Key Concepts:</strong> Inverse Kinematics, Null-Space Control, Trajectory Planning, Inverse Dynamics, Redundancy Resolution, Real-Time Motion Correction
          </p>
        </div>

        {/* 5) B.A.R.K. Door – Smart Pet Access System */}
        <div className="project">
          <img src={bark} className="zoom" alt="B.A.R.K. Door" width="50%" />
          <h2>B.A.R.K. Door — IoT Pet Access System</h2>
          <p>
            B.A.R.K. (Bluetooth Actuated Remote Key) Door is basically a smart dog door I built. The idea was to let my dog come and go while keeping other animals out. It uses RFID tags to recognize authorized pets and has a Bluetooth connection so I can control it manually from my phone if needed.
          </p>
          <p>
            The hardware side uses a BS2 microcontroller with servo mechanisms for the locking system. I'm now exploring adding Wi-Fi and maybe some AI-based behavioral tracking to make it smarter about when to open and close.
          </p>
          <p>
            It's a simple project, but it was a good exercise in IoT systems and taught me a lot about making hardware and software work together reliably.
          </p>
          <p><strong>Technologies:</strong> BS2, RFID, Bluetooth, IoT, Servo Mechanisms</p>
        </div>

        {/* 6) E.S.V.C. – Solar-Powered Electric Vehicle for Sustainable Mobility */}
        <div className="project">
          <img src={esvc} className="zoom" alt="E.S.V.C. Project" width="50%" />
          <h2>E.S.V.C. — Solar-Powered Electric Vehicle</h2>
          <p>
            I was part of Team Solarians 4.0 for the Electric Solar Vehicle Championship, where we competed against 60+ other teams. My job was designing the chassis—making it lightweight but strong enough to handle the stresses of racing.
          </p>
          <p>
            I used CATIA V5 for the CAD work and ANSYS R16.2 to simulate how the chassis would hold up under different loads and impacts. We went with AISI 4130 steel for the tubular frame to get the right balance between weight and strength. Everything had to follow the ESVC rulebook's safety requirements while still being optimized for performance.
          </p>
          <p>
            It was intense working under competition pressure, but it taught me a lot about structural engineering and what it takes to build something that performs in real-world conditions.
          </p>
          <p><strong>Technologies:</strong> CATIA V5, ANSYS R16.2</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
