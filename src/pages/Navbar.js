// Navbar.js

// import {React,useState,useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
// import logo from '../logo.png'; 


// const Navbar = () => {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     // Fetch user data when the component mounts
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       // Replace with the actual backend endpoint that provides user data
//       const response = await fetch('/api/user');
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };
//   return (
//     <div className="navbar">
//       <div className="left-section">
//         <div className="logo-container">
//           {/* Your logo component or image */}
//           <img src={logo} alt="Logo" />
//         </div>
//       </div>
//       <div className="right-section">
//         <div className="profile-container">
//           {/* Your user profile area */}
//           <span>{userData.username}</span>
//           <img src={userData.profilePicture} alt="Profile" />
//         </div>
//         <div className="notification-container">
//           {/* FontAwesome Bell Icon */}
//           <FontAwesomeIcon icon={faBell} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.png';

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Replace with the actual backend endpoint that provides user data
      const response = await fetch('/api/user');
      const data = await response.json();
      setUserData(data);

      // Assuming the user data includes a 'notificationCount' property
      setNotificationCount(data.notificationCount);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo-container">
          {/* Your logo component or image */}
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="right-section">
        <div className="profile-container">
          {/* Your user profile area */}
          <span>{userData.username}</span>
          <img src={userData.profilePicture} alt="Profile" />
        </div>
        <div className="notification-container">
          {/* FontAwesome Bell Icon with notification count */}
          <span className="notification-count">{notificationCount}</span>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;