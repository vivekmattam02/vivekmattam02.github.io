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

        {/* 1) Reinforcement Learning for Quadruped Locomotion */}
        <div className="project">
          {/* Video placeholder - Replace VIDEO_URL_HERE with your video URL (YouTube embed, mp4, etc.) */}
          <div className="video-container" style={{ marginBottom: '1rem' }}>
            {/* For YouTube: <iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            {/* For MP4: <video width="100%" controls><source src="VIDEO_URL_HERE" type="video/mp4" />Your browser does not support the video tag.</video> */}
            <div style={{ width: '100%', height: '315px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #ccc' }}>
              <p style={{ color: '#666', textAlign: 'center' }}>Video placeholder<br/>Replace with your video URL in Project.tsx</p>
            </div>
          </div>
          <h2>Reinforcement Learning for Quadruped Locomotion</h2>
          <p>
            Trained a Unitree Go2 robot to walk using PPO in NVIDIA Isaac Lab. Implemented reward shaping for smooth actions, gait coordination (Raibert heuristic), and body stability. Added an actuator friction model with domain randomization for sim-to-real transfer. The final policy tracks velocity commands at nearly 2x the baseline targets on both flat and rough terrain.
          </p>
          <p><strong>Tools:</strong> Isaac Lab, PyTorch, PPO, NYU HPC</p>
        </div>

        {/* 2) HSRN Robot – Data Center Robot */}
        <div className="project">
          <img src={datacenter} className="zoom" alt="HSRN Robot" width="37.5%" />
          <h2>HSRN Robot - Data Center Automation</h2>
          <p>
            At NYU, I'm building a joystick-controlled robot for automating data center tasks. My focus is on developing perception models and multi-robot coordination using sensor fusion to help robots navigate tight spaces and understand their environment in real time. We're using Corelink's C++ client with ROS for inter-robot communication, with plans to transition from manual control to full autonomy.
          </p>
          <p><strong>Technologies:</strong> ROS, C++, Python, Corelink, Sensor Fusion</p>
        </div>

        {/* 3) NYU VIP Self-Drive – Autonomous Navigation & Visual SLAM */}
        <div className="project">
          <img src={vip} className="zoom" alt="NYU Self-Drive" width="37.5%" />
          <h2>NYU VIP Self-Drive - Autonomous Navigation & Visual SLAM</h2>
          <p>
            A research project focused on autonomous indoor navigation using only visual SLAM—no LIDAR, just a monocular camera. I'm handling path planning with A* and robot localization using ORB feature matching. The challenge is making a TurtleBot3 navigate unknown spaces with minimal sensor data, relying on smart graph-based planning and exploration strategies. We're prepping for the Self-Drive Exploration & Navigation Challenge.
          </p>
          <p><strong>Technologies:</strong> ROS 2 Humble, A*, ORB SLAM, TurtleBot3, OpenCV, C++</p>
        </div>

        {/* 4) The S.L.A.P. Hand – Evolving My Animatronic Hand Project */}
        <div className="project">
          <img src={slap} className="zoom" alt="S.L.A.P. Hand" width="37.5%" />
          <h2>The S.L.A.P. Hand - Remote-Controlled Robotic Hand</h2>
          <p>
            S.L.A.P. (Simultaneous Linked Articulation Project) is a gesture-controlled animatronic hand I started as an undergrad project, now evolving it for handling hazardous materials. It features haptic feedback for tactile sensing and I'm currently upgrading from Bluetooth to wired communication for better stability. Future plans include finger-mounted cameras for object detection and AI-driven grasp optimization.
          </p>
          <p><strong>Technologies:</strong> ESP8266, MPU6050, Haptic Feedback, Wi-Fi Communication</p>
        </div>
        {/* 5) Foundations of Robotics – SCARA Manipulator Control & Planning */}
        <div className="project">
        <h2>Foundations of Robotics - SCARA Manipulator Control & Planning</h2>
         <p>
          A three-phase project building progressive control systems for a 4-DOF SCARA manipulator. I implemented inverse kinematics using Jacobian methods, added real-time obstacle avoidance with Null-Space Projection, and designed dynamic control with trapezoidal velocity profiles accounting for inertia and external forces. All simulations were done in MATLAB and Simulink.
          </p>
          <p>
            <strong>Tools & Frameworks:</strong> MATLAB, Simulink, SCARA Simulation, VR Visualization<br/>
            <strong>Key Concepts:</strong> Inverse Kinematics, Null-Space Control, Trajectory Planning, Inverse Dynamics
          </p>
        </div>

        {/* 6) B.A.R.K. Door – Smart Pet Access System */}
        <div className="project">
          <img src={bark} className="zoom" alt="B.A.R.K. Door" width="37.5%" />
          <h2>B.A.R.K. Door - IoT Pet Access System</h2>
          <p>
            B.A.R.K. (Bluetooth Actuated Remote Key) Door is a smart pet door using RFID tags to recognize authorized pets and Bluetooth for manual control. Built with a BS2 microcontroller and servo mechanisms for the locking system. Currently exploring Wi-Fi integration and AI-based behavioral tracking for smarter automation.
          </p>
          <p><strong>Technologies:</strong> BS2, RFID, Bluetooth, IoT, Servo Mechanisms</p>
        </div>

        {/* 7) E.S.V.C. – Solar-Powered Electric Vehicle for Sustainable Mobility */}
        <div className="project">
          <img src={esvc} className="zoom" alt="E.S.V.C. Project" width="37.5%" />
          <h2>E.S.V.C. - Solar-Powered Electric Vehicle</h2>
          <p>
            As part of Team Solarians 4.0, I designed the chassis for our entry in the Electric Solar Vehicle Championship (competing against 60+ teams). Using CATIA V5 for CAD and ANSYS R16.2 for structural analysis, I optimized an AISI 4130 steel tubular frame to balance lightweight design with racing durability while meeting ESVC safety requirements.
          </p>
          <p><strong>Technologies:</strong> CATIA V5, ANSYS R16.2</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
