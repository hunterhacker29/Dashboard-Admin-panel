// import React from 'react'
// import './dash.css'

// function Dashprofile() {
//   return (
//     <div>
//  <div class="dash-profile-container">
//       <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh" alt="Profile Picture" class="profile-picture"/>
//       <i class="fas fa-pencil-alt edit-icon"></i> <div class="info-container">
//          <h1>John Doe (30 years old)</h1>
//         <p>Birthdate: 1993-01-01</p>
//         <p>Software Engineer</p>
//         <ul>
//           <li><i class="fas fa-envelope"></i> johndoe@email.com</li>
//           <li><i class="fas fa-link"></i> <a href="#">https://johndoe.com</a></li>
//         </ul>
//         <h1>
//           About me:-
//         </h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum tempus egestas. Suspendisse potenti. Maecenas pharetra convallis posuere. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Dashprofile

import React from 'react';
import './dash.css';

function Dashprofile() {
  return (
    <div className="user-profile">
      <div className="profile-container">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRy5QMODyHm-LaMpgXOqMIUHPbQ-Y51jAZR_UJYC-9Dv1IL3ovh" alt="Profile Picture" className="profile-picture" />
        <div className="info-section">
          <h2>John Doe (Blogger)</h2>
          <p>Sharing my tech knowledge and experiences.</p>
          <ul>
            <li><i className="fas fa-envelope"></i> johndoe@email.com</li>
            <li><i className="fas fa-link"></i> <a href="#">https://johndoe.com</a></li>
          </ul>
          <div className="about-me">
            <h3>About Me:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum tempus egestas. Suspendisse potenti. Maecenas pharetra convallis posuere. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </div>
          <div className="interests">
            <h3>Interests:</h3>
            <ul>
              <li>Technology</li>
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
              <li>Gadget Reviews</li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Follow Me On:</h3>
            <ul>
              <li><i className="fab fa-twitter"></i> <a href="abc@twitter.com">Twitter</a></li>
              <li><i className="fab fa-instagram"></i> <a href="elon123@musk">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashprofile;

