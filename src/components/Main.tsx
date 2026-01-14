import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portfolio from '../assets/images/portfolio.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={portfolio} alt="Vivekananda Swamy Mattam" />
        </div>
        <div className="content">
          <div className="social_icons">
          <a href="https://github.com/vivekmattam02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/vivek-mattam-a8590b23a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vivekananda Swamy Mattam</h1>
          <p>Masters Student in Mechatronics and Robotics at NYU</p>
          <div className="about-me">
  <h2>About Me</h2>
  <p>
    I'm a Master's student in Mechatronics and Robotics at NYU Tandon. Growing up in rural India, I saw firsthand the challenges of agriculture and inefficient processes. When I visited my grandfather's workplace at Mahindra and watched robots handle tasks that once required intense human labor, something clicked. That's when I realized robotics wasn't just about building cool machines but about creating systems that genuinely solve problems and reduce human burden.
  </p>
  <p>
    At NYU, I've had the opportunity to work on challenging problems across autonomous systems. I've worked on a Bell Labs funded project building high-speed navigation systems, trained quadruped robots with reinforcement learning in Isaac Lab, and developed visual SLAM solutions for the VIP Self-Drive project. Before coming here, I interned at <strong>Xmachines</strong>, an agricultural robotics startup, where I worked on sensor fusion and motion planning for agricultural robots in dynamic environments.
  </p>
  <p>
    Right now, I'm looking for <strong>internship/full-time opportunities</strong> in robotics, autonomous systems, or applied AI. I want to work on projects where the technology actually matters, where robots are solving real problems for real people.
  </p>
</div>

          <div className="mobile_social_icons">
            <a href="https://github.com/vivekmattam02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vivek-mattam-a8590b23a" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;