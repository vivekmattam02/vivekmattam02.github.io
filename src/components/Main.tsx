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
    Hey! I'm Vivek, and I'm working on my Master's in Mechatronics and Robotics at NYU Tandon. My main interests lie in autonomous navigation, SLAM, and real-time robotic systems. Growing up in an agricultural community, I saw firsthand how the right technology could completely transform an industry—and that's what got me hooked on robotics. It's not just about building cool machines for me; it's about creating systems that actually solve real problems.
  </p>
  <p>
    Right now, I'm part of NYU's Self-Drive VIP project, where we're tackling SLAM-based navigation for autonomous robots. Before this, I interned at <strong>Xmachines</strong> (an agricultural robotics startup), working on sensor integration and embedded systems for autonomous farm equipment. I've also competed in the <strong>ESVC Solar Car Championship</strong>—designing energy-efficient vehicle systems alongside 60+ other teams. That experience taught me a lot about working under pressure and thinking creatively when resources are tight.
  </p>
  <p>
    What really excites me is the intersection of AI, perception systems, and real-time control. I love the challenge of making robots that can actually understand and adapt to their environment. I'm currently looking for <strong>Summer 2025 internship opportunities</strong> in robotics, autonomous systems, or embedded AI—basically anywhere I can work on making intelligent machines that do meaningful work.
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