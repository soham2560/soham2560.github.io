---
layout: about
title: about
permalink: /
subtitle: MS by Research, RRC, IIIT Hyderabad

profile:
  align: right
  image: soham.jpg
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: false
announcements:
  enabled: false
latest_posts:
  enabled: false

social: true # includes social icons at the bottom of the page
---

I am a Master's by Research student at the [Robotics Research Center, IIIT Hyderabad](https://robotics.iiit.ac.in/), advised by [Dr. Spandan Roy](https://spandanroy.github.io/).

My research is on learning for contact-rich dexterous manipulation. I am interested in what robots can infer about their physical interaction with objects, contact states, geometry, and spatial relationships, from RGB cameras and proprioception, and how that information can drive better manipulation policies on real hardware.

This has led to work on learning contact estimation as a pseudo-tactile signal for in-hand object reorientation, and on dexterous grasping policies that remain robust to uncalibrated camera viewpoints, both validated on physical robots.

Always happy to collaborate or chat robotics! feel free to reach out at my [email](mailto:soham.patil@research.iiit.ac.in).

## education

<div class="cv-entry">
  <div class="cv-row"><span class="cv-title">IIIT Hyderabad, Robotics Research Center</span><span class="cv-meta">Jul 2024 – present</span></div>
  <div class="cv-row cv-sub"><span>MS by Research, Computer Science</span><span>Hyderabad, India</span></div>
  <div class="cv-note">CGPA 10.0/10 · Advised by <a href="https://scholar.google.com/citations?hl=en&amp;user=tUKoUgMAAAAJ">Dr. Spandan Roy</a></div>
</div>

<div class="cv-entry">
  <div class="cv-row"><span class="cv-title">MIT World Peace University (MIT-WPU)</span><span class="cv-meta">Jul 2019 – Jul 2023</span></div>
  <div class="cv-row cv-sub"><span>B.Tech, Computer Science</span><span>Pune, India</span></div>
  <div class="cv-note">CGPA 8.55/10</div>
</div>

## <a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a>

{% include news.liquid %}

## <a href="{{ '/publications/' | relative_url }}" style="color: inherit">publications</a>

<div class="publications">
{% bibliography %}
</div>

## experience

<div class="cv-media">
  <div class="cv-thumb"><a href="https://gist.github.com/soham2560/700cc1e9e350ad4d32486e0a3a37fbb4"><img src="{{ '/assets/img/gsoc_logo.png' | relative_url }}" alt="Google Summer of Code" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">Google Summer of Code @ ros2-control <a href="https://gist.github.com/soham2560/700cc1e9e350ad4d32486e0a3a37fbb4">[report]</a></span><span class="cv-meta">2025</span></div>
    <div class="cv-row cv-sub"><span>Open-Source Contributor</span><span>Remote</span></div>
    <ul class="cv-items">
      <li>Hardware-diagnostics support for <code>ros2_control</code>: a standardised health and fault-reporting API, new ROS messages (<code>HardwareStatus</code>, <code>HardwareDeviceStatus</code>), a unified Actuator/Sensor/System interface, and default diagnostic nodes with CLI tooling. Mentors: <a href="https://github.com/bmagyar">Dr. Bence Magyar</a>, <a href="https://github.com/saikishor">Sai Kishor Kothakota</a>.</li>
    </ul>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://robotics.iiit.ac.in/"><img src="{{ '/assets/img/rrc_logo.jpg' | relative_url }}" alt="Robotics Research Center, IIIT Hyderabad" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">Robotics Research Center, IIIT Hyderabad</span><span class="cv-meta">Feb – Jul 2024</span></div>
    <div class="cv-row cv-sub"><span>Research Intern</span><span>Hyderabad, India</span></div>
    <ul class="cv-items">
      <li>Built an in-house collaborative robot arm and an end-to-end pipeline for testing custom controllers on hardware, supporting research on adaptive and robust control.</li>
    </ul>
  </div>
</div>

## awards

<div class="cv-media">
  <div class="cv-thumb"><img src="{{ '/assets/img/robocon.jpg' | relative_url }}" alt="DD Robocon" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">DD Robocon</span><span class="cv-meta">2020 – 2023</span></div>
    <div class="cv-note">India's national stage of ABU Robocon, the Asia-Pacific university robotics championship.</div>
    <ul class="cv-items">
      <li><strong>Winner</strong> (2020), representing India at the international final; ranked <strong>2nd</strong> (2023) and <strong>4th</strong> (2022) nationally among 150+ teams.</li>
      <li>Led a team designing and building complete competition robots from scratch each season across mechanical design, custom electronics, firmware, motor control and autonomy; built an in-house integrated actuator matching commercial specs at ~half the cost, a wheeled-odometry module (&lt;4% error), and ROS 2 / Nav2 autonomy on register-level AVR/TM4C firmware.</li>
    </ul>
    <details class="cv-more">
      <summary>read more</summary>
      <div class="cv-more-body">
        {% include video.liquid path="assets/video/robocon2023.mp4" class="img-fluid rounded" controls=true cache_bust=true %}
        <p class="cv-note">2023, ranked 2nd nationally.</p>
        {% include video.liquid path="assets/video/robocon2022.mp4" class="img-fluid rounded" controls=true cache_bust=true %}
        <p class="cv-note">2022, ranked 4th nationally.</p>
      </div>
    </details>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><img src="{{ '/assets/img/matlab_logo.jpeg' | relative_url }}" alt="MATLAB" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">MATLAB Winners Circle</span><span class="cv-meta">2020</span></div>
    <div class="cv-note">Omni-drive robot modeling and control in MATLAB/Simulink.</div>
  </div>
