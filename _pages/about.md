---
layout: about
title: about
permalink: /
subtitle: Master’s student, RRC, IIIT Hyderabad

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

social: true # shows social icons under the profile photo
---

I am a Master’s student at the [Robotics Research Center, IIIT Hyderabad](https://robotics.iiit.ac.in/), advised by [Prof. Spandan Roy](https://scholar.google.com/citations?hl=en&user=tUKoUgMAAAAJ).

My research is on **learning for contact-rich dexterous manipulation**. I am interested in what robots can infer about their physical interaction with objects, such as contact states, geometry and spatial relationships, from RGB cameras and proprioception, and how that information can drive better manipulation policies on real hardware.

This has led to work on learning **contact estimation as a pseudo-tactile signal** for in-hand object reorientation, and on dexterous grasping policies that remain **robust to uncalibrated camera viewpoints**, both validated on physical robots. Next, I am interested in learning this information together with the policy, combining it with real touch where a hand has it, and using it to adapt policies on real hardware and across hands with fewer trials.

Always happy to collaborate or chat robotics! Feel free to reach out at my [email](mailto:soham.patil@research.iiit.ac.in).

## <a href="{{ '/news/' | relative_url }}" style="color: inherit">news</a>

{% include news.liquid %}

## <a href="{{ '/publications/' | relative_url }}" style="color: inherit">publications</a>

<div class="publications">
{% bibliography %}
</div>

## stepping stones

<div class="stones" data-carousel>
<div class="stones-track" tabindex="0" role="region" aria-label="Stepping stones (scrolls sideways)">
{%- for stone in site.data.stepping_stones -%}
  {%- capture stone_has_media -%}{%- if stone.media -%}{% file_exists {{ stone.media }} %}{%- else -%}false{%- endif -%}{%- endcapture -%}
  {%- assign stone_ext = stone.media | split: '.' | last | downcase -%}
  {%- if stone.link -%}{%- assign stone_href = stone.link -%}{%- elsif stone_has_media == 'true' -%}{%- assign stone_href = stone.media | relative_url -%}{%- else -%}{%- assign stone_href = nil -%}{%- endif %}
  <article class="stone">
    {%- if stone_has_media == 'true' %}
    <a class="stone-media" href="{{ stone_href }}"{% if stone.link %} tabindex="-1" aria-hidden="true"{% else %} aria-label="{{ stone.title }}: full-size media"{% endif %}>
      {%- if stone_ext == 'mp4' or stone_ext == 'webm' -%}
      <video src="{{ stone.media | relative_url }}" autoplay loop muted playsinline preload="metadata" disablepictureinpicture aria-label="{{ stone.alt | default: stone.title }}"></video>
      {%- else -%}
      <img src="{{ stone.media | relative_url }}" alt="{{ stone.alt | default: stone.title }}" loading="lazy" />
      {%- endif -%}
    </a>
    {%- else %}
    <div class="stone-media stone-placeholder" role="img" aria-label="Media for {{ stone.title }} not added yet"><span>Media pending</span><code>{{ stone.media }}</code></div>
    {%- endif %}
    <h3 class="stone-title">{% if stone_href and stone.link %}<a href="{{ stone_href }}">{{ stone.title }}</a>{% else %}{{ stone.title }}{% endif %}</h3>
    <p class="stone-desc">{{ stone.description }}</p>
    {%- if stone.tags %}
    <ul class="stone-tags" aria-label="Technologies">{% for tag in stone.tags %}<li>{{ tag }}</li>{% endfor %}</ul>
    {%- endif %}
  </article>
{%- endfor %}
</div>
<div class="stones-nav" hidden>
  <button type="button" class="stones-btn stones-prev" data-dir="-1" aria-label="Previous stepping stones"><i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>
  <button type="button" class="stones-btn stones-next" data-dir="1" aria-label="More stepping stones"><i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>
</div>
<div class="stones-dots" aria-hidden="true" hidden></div>
</div>
<script src="{{ '/assets/js/carousel.js' | relative_url | bust_file_cache }}" defer></script>

## experience

<div class="cv-media">
  <div class="cv-thumb"><a href="https://gist.github.com/soham2560/700cc1e9e350ad4d32486e0a3a37fbb4"><img class="cv-logo" src="{{ '/assets/img/gsoc_logo.png' | relative_url }}" alt="Google Summer of Code" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">Google Summer of Code @ ros2-control <a class="chip" href="https://gist.github.com/soham2560/700cc1e9e350ad4d32486e0a3a37fbb4"><i class="fa-solid fa-file-lines" aria-hidden="true"></i>Report</a></span><span class="cv-meta">2025</span></div>
    <div class="cv-row cv-sub"><span>Open-Source Contributor</span><span>Remote</span></div>
    <ul class="cv-items">
      <li>Hardware-diagnostics support for <code>ros2_control</code>: a standardised health and fault-reporting API, new ROS messages (<code>HardwareStatus</code>, <code>HardwareDeviceStatus</code>), a unified Actuator/Sensor/System interface, and default diagnostic nodes with CLI tooling. Mentors: <a href="https://github.com/bmagyar">Dr. Bence Magyar</a>, <a href="https://github.com/saikishor">Sai Kishor Kothakota</a>.</li>
    </ul>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://robotics.iiit.ac.in/"><img class="cv-logo" src="{{ '/assets/img/rrc_logo.jpg' | relative_url }}" alt="Robotics Research Center, IIIT Hyderabad" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">Robotics Research Center, IIIT Hyderabad</span><span class="cv-meta">Feb – Jul 2024</span></div>
    <div class="cv-row cv-sub"><span>Research Intern</span><span>Hyderabad, India</span></div>
    <ul class="cv-items">
      <li>Built an in-house collaborative robot arm and an end-to-end pipeline for testing custom controllers on hardware, supporting research on adaptive and robust control.</li>
    </ul>
  </div>
</div>

## education

<div class="cv-media edu-row">
  <div class="edu-when">Jul 2024 – present</div>
  <div class="cv-body">
    <div class="cv-title">IIIT Hyderabad, Robotics Research Center</div>
    <div class="cv-row cv-sub"><span>MS by Research, Computer Science</span><span>Hyderabad, India</span></div>
    <div class="cv-note">CGPA <strong>10.0/10</strong> · Advised by <a href="https://scholar.google.com/citations?hl=en&amp;user=tUKoUgMAAAAJ">Prof. Spandan Roy</a></div>
  </div>
</div>

<div class="cv-media edu-row">
  <div class="edu-when">Jul 2019 – Jul 2023</div>
  <div class="cv-body">
    <div class="cv-title">MIT World Peace University (MIT-WPU)</div>
    <div class="cv-row cv-sub"><span>B.Tech, Computer Science</span><span>Pune, India</span></div>
    <div class="cv-note">CGPA 8.55/10</div>
  </div>
</div>

## awards

<div class="cv-media">
  <div class="cv-thumb"><img src="{{ '/assets/img/robocon.jpg' | relative_url }}" alt="DD Robocon team with their robots" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">DD Robocon <span class="tag tag-accent"><i class="fa-solid fa-trophy" aria-hidden="true"></i>National winner 2020</span></span><span class="cv-meta">2020 – 2023</span></div>
    <div class="cv-note">India's national stage of ABU Robocon, the Asia-Pacific university robotics championship.</div>
    <ul class="cv-items">
      <li><strong>Winner</strong> (2020), representing India at the international final; ranked <strong>2nd</strong> (2023) and <strong>4th</strong> (2022) nationally among 150+ teams.</li>
      <li>Led a team designing and building complete competition robots from scratch each season across mechanical design, custom electronics, firmware, motor control and autonomy; built an in-house integrated actuator matching commercial specs at ~half the cost, a wheeled-odometry module (&lt;4% error), and ROS 2 / Nav2 autonomy on register-level AVR/TM4C firmware.</li>
    </ul>
    <details class="cv-more">
      <summary><i class="fa-solid fa-play" aria-hidden="true"></i>Watch the robots (2 videos)</summary>
      <div class="cv-more-body">
        <figure class="cv-video">
          {% include video.liquid path="assets/video/robocon2023.mp4" class="img-fluid rounded" controls=true cache_bust=true %}
          <figcaption class="cv-note">2023, ranked 2nd nationally.</figcaption>
        </figure>
        <figure class="cv-video">
          {% include video.liquid path="assets/video/robocon2022.mp4" class="img-fluid rounded" controls=true cache_bust=true %}
          <figcaption class="cv-note">2022, ranked 4th nationally.</figcaption>
        </figure>
      </div>
    </details>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><img class="cv-logo" src="{{ '/assets/img/matlab_logo.jpeg' | relative_url }}" alt="MATLAB" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-row"><span class="cv-title">MATLAB Winners Circle</span><span class="cv-meta">2020</span></div>
    <div class="cv-note">Omni-drive robot modeling and control in MATLAB/Simulink.</div>
  </div>
</div>

## teaching

<div class="cv-media">
  <div class="cv-thumb"><img class="cv-logo" src="{{ '/assets/img/iiit_logo.jpg' | relative_url }}" alt="IIIT Hyderabad" loading="lazy" /></div>
  <div class="cv-body">
    <div class="cv-title">IIIT Hyderabad</div>
    <div class="cv-row cv-sub"><span>Teaching Assistant</span></div>
    <ul class="teach-list">
      <li><span class="teach-course">Mobile Robotics (CS7.503)</span><span class="teach-who">Instructor: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a></span></li>
      <li><span class="teach-course">Robotics: Planning and Navigation (EC4.403)</span><span class="teach-who">Instructor: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a></span></li>
      <li><span class="teach-course">Systems Thinking (EC5.202) <span class="tag tag-accent">Ongoing</span></span><span class="teach-who">Instructor: <a href="https://scholar.google.com/citations?hl=en&amp;user=tUKoUgMAAAAJ">Prof. Spandan Roy</a></span></li>
    </ul>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://nptel.ac.in/courses/101106001"><img class="cv-logo" src="{{ '/assets/img/nptel_logo.jpg' | relative_url }}" alt="NPTEL" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-title">NPTEL</div>
    <div class="cv-row cv-sub"><span>Teaching Assistant</span></div>
    <ul class="teach-list">
      <li><span class="teach-course">Perception &amp; Planning for Aerial Vehicles <a class="chip" href="https://nptel.ac.in/courses/101106001"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Course</a></span><span class="teach-who">Instructors: <a href="https://scholar.google.co.in/citations?user=QDuPGHwAAAAJ&amp;hl=en">Prof. K. Madhava Krishna</a>, <a href="https://scholar.google.com/citations?user=5i1t_QgAAAAJ&amp;hl=en">Prof. Harikumar Kandath</a>, <a href="https://scholar.google.com/citations?user=aPSLBVUAAAAJ&amp;hl=en">Prof. Antony Thomas</a></span></li>
    </ul>
  </div>
</div>

<div class="cv-media">
  <div class="cv-thumb"><a href="https://github.com/RoboticsIIITH/summer-school-2025"><img class="cv-logo" src="{{ '/assets/img/rrc_logo.jpg' | relative_url }}" alt="RRC Robotics Lab" loading="lazy" /></a></div>
  <div class="cv-body">
    <div class="cv-title">RRC Robotics Summer School 2025 <a class="chip" href="https://github.com/RoboticsIIITH/summer-school-2025"><i class="fa-brands fa-github" aria-hidden="true"></i>Materials</a></div>
    <div class="cv-row cv-sub"><span>Instructor</span><span>RRC Robotics Lab, IIIT Hyderabad</span></div>
  </div>
</div>
