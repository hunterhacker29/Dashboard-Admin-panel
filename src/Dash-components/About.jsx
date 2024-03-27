import React from 'react'
import './about.css'
function About() {
  return (
    <div>
       <main>
    <section class="ab-hero">
        <h1>Blog Hub: Blogging beyond boundaries </h1>
        <img src="" alt="Hero Image"/>
        <p>Your tagline or short description</p>
    </section>

    <section class="about-mission">
        <h2>Our Mission</h2>
        <p>Describe your blog's purpose, goals, and impact on readers.</p>
        <p>Highlight content types and what makes them unique.</p>
        <p>Emphasize commitment to quality, engagement, and audience needs.</p>
    </section>

    <section class="ab-meet-the-team">
        <h2>Meet the Team</h2>
        <div class="team-members">
         <p>Advait jadhav</p> 
          <p>mudassir ansari</p>
          <p>Nandani kadawe</p>
          <p>kamran dhopaunkar</p>
            </div>
    </section>

    <section class="ab-community-spotlight">
        <h2>Community Spotlight</h2>
        </section>

    <section class="ab-get-involved">
        <h2>Get Involved</h2>
        </section>

    
        
        <section class="ab-contact-us">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you! Feel free to reach out using the following options:</p>
  <ul class="contact-methods">
    <li>
      <label for="email">Email:BlogHubsupport01@gmail.com</label>
      <span id="contact-email">
        </span>
    </li>
    <li>
      <label for="phone">Phone:+91 6546546542</label>
      <span id="contact-phone">
        </span>
    </li>
  </ul>

  <p>You can also follow us on social media for updates and announcements:</p>
  </section>

  <footer>
    &copy; <span id="currentYear"></span> Blog Hub. All rights reserved.
  </footer>

</main>
    </div>
  )
}

export default About