</div>

## teaching

<div class="cv-media">
  <div class="cv-thumb"><img src="{{ '/assets/img/iiit_logo.jpg' | relative_url }}" alt="IIIT Hyderabad" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-entry">
      <div class="cv-title">Mobile Robotics (CS7.503)</div>
      <div class="cv-note">Teaching Assistant, IIIT Hyderabad<br />Instructor: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a></div>
    </div>
    <div class="cv-entry">
      <div class="cv-title">Robotics: Planning and Navigation (EC4.403)</div>
      <div class="cv-note">Teaching Assistant, IIIT Hyderabad<br />Instructor: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a></div>
    </div>
    <div class="cv-entry">
      <div class="cv-title">Systems Thinking (EC5.202)</div>
      <div class="cv-note">Teaching Assistant, IIIT Hyderabad<br />Instructor: <a href="https://scholar.google.com/citations?hl=en&amp;user=tUKoUgMAAAAJ">Prof. Spandan Roy</a></div>
    </div>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://nptel.ac.in/courses/101106001"><img src="{{ '/assets/img/nptel_logo.jpg' | relative_url }}" alt="NPTEL" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-entry">
      <div class="cv-title">Perception &amp; Planning for Aerial Vehicles <a href="https://nptel.ac.in/courses/101106001">[link]</a></div>
      <div class="cv-note">Teaching Assistant, NPTEL<br />Instructors: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a>, <a href="https://scholar.google.com/citations?user=5i1t_QgAAAAJ&amp;hl=en">Dr. Harikumar Kandath</a>, <a href="https://scholar.google.com/citations?user=aPSLBVUAAAAJ&amp;hl=en">Dr. Antony Thomas</a></div>
    </div>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://github.com/RoboticsIIITH/summer-school-2025"><img src="{{ '/assets/img/rrc_logo.jpg' | relative_url }}" alt="RRC Robotics Lab" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-entry">
      <div class="cv-title">RRC Robotics Summer School 2025 <a href="https://github.com/RoboticsIIITH/summer-school-2025">[link]</a></div>
      <div class="cv-note">Instructor, IIIT Hyderabad<br />RRC Robotics Lab</div>
    </div>
  </div>
</div>

## projects

<div class="cv-media">
  <div class="cv-thumb"><a href="https://github.com/soham2560/MPCHoloNavigation"><img src="{{ '/assets/img/mpcholonavigation.jpeg' | relative_url }}" alt="MPCHoloNavigation" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">MPCHoloNavigation <a href="https://github.com/soham2560/MPCHoloNavigation">[repo]</a></span><span class="cv-meta">ROS 2</span></div>
    <div class="cv-note">Model-predictive-control holonomic navigation in ROS 2, with SLAM Toolbox localisation and Nav2 integration. Course project, Robotics: Planning and Navigation, IIIT Hyderabad.</div>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://github.com/soham2560/LiDAR_Camera_Calibration"><img src="{{ '/assets/img/lidarcameracalibration.jpeg' | relative_url }}" alt="LiDAR_Camera_Calibration" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">LiDAR_Camera_Calibration <a href="https://github.com/soham2560/LiDAR_Camera_Calibration">[repo]</a></span><span class="cv-meta">ROS 2</span></div>
    <div class="cv-note">Extrinsic and intrinsic LiDAR-camera calibration from rosbag data and checkerboard images, using Zhang's method for intrinsics. Course project, Mobile Robotics, IIIT Hyderabad.</div>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://github.com/soham2560/DockerForROS2Development"><img src="{{ '/assets/img/docker.png' | relative_url }}" alt="DockerForROS2Development" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">DockerForROS2Development <a href="https://github.com/soham2560/DockerForROS2Development">[repo]</a></span><span class="cv-meta">Docker</span></div>
    <div class="cv-note">Pre-built Dev Container images for ROS 2 (Humble, Iron) and ROS 1 (Noetic), with optional Gazebo, published on GHCR.</div>
  </div>
</div>
