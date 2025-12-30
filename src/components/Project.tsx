import React from "react";
import "../assets/styles/Project.scss";

// Use existing mock images to avoid file-not-found errors
import datacenter from '../assets/images/datacenter.jpg';
import esvc from '../assets/images/esvc.jpg';
import vip from '../assets/images/vip.jpg';
import bark from '../assets/images/bark.jpg';
import slap from '../assets/images/slap.jpg';
import rlQuadruped from '../assets/images/rl_quadruped.gif';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">

        {/* 1) High-Speed Autonomous Navigation in Narrow Corridors */}
        <div className="project no-image">
          <h2>High-Speed Autonomous Navigation in Narrow Corridors</h2>
          <p>
            Developed a ROS 2-based navigation framework for an Ackermann-steered RC car operating in corridors as narrow as 1.2 meters. Built a complete simulation environment in Gazebo Ignition with a custom URDF model addressing the four-bar linkage limitation inherent to Ackermann steering.
          </p>
          <p>
            Implemented a camera-LiDAR fusion perception system with optical flow-based motion tracking and ego-motion compensation, enabling estimation of obstacle velocity relative to the robot. Developed a racing line optimization algorithm that utilizes 92% of corridor width through outside-inside-outside cornering geometry, improving turn efficiency over traditional centerline planners.
          </p>
          <p>
            Integrated the full stack with Nav2, SLAM Toolbox, EKF localization, and MPPI control, creating a 60+ node architecture validated through simulation testing.
          </p>
          <p><strong>Tech Stack:</strong> ROS 2 Humble, Gazebo Ignition, Nav2, SLAM Toolbox, OpenCV, Python, C++</p>
          <p><strong>Team:</strong> 3-person team at NYU, funded by Bell Labs</p>
        </div>

        {/* 2) Reinforcement Learning for Quadruped Locomotion */}
        <div className="project">
          <img src={rlQuadruped} className="zoom project-image" alt="Reinforcement Learning Quadruped" />
          <div className="project-content">
            <h2>Reinforcement Learning for Quadruped Locomotion</h2>
          <p>
            Trained a Unitree Go2 robot to walk using PPO in NVIDIA Isaac Lab. Implemented reward shaping for smooth actions, gait coordination (Raibert heuristic), and body stability. Added an actuator friction model with domain randomization for sim-to-real transfer. The final policy tracks velocity commands at nearly 2x the baseline targets on both flat and rough terrain.
          </p>
          <p><strong>Tools:</strong> Isaac Lab, PyTorch, PPO, NYU HPC</p>
          </div>
        </div>

        {/* 3) Robot Perception: VIP Self-Drive */}
        <div className="project">
          <img src={vip} className="zoom project-image" alt="Robot Perception VIP Self-Drive" />
          <div className="project-content">
            <h2>Robot Perception: VIP Self-Drive</h2>
            <p>
              Working on autonomous indoor navigation for TurtleBot3 using only visual SLAM—no LIDAR, just a monocular camera. I handle path planning with A* and robot localization using ORB feature matching, building systems that navigate unknown spaces with minimal sensor data. As part of Team Voyager, we built a maze navigation system using CosPlace descriptors for place recognition and SuperGlue for geometric verification, with topological graph-based planning.
            </p>
            <p>
              Beyond navigation, I've worked on 2D mapping with visual odometry using ORB features, multi-object tracking with YOLOv11 and ByteTrack, and implemented RANSAC plane fitting and ICP point cloud alignment from scratch for KITTI data. Currently prepping for the Self-Drive Exploration & Navigation Challenge.
            </p>
            <p><strong>Technologies:</strong> ROS 2 Humble, PyTorch, CosPlace, SuperGlue, OpenCV, YOLOv11, ByteTrack, Open3D, ORB SLAM, TurtleBot3, Python, C++</p>
          </div>
        </div>

        {/* 4) HSRN Robot – Data Center Robot */}
        <div className="project">
          <img src={datacenter} className="zoom project-image" alt="HSRN Robot" />
          <div className="project-content">
            <h2>HSRN Robot - Data Center Automation</h2>
            <p>
              At NYU, I'm building a joystick-controlled robot for automating data center tasks. My focus is on developing perception models and multi-robot coordination using sensor fusion to help robots navigate tight spaces and understand their environment in real time. We're using Corelink's C++ client with ROS for inter-robot communication, with plans to transition from manual control to full autonomy.
            </p>
            <p><strong>Technologies:</strong> ROS, C++, Python, Corelink, Sensor Fusion</p>
          </div>
        </div>

        {/* 5) The S.L.A.P. Hand – Evolving My Animatronic Hand Project */}
        <div className="project">
          <img src={slap} className="zoom project-image" alt="S.L.A.P. Hand" />
          <div className="project-content">
            <h2>The S.L.A.P. Hand - Gesture-Controlled Robotic Hand</h2>
            <p>
              S.L.A.P. (Simultaneous Linked Articulation Project) started as my undergraduate major project and has evolved significantly over time. I began with Arduino and flex sensors for basic finger tracking, then transitioned to Propeller microcontrollers for better multi-servo control, and eventually moved to Raspberry Pi for more computational power. The biggest shift came when I moved from flex sensors to vision-based manipulation using Google's Mediapipe for hand tracking, enabling more natural gesture control without wearable sensors. The system now includes haptic feedback for tactile sensing and I'm exploring applications for handling hazardous materials.
            </p>
            <p><strong>Technologies:</strong> Raspberry Pi, Arduino, Propeller, Google Mediapipe, MPU6050, Haptic Feedback, Servo Control</p>
          </div>
        </div>

        {/* 6) Foundations of Robotics – SCARA Manipulator Control & Planning */}
        <div className="project no-image">
        <h2>Foundations of Robotics - SCARA Manipulator Control & Planning</h2>
         <p>
          A three-phase project building progressive control systems for a 4-DOF SCARA manipulator. I implemented inverse kinematics using Jacobian methods, added real-time obstacle avoidance with Null-Space Projection, and designed dynamic control with trapezoidal velocity profiles accounting for inertia and external forces. All simulations were done in MATLAB and Simulink.
          </p>
          <p>
            <strong>Tools & Frameworks:</strong> MATLAB, Simulink, SCARA Simulation, VR Visualization<br/>
            <strong>Key Concepts:</strong> Inverse Kinematics, Null-Space Control, Trajectory Planning, Inverse Dynamics
          </p>
        </div>

        {/* 7) B.A.R.K. Door – Smart Pet Access System */}
        <div className="project">
          <img src={bark} className="zoom project-image" alt="B.A.R.K. Door" />
          <div className="project-content">
            <h2>B.A.R.K. Door - IoT Pet Access System</h2>
            <p>
              B.A.R.K. (Bluetooth Actuated Remote Key) Door is a smart pet door using RFID tags to recognize authorized pets and Bluetooth for manual control. Built with a BS2 microcontroller and servo mechanisms for the locking system. Currently exploring Wi-Fi integration and AI-based behavioral tracking for smarter automation.
            </p>
            <p><strong>Technologies:</strong> BS2, RFID, Bluetooth, IoT, Servo Mechanisms</p>
          </div>
        </div>

        {/* 8) E.S.V.C. – Solar-Powered Electric Vehicle for Sustainable Mobility */}
        <div className="project">
          <img src={esvc} className="zoom project-image" alt="E.S.V.C. Project" />
          <div className="project-content">
            <h2>E.S.V.C. - Solar-Powered Electric Vehicle</h2>
            <p>
              As part of Team Solarians 4.0, I designed the chassis for our entry in the Electric Solar Vehicle Championship (competing against 60+ teams). Using CATIA V5 for CAD and ANSYS R16.2 for structural analysis, I optimized an AISI 4130 steel tubular frame to balance lightweight design with racing durability while meeting ESVC safety requirements.
            </p>
            <p><strong>Technologies:</strong> CATIA V5, ANSYS R16.2</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Project;
